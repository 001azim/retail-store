import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MESSAGELST from './shop-owner/message';
import ADDAMOUNT from './shop-owner/credit-debitadd';
import CUSTOMERLST from './shop-owner/cus-list';
import DEBITLST from './shop-owner/debit';
import LOGINSO from './shop-owner/login-SO';
import SALOGIN from './super-admin/login-SA';
import SO_REG from './super-admin/reg-SO';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import store from './store'
import {useDispatch ,useSelector} from 'react-redux';
import Add_debit from './shop-owner/add_debit';
import Ownerlist from './super-admin/ownerlist';
import Home from './super-admin/home';
import Credit from './shop-owner/credit';
import Interest from './shop-owner/interest';
import { useEffect } from 'react';
import {setOwnerId} from './slices/shopOwnerLoginSlice'
import {setapidata} from './slices/customerSlice'

// import store from './store';
function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/msg",
      element: <MESSAGELST />
    },
    {
      path: "/addcustomer",
      element: <ADDAMOUNT />
    },
    {
      path: "/customerlist",
      element: <CUSTOMERLST />
    },
    {
      path: "/debitlist",
      element: <DEBITLST />
    },

    {
      path: "/superadminlogin",
      element: < SALOGIN />
    },
    {
      path: "/shopownerregister",
      element: < SO_REG />
    },
    {
      path: "/adddebit/:customerid",
      element: < Add_debit />
    },
    {
      path: "/ownerslist",
      element: < Ownerlist />
    },
    {
      path: "/ShopOwnerLogin",
      element: <LOGINSO />
    },
    {
      path: "/credit/:customerid",
      element: < Credit />
    },
    {
      path: "/interest/:customerid",
      element: < Interest />
    },

  ]);

  return (


    
      <RouterProvider router={router} />
    

  );
}

export default App;