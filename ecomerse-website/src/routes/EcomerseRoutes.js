import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Settings from "../pages/Settings";
import Cart from "../pages/Cart";

const EcomerseRoutes = () => {
  return (
    <Routes> 
        <Route path="/homepage" element={<Homepage/>}/> 
        <Route path="/settings" element={<Settings />}/>
        <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default EcomerseRoutes