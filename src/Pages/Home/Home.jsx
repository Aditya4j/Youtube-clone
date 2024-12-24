import Feed from "../../Components/Feed/Feed"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./Home.css"
import { useState } from "react";

function Home({sidebar}){
    const [category,setcategory] = useState(0);

    return(
        <>
          <Sidebar sidebar={sidebar} category={category} setcategory = {setcategory}/>
          <div className={`container ${sidebar?"":"large-container"}`}>
            <Feed category={category}/>

          </div>
        </>
    )
}

export default Home