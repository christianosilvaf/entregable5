import FooterPokeball from '../components/Layout/FooterPokeball'
import { loginTrainer } from '../store/slices/trainer.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { choosingtype } from '../store/slices/pokedextype.slice'


const Home = () => {

    const dispatch=useDispatch();
    const Navigate=useNavigate();
    //console.log(useSelector(store =>store.trainer))para ver por consola el estado

    const handleSubmit =(e)=>{
        e.preventDefault()
        const nameTrainer=e.target.nameTrainer.value;
        dispatch(loginTrainer(nameTrainer));
        Navigate("/Pokedex")
    };

    const handleChange=(e)=>{
        const typepokedex=e.target.defaultChecked;
        if(typepokedex){dispatch(choosingtype(1))}
        else{dispatch(choosingtype(2))}
    }

    return (
    <main className='min-h-screen flex flex-col  justify-between bg-[#1B3F4D] relative '>
        <section className='h-4/5'>
            <article className='flex flex-col items-center justify-center 
                                gap-4 my-40'>

                <div className='px-5 '>
                    <img src="/LogoIntro.png" alt="" />
                </div>

                <h2 className='text-red-600 text-[40px] font-bold animate-pulse'>
                    Welcome Trainer!
                </h2>

                <p className='font-medium text-[20px] text-white'>
                    Let's get Started , give me your name:
                </p>

                <form onSubmit={handleSubmit} >
                    <input className="border-t-2 border-l-2 border-b-2 p-[10px]
                                        shadow-lg shadow-gray-700/40" 
                            autoComplete="off" id="nameTrainer" type="text" 
                            placeholder='Type Your Name...'  required/>
                    <button className='bg-red-600 p-3 text-white px-8 
                                        shadow-lg shadow-gray-700/50'> Go! </button>
                </form>

                <div>
                    <form className='flex flex-row gap-10 my-5'>
                        <div className='flex flex-col items-center gap-1'>
                            <img src="/pokedex2.png" width="70" height="70" alt="" />
                            <input type="radio" id="type1" name="type" value="1" onChange={handleChange} defaultChecked/>
                            <label className='text-white'> Pokedex #1 </label>
                        </div>

                        <div className='flex flex-col items-center gap-1'>
                            <img src="/pokedex1.png" width="70" height="70" alt="" />
                            <input type="radio" id="type2" name="type" value="2" onChange={handleChange} />
                            <label className='text-white'> Pokedex #2 </label>
                        </div>
                    </form>
                </div>

            </article>
        </section>

        <div className='absolute h-1/1 w-1/1 flex gap-10 justify-center items-center mx-auto'>
        <div className='   animate-bounce'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" viewBox="0 0 100 100">
	<path d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
		fill="#f00" stroke="#222"
	></path>
	<circle
		cx="50"
		cy="50"
		r="5"
		fill="#fff" stroke="#222"
	></circle>
	<path d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
		fill="#fff" stroke="#222"
	></path>
            </svg>
        </div>

        <div className='  animate-bounce right-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" viewBox="0 0 100 100">
	<path d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
		fill="#f00" stroke="#222"
	></path>
	<circle
		cx="50"
		cy="50"
		r="5"
		fill="#fff" stroke="#222"
	></circle>
	<path d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
		fill="#fff" stroke="#222"
	></path>
            </svg>
        </div>

        <div className='  animate-bounce inset-x-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" viewBox="0 0 100 100">
	<path d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
		fill="#f00" stroke="#222"
	></path>
	<circle
		cx="50"
		cy="50"
		r="5"
		fill="#fff" stroke="#222"
	></circle>
	<path d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
		fill="#fff" stroke="#222"
	></path>
            </svg>
        </div>

        </div>
        <FooterPokeball />   

        

    </main>
    )
}

export default Home