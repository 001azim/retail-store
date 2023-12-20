<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> ajil
import './App.css';
import MESSAGELST from './message'
import ADDAMOUNT from './shop-owner/credit-debitadd';
import CUSTOMERLST from './shop-owner/cus-list';
import DEBITLST from './shop-owner/debit';
import LOGINSO from './shop-owner/login-SO';
import SALOGIN from './super-admin/login-SA';
import SO_REG from './super-admin/reg-SO';
<<<<<<< HEAD
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import store from './store'; 
import { Provider } from 'react-redux'

=======
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Common from './common';
// import store from './app/store'
// import { Provider } from 'react-redux';
>>>>>>> ajil


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LOGINSO />
    },
    {
      path: "/msg",
      element: <MESSAGELST/>
    },
    {
      path: "/creditordebit",
      element: <ADDAMOUNT/>
    },
    {
      path: "/customerlist",
      element: <CUSTOMERLST/>
    },
    {
      path: "/debitlist",
      element: <DEBITLST/>
    },
    {
      path: "/shopownerlogin",
      element: <LOGINSO/>
    },
    {
      path: "/superadminlogin",
      element: < SALOGIN />
    },
    {
      path: "/shopownerregister",
      element: < SO_REG />
    },

    


  ]);
  

  return (
<<<<<<< HEAD


    <Provider store={store}>

=======
    // <Provider store={store}>
    <>

    {/* <h1>app page</h1> */}
    
>>>>>>> ajil
    <RouterProvider router={router}/>
    </Provider>
    
<<<<<<< HEAD
=======
   
    </>
      // </Provider>
>>>>>>> ajil
  );
}

export default App;
