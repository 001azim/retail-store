import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MESSAGELST from './message'
import ADDAMOUNT from './shop-owner/credit-debitadd';
import CUSTOMERLST from './shop-owner/cus-list';
import DEBITLST from './shop-owner/debit';
import LOGINSO from './shop-owner/login-SO';
import SALOGIN from './super-admin/login-SA';
import SO_REG from './super-admin/reg-SO';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
 import Common from './components/common';
 import store from './store'
 import { Provider } from 'react-redux';



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
      path: "/superadminlogin",
      element: < SALOGIN />
    },
    {
      path: "/shopownerregister",
      element: < SO_REG />
    },
    // {
    //   path: "/ownerlists",
    //   element: < OWN />
    // },


  ]);
  

  return (


    <Provider store={store}>

    <RouterProvider router={router}/>
    </Provider>
    
  );
}

export default App;
