import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Settings from "../pages/SettingPage";
import Cart from "../pages/Cart";

const EcomerseRoutes = () => {
  return (
    <Routes> 
        <Route path="/home" element={<Homepage/>}/> 
        <Route path="/setting" element={<Settings />}/>
        <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default EcomerseRoutes