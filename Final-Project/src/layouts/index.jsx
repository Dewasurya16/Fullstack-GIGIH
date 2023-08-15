import { Outlet } from "react-router-dom";
import Navigasi from "../components/navigasi"
const layouts = () =>{
  return(
    <>
      <Navigasi />
      <Outlet />
    </>
  )
}

export default layouts