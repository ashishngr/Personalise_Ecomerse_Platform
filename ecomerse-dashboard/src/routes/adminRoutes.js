import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import DashboardLayout from "../dashboard-view/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../pages/product/ProductList";

const adminRoutesWrapper = () => {
    return(
        <Routes>
            <Route path="*" element={<ErrorPage />}/>
            <Route path="/" element={<DashboardLayout/>}>
                <Route 
                path="/product" element={
                    <RequireAuth>
                        <ProductList />
                    </RequireAuth>
                }/>
            </Route>
            
            
            
        </Routes>
    )
}
export default adminRoutesWrapper;