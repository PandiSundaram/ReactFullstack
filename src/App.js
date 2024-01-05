import logo from './logo.svg';
import './App.css';
import {Suspense,lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import AddEmployee from './Components/AddEmployee';
import ListEmployee from './Components/ListEmployees';
import UpdateEmployee from './Components/UpdateEmployee'
import ProductList from "./Components/ProductList"
import Product from './Components/Product';
import CartList from './Components/CartList';
import EmployeeNavigation from './Components/EmployeeNavigation';
import Counter1 from './ReusableComponent/CustomHook/Counter1';
import Counter2 from './ReusableComponent/CustomHook/Counter2';
import Profile from './ReusableComponent/HOC/Profile';
import Dashboard from './ReusableComponent/HOC/Dashboard';
import RouterLnk from './Performance/Splitting/RouterLnk';
import Provider from './ContextComponent/Provider';
const Name = lazy(() => import('./Performance/Splitting/Name'));  // code splitting
const Address = lazy(()=> import('./Performance/Splitting/Address'));





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

      {/* <BrowserRouter>
      <Navigation></Navigation>
       <Routes>
       <Route path="/" element={<ProductList/>}></Route>
       <Route path="/product/:productId" element={<Product/>}></Route>
       <Route path="/cart" element={<CartList/>}></Route>
       </Routes>
      </BrowserRouter> */}

      {/* <Counter1/>
      <Counter2/> 
      <Profile></Profile>
      <Dashboard></Dashboard>
     */}

     {/* <Provider></Provider> */}


     <BrowserRouter>
     <RouterLnk></RouterLnk>
     <Suspense fallback={<h3>...loading</h3>}>
        <Routes>
        
          <Route path="/name" element={<Name />}> </Route>
          <Route path="/address" element={<Address />}></Route>

        
        </Routes>
        </Suspense>
     </BrowserRouter>

    </div>
  );
}

export default App;
