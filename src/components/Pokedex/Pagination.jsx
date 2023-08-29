import React from 'react'

const Pagination = ({lastPage,pagesInCurrentBlock,setCurrentPage}) => {

    const handleNextPage= ()=>{
        setCurrentPage((prevState)=> {
            if(prevState<=lastPage){
                return (prevState+1);
            };
            return prevState;
    });
    };

    const handleLastPage= ()=>{
        setCurrentPage(lastPage);
    };

    const handlePreviousPage =()=>{
        setCurrentPage((previousPage)=>{
            if(previousPage-1>=1){
                return (previousPage-1);
            } return previousPage;
        });
    };

    const handleFirstPage=()=> setCurrentPage(1);

  return (
    <ul className='flex justify-center gap-2 p-4'>
        <li onClick={handleFirstPage}>{"<<"}</li>
        <li onClick={handlePreviousPage}>{"<"}</li>
        {
            pagesInCurrentBlock.map((page)=>(
                <li key={page} onClick={()=>setCurrentPage(page)}>{page}</li>
            ))
        }

        <li onClick={handleNextPage}>{">"}</li>
        <li onClick={handleLastPage}>{">>"}</li>
    </ul>
  )
}

export default Pagination