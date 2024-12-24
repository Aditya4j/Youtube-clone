import "./Navbar.css"
import youtubelogo from "../../assets/logo.png"
import menu from "../../assets/menu.png"
import serach_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/user_profile.jpg"
import {Link} from "react-router-dom"
function Navbar({setSidebar}){
    return(
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" src={menu} alt="" onClick={()=>setSidebar(prev=>prev === false?true:false)}/>
                <Link to="/"><img className="logo" src={youtubelogo} alt=""/></Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                <input  type="text" placeholder="Search"/>
                <img src={serach_icon} alt=""/>
                </div>
                
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} alt=""/>
                <img src={more_icon} alt=""/>
                <img src={notification_icon} alt=""/>
                <img className="user_profile" src={profile_icon} alt=""/>

            </div>
        </nav>
    )
}

export default Navbar