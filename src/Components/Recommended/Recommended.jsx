
import "./Recommended.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { apiKey,value_converter } from "../../../../Data"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"

function Recommended({categoryId}){
    const [data,setdata] = useState([])

    const FetchData = async()=>{
        const video_list = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}` 

        await fetch(video_list)
        .then(res =>res.json())
        .then(res =>setdata(res.items))
    }
    useEffect(()=>{
        FetchData()

    },[categoryId])

    return(
        <div className="recommended">
            {data.map((value,index)=>(
                <Link to={`/video/${value.snippet.categoryId}/${value.id}`} className="side-video-list">
                <img src={value.snippet.thumbnails.medium.url} alt
                />
                <div className="video-info">
                    <h4>{value.snippet.title}</h4>
                    <p>{value.snippet.channelTitle}</p>
                    <p>{value_converter(value.statistics.viewCount)} views</p>
                </div>
            </Link>


            ))}
            
        </div>
    )
}

export default Recommended