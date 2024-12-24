import PlayVideo from "../../Components/Play-video/PlayVideo"
import Recommended from "../../Components/Recommended/Recommended"
import "./Video.css"
import {useParams} from "react-router-dom"

function Video(){
    const {categoryId,videoId} = useParams()
    return(
     <div className="play-container">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId}/>
    </div>)

}

export default Video