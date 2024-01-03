import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import AddEmployee from './Components/AddEmployee';
import ListEmployee from './Components/ListEmployees';
import UpdateEmployee from './Components/UpdateEmployee'
import ProductList from "./Components/ProductList"
import Product from './Components/Product';
import CartList from './Components/CartList';
import EmployeeNavigation from './Components/EmployeeNavigation';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <EmployeeNavigation></EmployeeNavigation>
         <Routes>
           <Route path="/" element={<ListEmployee />} />
           <Route path="/addemployee" element={<AddEmployee />} />
           <Route path="/updateEmployee/:id" element={<UpdateEmployee/>} />
         </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Navigation></Navigation>
       <Routes>
       <Route path="/" element={<ProductList/>}></Route>
       <Route path="/product/:productId" element={<Product/>}></Route>
       <Route path="/cart" element={<CartList/>}></Route>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
