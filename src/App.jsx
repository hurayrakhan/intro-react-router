import { Outlet, useNavigation } from "react-router"
import Header from "./component/Header/Header"
import Sidebar from "./component/Sidebar/Sidebar"


function App() {

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  
  console.log(isNavigating)

  return (
    <div>
      <Header></Header>
      <div className="flex gap-10">
        <Sidebar></Sidebar>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default App
