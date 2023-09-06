import React from 'react';

const Forget = ()=> {
  return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 border p-4 rounded">
                        <div className='d-flex justify-content-center'>
                            <h2 ><b>Forget Password</b></h2>
                        </div>
                        <hr/>
                        <form >
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="user_email" id="exampleInputEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <input type="submit" className="btn btn-primary px-5" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          )
}

export default Forget;
