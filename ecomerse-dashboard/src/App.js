import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
// import adminRoutesWrapper from "./routes/adminRoutes";
// import DashboardLayout from "./dashboard-view/DashboardLayout"; 
const AdminRoutes = lazy(()=> import("./routes/adminRoutes")); 
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/"/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="/admin/*" element={<AdminRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
