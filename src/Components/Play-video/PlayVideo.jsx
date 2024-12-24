import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"
import { useState,useEffect } from "react"
import { apiKey,value_converter } from "../../../../Data"
import { useParams } from "react-router-dom"

function PlayVideo(){

    const {videoId} = useParams()

    const [apidata,setapidata] = useState(null)
    const [channelData,setChannelData] = useState(null)
    const [commentData,setCommentData] = useState([])


    const fetchVideoData = async()=>{
        const video_id_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`

        await fetch(video_id_url)
        .then(res=>res.json())
        .then(res=>{setapidata(res.items[0])})
    }

    const fetchdata = async()=>{
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${apiKey}`

        await fetch(channel_url)
        .then(res=>res.json())
        .then(res=>{setChannelData(res.items[0])})

        const comment_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${apiKey}`
        await fetch(comment_url)
        .then(res=>res.json())
        .then(res=>setCommentData(res.items))
    }
   

    useEffect(()=>{
        fetchVideoData()
    },[videoId])

    useEffect(()=>{
        fetchdata()
    },[apidata])

    console.log(channelData)

    
   
    return(
        <div className="play-video">
           {/*  <video src={video1} controls autoPlay muted></video> */}
           <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apidata?apidata.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <div className="publisher">
                    <img src={user_profile} alt=""/>
                    <div>
                       <h3>{apidata?apidata.snippet.channelTitle:"channeltitle"}</h3>
                       <p>{channelData?value_converter(channelData.statistics.subscriberCount):"500"} subscriber</p>

                    </div>
                    <button>Subscribe</button>
                </div>
                <div>
                    <span><img src={like}/>{apidata?value_converter(apidata.statistics.likeCount):"155"}</span>
                    <span><img src={dislike}/>5</span>
                    <span><img src={share}/>share</span>
                    <span><img src={save}/>save</span>
                </div>
            </div>
            <div className="description-div">
                <div>
                    <p>{apidata?value_converter(apidata.statistics.viewCount):"16K"} &bull;{apidata?apidata.snippet.publishedAt:"100k"}</p>
                </div>
                <p>{apidata?apidata.snippet.description:"Description here"}</p>
            </div>
            <hr/>
            <h4>{apidata?value_converter(apidata.statistics.commentCount):"100"} Comments</h4>
                {commentData.map((value,index)=>(
                    <div className="comment" key={index}>
                        <img src={value.snippet.topLevelComment.snippet.authorProfileImageUrl} alt/>
                        <div className="comment-div">
                            <h3>{value.snippet.topLevelComment.snippet.authorDisplayName}<span>  3 days Ago</span></h3>
                            <p>{value.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt=""/>
                                <span>{value_converter(value.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt=""/>
                                <span></span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

    )
}

export default PlayVideo