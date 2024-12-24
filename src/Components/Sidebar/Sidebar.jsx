import "./Sidebar.css"
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobiles  from "../../assets/automobiles.png"
import sports  from "../../assets/sports.png"
import entertainment  from "../../assets/entertainment.png"
import tech  from "../../assets/tech.png"
import music  from "../../assets/music.png"
import blogs  from "../../assets/blogs.png"
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import news  from "../../assets/news.png"
import jack  from "../../assets/jack.png"
import simon  from "../../assets/simon.png"
import megan  from "../../assets/megan.png"
import cameron  from "../../assets/cameron.png"

function Sidebar({sidebar,category,setcategory}){



    return(
        <div className={`sidebar ${sidebar?"":'small-sidebar'}`}>
            <div className="shortcut-links">
                <div className={`side-links ${category === 0?"active":""}`} onClick={()=>setcategory(0)}>
                    <img src={home} alt=""/>
                    <p>Home</p>
                </div>
                <div className={`side-links ${category === 42?"active":""}`} onClick={()=>setcategory(42)}>
                    <SiYoutubeshorts className="react-icon"/>
                    <p>Shorts</p>
                </div>
                <div className={`side-links ${category === 0?"active":""}`}onClick={()=>setcategory(0)}>
                    <MdOutlineSubscriptions className="react-icon" />
                    <p>Subscription</p>
                </div>
                <hr/>
                <div className="heading">
                    <h3>Explore</h3>
                </div>
                <div className={`side-links ${category === 20?"active":""}`} onClick={()=>setcategory(20)}>
                    <img src={game_icon} alt=""/>
                    <p>Gaming</p>
                </div>
                <div className={`side-links ${category === 17?"active":""}`} onClick={()=>setcategory(17)}>
                    <img src={sports} alt=""/>
                    <p>Sports</p>
                </div>
                <div className={`side-links ${category === 2?"active":""}`}  onClick={()=>setcategory(2)}>
                    <img src={automobiles} alt=""/>
                    <p>Automobiles</p>
                </div>
                <div className={`side-links ${category === 25?"active":""}`}  onClick={()=>setcategory(25)}>
                    <img src={news} alt=""/>
                    <p>News</p>
                </div>
                <div className={`side-links ${category === 28?"active":""}`}  onClick={()=>setcategory(28)}>
                    <img src={tech} alt=""/>
                    <p>Tech</p>
                </div>
                <div className={`side-links ${category === 10?"active":""}`}onClick={()=>setcategory(10)}>
                    <img src={music} alt=""/>
                    <p>Music</p>
                </div>
                <div className={`side-links ${category === 21?"active":""}`}  onClick={()=>setcategory(21)}>
                    <img src={blogs} alt=""/>
                    <p>Blogs</p>
                </div>
                <hr/> 
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-links" onClick={()=>setcategory(0)}>
                    <img src={jack} alt=""/>
                    <p>Pwediepie</p>
                </div>
                <div className="side-links" onClick={()=>setcategory(0)}>
                    <img src={simon} alt=""/>
                    <p>MrBeast</p>
                </div>
                <div className="side-links" onClick={()=>setcategory(0)}>
                    <img src={megan} alt=""/>
                    <p>Carryminate</p>
                </div>
                <div className="side-links" onClick={()=>setcategory(0)}>
                    <img src={cameron} alt=""/>
                    <p>TSeries</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar