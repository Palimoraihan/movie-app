"use client"
import { useEffect, useState } from "react";
import HeaderMenu from "../../components/Utilitis/HeaderMenu";
import Pagination from "../../components/Utilitis/Pagination";
import AnimeList from "../../components/AnimeList";
import { getAnimeResponse } from "../services/api_services";
const Page = async()=>{
    const [page,setPage] = useState(1)
    const [topAnime,setTopAnime] = useState([])
    
    const fetchData= async()=>{
    const populerAnime = await getAnimeResponse("top/anime",`page=${page}`)
    setTopAnime(populerAnime)
    }
   useEffect(()=>{
    fetchData()
   },[page])
    return (
        <>
        <HeaderMenu title={`Terpopuler #${page}`}/>
        <AnimeList api={topAnime}/>
        <Pagination 
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page}
        setPage = {setPage}
        />
        </>
    )
}

export default Page