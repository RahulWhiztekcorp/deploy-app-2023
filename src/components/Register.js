import React, { useState } from 'react';
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://64dde74f825d19d9bfb1b221.mockapi.io/users",{
            name:name,
            email:email,
            password:password,
        }).then(function (response) {
            history("/login");
            //console.log(response);
          })
          .catch(function (error) {
            //console.log(error);
          });
    };
    function myFunction() {
        var x = document.getElementById("exampleInputPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    
  return (
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-4">
                    <h1>Register</h1>
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp"  onChange={(e)=>setPassword(e.target.value)}/>
                            <div class="form-check my-1">
                                <input class="form-check-input" type="checkbox" onClick={myFunction} id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Show Password
                                </label>
                            </div>
                        </div>
                        <div className='my-2'>
                            <button type="submit" className="btn btn-primary ms-5 me-1 px-5" onClick={handleSubmit}>Register</button>
                            <Link to="/">
                                <button  className="btn btn-danger px-5">Cancel</button>
                            </Link>
                        </div>
                    </form>
                </div>
                </div>
            </div> 
         )
}

export default Register