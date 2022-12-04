import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function Home() {
    return(
        <section className='w-screen min-h-screen flex flex-col items-center bg-pokebola-theme bg-no-repeat bg-cover bg-[#FFCC01]'>
            <div className='max-w-[1000px] min-h-[500px] lg:min-h-[700px] h-auto flex flex-col justify-around items-center'>
            <img className='w-[250px] lg:w-[550px]' src={Logo} alt="Pokemon"/>

            <div className='flex flex-col items-center text-center'>
                <h3 className='text-xl lg:text-2xl text-white font-poppins font-normal text-shadow-blue'>Se aventure no mundo dos <br/> Pokémons de um jeito divertido</h3>
                <Link to="/pokemons"><button className='mt-10 px-5 lg:px-10 py-2 rounded-xl border-2 border-white bg-blue hover:bg-white text-white hover:text-blue duration-500 text-xl lg:text-2xl font-poppins font-light dex-shadow'>Começar</button></Link>
            </div>
            </div>
        </section>
    )
}