
import './App.css';
import MESSAGELST from './message'
import ADDAMOUNT from './shop-owner/credit-debitadd';
import CUSTOMERLST from './shop-owner/cus-list';
import DEBITLST from './shop-owner/debit';
import LOGINSO from './shop-owner/login-SO';
import SALOGIN from './super-admin/login-SA';
import SO_REG from './super-admin/reg-SO';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      
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
    <>

    
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
