import React from 'react'

const HeaderPokeball = ({children}) => {
    return (
    <section className='h-[100px] relative'>
        <div className='bg-red-600 h-1/2 border-t-[5px] border-b-[3px] border-black'></div>
        <div className='bg-white h-1/2 border-t-[3px] border-b-[5px] border-black'></div>
        <div className='h-[70px] bg-white rounded-full aspect-square top-4 
                        right-10 translate-x-1/2 absolute
                        border-[8px] border-black
                        after:block after:content-[""] 
                        after:h-[38px] after:aspect-square
                        after:bg-gray-400 after:rounded-full
                        after:border-[6px] after:border-black
                        after:top-[8px] after:right-[8px] after:absolute'>
                        
        </div>
        <div className='absolute w-[20%] top-2 left-2'>
            <img src="/LogoIntro.png" height="100" alt="" />
        </div>

        {children}
    </section>
    )
}

export default HeaderPokeball