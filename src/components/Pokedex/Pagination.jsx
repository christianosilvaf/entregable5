import React from 'react'

const Pagination = ({lastPage,pagesInCurrentBlock,setCurrentPage,currentPage}) => {

    const handleNextPage= ()=>{
        setCurrentPage((prevState)=> {
            if(prevState<lastPage){
                if(prevState+5<lastPage){
                    return (prevState+5)
                } {return (prevState+1)}
                ;
            }
            {return prevState};
    });
    };

    const handleLastPage= ()=>{
        setCurrentPage(lastPage);
    };

    const handlePreviousPage =()=>{
        setCurrentPage((prevState)=>{
            if(prevState-1>1){
                if(prevState-5>1){
                    return (prevState-5)
                } {return (prevState-1)}
                ;
            }
            {return prevState};
        });
    };

    const handleFirstPage=()=> setCurrentPage(1);

  return (
    <ul className='flex justify-center gap-2 p-4 '>
        <li  className='p-2 px-3 my-1 text-[20px] font-semibold text-white cursor-pointer' onClick={handleFirstPage}>{"<<"}</li>
        <li className='p-2 px-3 my-1 text-[20px] font-semibold text-white cursor-pointer' onClick={handlePreviousPage}>{"<"}</li>
        {
            pagesInCurrentBlock.map((page)=>(
                <li className={`p-2 px-3 my-1 rounded-md text-[20px] font-semibold cursor-pointer ${currentPage===page ? "bg-red-500 animate-pulsek" : "bg-white"}`} key={page} onClick={()=>setCurrentPage(page)}>{page}</li>
            ))
        }

        <li className='p-2 px-3 my-1 text-[20px] font-semibold text-white cursor-pointer' onClick={handleNextPage}>{">"}</li>
        <li className='p-2 px-3  my-1 text-[20px] font-semibold text-white cursor-pointer' onClick={handleLastPage}>{">>"}</li>
    </ul>
  )
}

export default Pagination