import "./Feed.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import {Link} from 'react-router-dom'
import { apiKey,value_converter } from "../../../../Data"
import { useState ,useEffect} from "react"

function Feed({category}){

    const [data,setdata] = useState([])

    const FetchData = async()=>{
        const video_list = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}` 

        await fetch(video_list)
        .then(res =>res.json())
        .then(res =>setdata(res.items))
    

    }

    useEffect(()=>{
        FetchData()

    },[category])

    console.log(data)
    return(
        <div className="feed">
            {data.map((value,index)=>(
                 <Link to={`video/${value.snippet.categoryId}/${value.id}`} className="card">
                <img src={value.snippet.thumbnails.medium.url} alt="" />
                <h2>{value.snippet.title}</h2>
                <h3>{value.snippet.channelTitle}</h3>
                <p>{value_converter(value.statistics.viewCount)} views &bull;{value.snippet.publishedAt}</p>
           </Link>
            ))}
           
        </div>

        
    )
}

export default Feed