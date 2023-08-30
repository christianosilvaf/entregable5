import React from 'react'
import { useSelector } from "react-redux";

const HeaderPokeball = ({children}) => {

    const {name} = useSelector(store => store.trainer);

    return (
    <section className='h-[100px] relative'>
        <div className='bg-red-600 h-1/2 border-t-[5px] border-b-[3px] border-black relative'>
            <div className='absolute w-[200px] min-[400px]:w-1/2 bottom-0 translate-y-1/2 left-0'>
                <img src="/LogoIntro.png"  alt="" />
            </div>
        </div>

        <div className='bg-white h-1/2 border-t-[3px] border-b-[5px] border-black'></div>
        <div className={`h-[70px] bg-white rounded-full aspect-square top-4  
                        right-10 translate-x-1/2 absolute
                        border-[8px] border-black
                        after:block after:content-[""] 
                        after:h-[38px] after:aspect-square
                        after:bg-red-500  ${name? 'after:animate-pulse':''} after:rounded-full
                        after:border-[6px] after:border-black
                        after:top-[8px] after:right-[8px] after:absolute`}>
                        
        </div>
        

        {children}
    </section>
    )
}

export default HeaderPokeball