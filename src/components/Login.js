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
            if(userdata.data[0].email===email&&userdata.data[0].password===password){
                localStorage.setItem("username", userdata.data[0].name);
                history('/home');
                window.location.reload();
                alert("Hello "+userdata.data[0].name+" Your are Logged In");
            }else{
                history('/login')
                alert("Invalid credentials");
            }
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
                <div className="col-md-4">
                    <h1>Login</h1>
                    <form action="/login" method="post">
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
                            <button type="submit" className="btn btn-primary ms-5 me-1 px-5"  onClick={handleSubmit}>Login</button>
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

export default Login