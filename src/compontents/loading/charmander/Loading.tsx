import loading from '../../../assets/charmander.webp'

export default function CharmanderLoading() {
    return(
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <img className='w-[100px]' src={loading} alt='loading gif'/>
            <span className='text-sm text-white lg:text-xl font-poppins'>Informações sendo carregadas...</span>
        </div>
    )
}