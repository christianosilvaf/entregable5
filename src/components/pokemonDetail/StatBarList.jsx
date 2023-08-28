import React from 'react'

const StatBarList = ({stats}) => {

    const per = (statvalue)=>{
        const por= statvalue*100/255
        return `${por}%`
    }
    
    return (
    <section className='w-[120%] h-[80%] text-[9px] p-2 m-auto'>
        <h2 className='text-center capitalize'>Stats</h2>
        <article>
            <ul>
                {
                    stats?.map((stat)=> (
                    <li key={stat.name} className='flex flex-col gap-1'> 
                        <div className='flex flex-row justify-between'>
                            <span>{stat.name}</span>
                            <span>{stat.value}/255</span>
                        </div>

                        <div className='h-[5px] bg-slate-200 rounded-md'>
                            <div style={{width: per(stat.value)}} className='h-full  bg-gradient-to-r from-yellow-500 to bg-orange-500'></div>
                        </div>
                    </li>))
                }
            </ul>
        </article>
    </section>
)
}

export default StatBarList