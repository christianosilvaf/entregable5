const paginateData = (items, currentPage)=>{
    
    const items_per_page= 20;

    const sliceEnd= currentPage * items_per_page;
    const sliceStart= sliceEnd-items_per_page;
    const itemsInCurrentPage =items.slice(sliceStart,sliceEnd);

    const lastPage =Math.ceil(items.length / items_per_page);

    const pages_per_block= 5;
    const currentBlock= Math.ceil(currentPage/pages_per_block);

    const pagesInCurrentBlock=[];
    const maxPage= currentBlock * pages_per_block;
    const minPage= maxPage-pages_per_block+1;

    for(let i=minPage;i<=maxPage;i++){
        if(i<=lastPage){
            pagesInCurrentBlock.push(i);
        };
    };

    return {
        itemsInCurrentPage,
        lastPage,
        pagesInCurrentBlock
    };
};

export {
    paginateData
}