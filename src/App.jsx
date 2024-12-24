import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import Home from "./Pages/Home/Home"
import {Routes,Route} from "react-router-dom"
import Video from "./Pages/Video/Video"
import { useState } from "react"


function App() {

  const [sidebar,setSidebar] = useState(true)
  return (
    <>
     <Navbar setSidebar={setSidebar}/>
     <Routes>
       <Route path='/' element={<Home sidebar={sidebar}/>}/>
       <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
     </Routes>
    </>
  )
}

export default App