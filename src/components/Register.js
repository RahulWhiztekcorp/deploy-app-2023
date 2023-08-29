import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-4">
                    <h1>Register</h1>
                    <form action="/register" method="post">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" name="username" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password" required/>
                    </div>
                    <div className='my-2'>
                        <button type="submit" class="btn btn-primary ms-5 me-1 px-5">Register</button>
                        <Link to="/">
                            <button  class="btn btn-danger px-5">Cancel</button>
                        </Link>
                    </div>
                    </form>
                </div>
                </div>
            </div> 
         )
}

export default Register