import { useState } from 'react'
import axios from 'axios'
import { Card } from './card';
import { Attributtes } from '../compontents/Attributtes/Attributes';

export default function Home() {
    const [ data, setData ] = useState<Attributtes[]>([])
    
    const handlePokemon = async () => {
        var endpoints = []

        for (var i = 1; i < 21; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setData(Object.values<any>(res)))
        return response
    }

    return (
        <main>
            <section className='bg-[#EFF1F0] h-auto min-h-screen'>
                <h1 className='pt-8 text-center text-6xl font-bold'>
                    <span className='text-yellow text-shadow-blue'>Poké</span>
                    <span className='text-blue text-shadow-yellow'>Api</span>
                </h1>
                <button onClick={handlePokemon}>Botão</button>
                <div className='w-screen h-auto min-h-[600px] flex flex-col justify-center items-center'>
                    {data.map((item, index) => (
                        <Card key={index} person={item}/>
                    ))}
                </div>
            </section>
        </main>
    )
}