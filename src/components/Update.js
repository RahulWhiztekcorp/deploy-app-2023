import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Update = () => {
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    const header = {"Access-Control-Allow-Origin":"*"}

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://64dde74f825d19d9bfb1b221.mockapi.io/crud/${id}`,
            {
                name:name,
                email:email,
                header
            }
        ).then(()=>{
            navigate("/read");
        }).catch(err => {
            //console.log(err);
        });
    };
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])
  return (
    <div className="">
    <h2>Update</h2>
    <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" 
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email Adress</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <input type="checkbox" className="form-check-input" id="exampleInputCheck" />
            <label className="ms-1 form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpdate}
        >Submit</button>
        <Link to="/read" className="btn btn-secondary ms-2" 
        >Back
        </Link>
    </form> 
    </div>
  )
}

export default Update