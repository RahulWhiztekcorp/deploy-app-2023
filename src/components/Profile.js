import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



const Profile = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    function getData(){
        axios.get(
            "https://64dde74f825d19d9bfb1b221.mockapi.io/users?name="+localStorage.getItem("username")
        ).then(
          res=>{
            setName( res.data[0].name);
            setEmail( res.data[0].email);
        }
        ).catch(
          err=>console.log(err)
        );
    }
    useEffect(()=>{
        getData();
    });
  return (
        <section class="vh-100" >
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-md-9 col-lg-7 col-xl-5">
                    <div class="card" >
                    <div class="card-body p-4">
                        <div class="d-flex text-black">
                        <div class="flex-shrink-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                            alt="Generic placeholder image" class="img-fluid w-100"
                            />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="mb-1">{name}</h5>
                            <p class="mb-2 pb-1" >{email}</p>
                            <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                            {/* <div>
                                <p class="small text-muted mb-1">Articles</p>
                                <p class="mb-0">41</p>
                            </div>
                            <div class="px-3">
                                <p class="small text-muted mb-1">Followers</p>
                                <p class="mb-0">976</p>
                            </div>
                            <div>
                                <p class="small text-muted mb-1">Rating</p>
                                <p class="mb-0">8.5</p>
                            </div> */}
                            </div>
                            <div class="d-flex pt-1">
                                <Link to="/" >
                                    <button className="btn btn-outline-primary px-5 mt-5 ms-4">Home</button>
                                </Link> 
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            
  )
}

export default Profile