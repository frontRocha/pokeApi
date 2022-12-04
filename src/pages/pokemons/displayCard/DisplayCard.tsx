import axios from "axios";
import React, { useEffect, useState, Fragment, useRef } from "react";
import { Person } from "../../../compontents/attributes/Attributes";
import { Dialog, Transition } from '@headlessui/react'
import { ArrowLeft } from 'phosphor-react'
import CharmanderLoading from "../../../compontents/loading/charmander/Loading";
import './DisplayCard.css'

interface ReceiveName {
    data: string;
}

const DisplayCard: React.FC<ReceiveName> = ({ data }) => {

    const [vetor, setVetor] = useState()
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if (data) {
            setOpen(true)
            setLoading(true)
            const response = axios.get<Person>(`https://pokeapi.co/api/v2/pokemon/${data[1]}`).then((res) => setVetor(Object(res.data)))
            
            setLoading(false)
        }
    }, [data])

    const trasnformVetor = Array(vetor)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className={`relative transform overflow-hidden rounded-lg ${data[0]} text-left shadow-xl transition-all w-[400px] h-[500px]`}>
                                <ArrowLeft onClick={() => setOpen(false)} ref={cancelButtonRef} className="cursor-pointer mx-4 my-4 text-white text-2xl" />
                                {loading ?
                                    <CharmanderLoading />
                                    :
                                    <div>
                                        <div>
                                            <h1 className="text-white text-2xl font-poppins ml-4">{data ? data[1][0].toLocaleUpperCase() + data[1].substring(1) : ""}</h1>
                                            <span className="text-white text-sm text-center font-poppins ml-4 rounded-xl border border-white py-1 px-2">{data ? data[0][0].toLocaleUpperCase() + data[0].substring(1) : ""}</span>
                                        </div>
                                        {trasnformVetor.map((item) => (
                                            <div>
                                                <div className="text-white text-sm font-poppins w-full h-full flex flex-col mt-4">
                                                    <strong className="mx-2">Status:</strong>
                                                    <div className="flex my-1 mx-4">
                                                        <p>{item?.stats[0].stat.name}:</p>
                                                        <span className="pl-2"> {item?.stats[0].base_stat}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>{item?.stats[1].stat.name}:</p>
                                                        <span className="pl-2"> {item?.stats[1].base_stat}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>{item?.stats[2].stat.name}:</p>
                                                        <span className="pl-2"> {item?.stats[2].base_stat}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>{item?.stats[3].stat.name}:</p>
                                                        <span className="pl-2"> {item?.stats[3].base_stat}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>{item?.stats[4].stat.name}:</p>
                                                        <span className="pl-2"> {item?.stats[4].base_stat}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>{item?.stats[5].stat.name}:</p>
                                                        <span className="pl-2"> {item?.stats[5].base_stat}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>peso:</p>
                                                        <span className="pl-2"> {item?.weight}</span>
                                                    </div>
                                                    <div className="flex my-1 mx-4">
                                                        <p>altura:</p>
                                                        <span className="pl-2"> {item?.height}</span>
                                                    </div>
                                                </div>
                                                <div className="relative flex justify-center">
                                                    <img className="absolute imageOne w-[125px]" src={item?.sprites.back_default} alt={item?.sprites.back_default} />
                                                    <img className="absolute imageTwo w-[125px]" src={item?.sprites.front_default} alt={item?.sprites.front_default} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    }
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default DisplayCard        