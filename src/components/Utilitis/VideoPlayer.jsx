"use client"
import { YoutubeLogo } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"
const VideoPlayer = ({youtubeId})=>{
    const [isOpen, setIsOpen] = useState(true)
    const handleCloseButton = ()=>{
        setIsOpen((peviuseState)=> !peviuseState)
    }
    const option = {width : "350", height:"250"}
    const Player = ()=>{
       return  (<div className="fixed bottom-2 right-2">
            <button 
            onClick={handleCloseButton}
            className="text-color-primary float-right">X</button>
            <YouTube videoId={youtubeId} 
            onReady={(event)=> event.target.pauseVideo()}
            opts={option}
            />
        </div>)
    }
    return isOpen ? <Player/>:<button onClick={handleCloseButton} className="fixed bottom-5 right-5 text-color-primary" ><YoutubeLogo size={42}/></button>
}
export default VideoPlayer