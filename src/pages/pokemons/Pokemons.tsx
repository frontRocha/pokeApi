import { useEffect, useState } from 'react'
import { Card } from './card/Card';
import { PersonCard } from '../../compontents/attributes/Attributes';
import axios from 'axios'
import PikachuLoading from '../../compontents/loading/pikachu/Loading';

import DisplayCard from './displayCard/DisplayCard';

export default function Pokemons() {
    const [count, setCount] = useState(13)
    const [data, setData] = useState<PersonCard[]>([])
    const [receiveName, setReceiveName] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setReceiveName('')

        const handlePokemon = async () => {
            var endpoints = []
            for (var i = 1; i < count; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            }
            var response = axios.all(endpoints.map((endpoint) => axios.get<PersonCard>(endpoint))).then((res) => setData(Object.values<any>(res)))
            
            return response
        }
        setLoading(false)
        handlePokemon()

    }, [count])

    const handleTeste = (e: string) => {
        setReceiveName(e)
    }

    const handleMoreCount = () => {
        if (count >= 903) {
            return
        }
        setCount(count + 12)
    }

    const handleDeleteCount = () => {
        if (count === 13) {
            return
        }

        setCount(count - 12)
    }

    return (
        <main>
            <section className='bg-[#EFF1F0] h-auto min-h-screen'>
                <h1 className='pt-8 text-center text-6xl font-bold'>
                </h1>
                {!loading ?
                    <div>
                        <div>
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
                                    {data.map((item, index) => (
                                        <Card key={index} data={item.data} valueName={handleTeste} />
                                    ))}
                                </div>
                                <DisplayCard data={receiveName} />
                            </div>
                        </div>
                        <div className='py-10 flex gap-2 justify-center'>
                            <button className='py-2 px-5 rounded bg-blue text-white font-poppins font-normal' onClick={handleMoreCount}>Mostrar mais</button>
                            <button className='py-2 px-5 rounded bg-blue text-white font-poppins font-normal' onClick={handleDeleteCount}>Mostrar menos</button>
                        </div>
                    </div>
                    : <PikachuLoading />
                }
            </section>
        </main>
    )
}