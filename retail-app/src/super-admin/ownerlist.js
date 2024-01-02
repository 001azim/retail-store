import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { adduser } from "../slices/userSlice";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'

function Ownerlist() {
  const dispatch = useDispatch()

  const lists = useSelector((state) => state.user.ownlist)


  useEffect(() => {
    solist()
  }, [])


  function solist() {
    axios.get('https://agaram.academy/api/retail/index.php?request=getAllShopOwners')
      .then(function (response) {
        console.log(response)
        let user_list = response.data.data
        console.log("user", user_list)
        dispatch(adduser(user_list))
      })
  }
  

  return (
    <>

      <h1>shop owners list</h1>

      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>area</td>
            <td>shop_name</td>
            

          </tr>

        </thead>
        <tbody>
          {lists.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.area}</td>
                <td>{data.shop_name}</td>

              </tr>
            )
          })}
        </tbody>

      </Table>
    </>
  )
}

export default Ownerlist