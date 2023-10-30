import EcomerseRoutes from './routes/EcomerseRoutes'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter> 
    <Routes>
      <Route path='/my-ecomerse/*' element={<EcomerseRoutes />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
