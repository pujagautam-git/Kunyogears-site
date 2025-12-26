import {Route, Routes} from "react-router";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./Components/AuthContext.jsx";
import Home from "./Pages/Home/Home.jsx";

const App =() => {
  return(
    <div> 
       <AuthProvider>
       <CartProvider>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
       
      </Routes>
      </CartProvider>
      </AuthProvider>
     
    </div>
  )
}
export default App;