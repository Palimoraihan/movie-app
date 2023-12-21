const Pagination = ({page, lastPage, setPage})=>{
    const scrollTop = ()=>{
        scrollTo({
            behavior:"smooth",
            top:0
        })
    }

    const handlerNextPage =()=>{
        
        setPage((prevState)=>prevState+1)
        scrollTop()
    }
    const handlerPrevPage =()=>{
        if(page <= 1) return;
        setPage((prevState)=>prevState-1)
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page<= 1 ?null: <button onClick={handlerPrevPage} className="transition-all hover:text-color-accent">Perv</button>}
            
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null: <button onClick={handlerNextPage} className="transition-all hover:text-color-accent">Next Page</button>}
            
        </div>
    )
}

export default Pagination