import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import ProductList from "../pages/product/ProductList";
import { DashboardLayout } from "../dashboard-view/DashboardLayout";
import Profile from "../pages/profile/Profile";
import Dashboard from "../pages/dashboard/Dashboard";
import AddAndUpdateProduct from "../pages/product/AddAndUpdateProduct";


const adminRoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<DashboardLayout />}> 

                <Route 
                path="dashboard" element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                    
                }/>

                <Route 
                path="product" element={
                    <RequireAuth>
                        <ProductList />
                    </RequireAuth>
                }/>
                <Route 
                    path="product/add"
                    element={
                        <RequireAuth>
                            <AddAndUpdateProduct/>
                        </RequireAuth>
                    }
                />
                    
                
                <Route 
                path="profile"
                element={<RequireAuth>
                    <Profile />
                </RequireAuth>}/>

            </Route>    
        </Routes>
    )
}
export default adminRoutesWrapper;