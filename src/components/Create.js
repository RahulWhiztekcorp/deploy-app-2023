import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';



const Create = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const history = useNavigate();
    const header = {"Access-Control-Allow-Origin":"*"}

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://64dde74f825d19d9bfb1b221.mockapi.io/crud",{
            name:name,
            email:email,
            header,
        }).then(()=>{
            history("/read");
        }).catch(err => {
            //console.log(err);
        });
    };
  return (
    <div>
    <div className="d-flex justify-content-between">
       <h2>Create</h2>
       <Link to="/read" ><button className="btn btn-primary">Show Data</button></Link>
    </div>
    <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email Adress</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"  onChange={(e)=>setEmail(e.target.value)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <input type="checkbox" className="form-check-input" id="exampleInputCheck" />
            <label className="ms-1 form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default Create;