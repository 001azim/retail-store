import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MESSAGELST from './shop-owner/message';
import ADDAMOUNT from './shop-owner/credit-debitadd';
import CUSTOMERLST from './shop-owner/cus-list';
import DEBITLST from './shop-owner/debit';
import LOGINSO from './shop-owner/login-SO';
import SALOGIN from './super-admin/login-SA';
import SO_REG from './super-admin/reg-SO';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store'
import { Provider, useDispatch } from 'react-redux';
import Add_debit from './shop-owner/add_debit';
import Ownerlist from './super-admin/ownerlist';
import Home from './super-admin/home';
import Credit from './shop-owner/credit';
import Interest from './shop-owner/interest';
// import store from './store';
function App() {

//   const dispatch = useDispatch();
//   let token = localStorage.getItem("apitoken")
  
// let onlyid = useSelector((state)=> state.shopOwnerLogin.onlyownerid)

// useEffect(()=>{
//   if(!onlyid && token){
//     axios({
//       method: 'get',
//       url: `https://agaram.academy/api/retail/index.php?request=getShopOwnerDetailsByToken&${token}`,

//     })
//       .then(function (response) {
//         console.log(response)
//         // console.log(response.data.email)

//       })
//   }
// },[])

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


    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  );
}

export default App;

