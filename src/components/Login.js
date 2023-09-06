import React,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userdata,setUserdata]=useState([]);
    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        //https://64dde74f825d19d9bfb1b221.mockapi.io/users?email=RahulKondi@gmail.com&password=Rahul@123
        try{
            axios.get(
                "https://64dde74f825d19d9bfb1b221.mockapi.io/users?email="+email+"&password="+password
            ).then(
              res=>setUserdata(res)
            ).catch(
              err=>console.log(err)
            );
            debugger
            if(userdata.data[0].email===email&&userdata.data[0].password===password){
                localStorage.setItem("username", userdata.data[0].name);
                history('/home');
                window.location.reload();
                alert("Hello "+userdata.data[0].name+" Your are Logged In");
            }else{
                history('/login')
                alert("Invalid credentials");
            }
            console.log(userdata);
        }catch(res){
            
        }
        
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
                <div className="col-md-4 border p-4 rounded">
                    <div className='d-flex justify-content-center'>
                        <h2 ><b>Login</b></h2>
                    </div>
                    <hr/>
                    <form action="/login" method="post">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp"  onChange={(e)=>setPassword(e.target.value)}/>
                            <div className='d-flex justify-content-between'>
                                <div className="form-check my-1">
                                    <input className="form-check-input" type="checkbox" onClick={myFunction} id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Show Password
                                    </label>
                                </div>
                                <div >
                                    <p className='forgot-password text-right'>
                                        <Link to={'/forget'}>Forgot password?</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='my-2 d-flex justify-content-evenly'>
                            <button type="submit" className="btn btn-primary px-5"  onClick={handleSubmit}>Login</button>
                            <Link to="/">
                                <button  className="btn btn-danger px-5">Cancel</button>
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link to={'/register'} className='text-decoration-none'>Create account?</Link>
                        </div>
                    </form>
                </div>
                </div>
            </div>
          )
}

export default Login