import loading from '../../../assets/loading.gif'

export default function PikachuLoading() {
    return(
        <div className='h-screen flex flex-col items-center justify-center'>
            <img className='w-[100px]' src={loading} alt='loading gif'/>
            <span className='text-sm lg:text-xl font-poppins'>Aguarde, pokemons sendo gerados...</span>
        </div>
    )
}