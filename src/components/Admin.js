import React, { useState,useEffect } from 'react'
import axios from 'axios'
import AdminCard from './AdminCard';


const Admin = () => {
  const[userdata,setUserdata] = useState([]);
  function getData(){
        axios.get("https://64dde74f825d19d9bfb1b221.mockapi.io/users")
        .then((res)=>{
            setUserdata(res.data)
        }).catch(err => {
            //console.log(err);
        });
    }
    useEffect(()=>{
        getData();
    },[]);
  return (
    <div className='row d-flex justify-content-start'>
        {
            userdata.map((eachData)=>{
                return(
                    <AdminCard eachData={eachData}/>
                )
            })
        }
    </div>
      )
}

export default Admin;