import { Outlet } from "react-router"
import Header from "./component/Header/Header"
import Sidebar from "./component/Sidebar/Sidebar"


function App() {


  return (
    <div>
      <Header></Header>
      <div className="flex gap-10">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default App
