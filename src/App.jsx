import { Outlet } from "react-router"
import Header from "./Header/Header"


function App() {


  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>
    </div>
  )
}

export default App
