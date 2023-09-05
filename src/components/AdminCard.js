import React from 'react'

const AdminCard = (props) => {
    //  console.log(props);
    // console.log(props.eachData.name);
  return (
           <div class="card text-dark col-md-3 border-0 w-25" >
                <div className='shadow-sm bg-body rounded '>
                    <div class="card-header bg-info bg-opacity-25">
                        <span><b>{props.eachData.name}</b></span>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Email : {props.eachData.email}</p>
                        <p class="card-text">Password : {props.eachData.password}</p>
                    </div>
                </div>
            </div>  
            )
}

export default AdminCard;