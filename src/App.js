import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';



function App() {
  // const [data,setData] = useState([]);
  // function getData(){
  //     axios.get("https://64dde74f825d19d9bfb1b221.mockapi.io/crud")
  //     .then((res)=>{
  //         setData(res.data)
  //     }).catch(err => {
  //     });
  // }
  // useEffect(()=>{
  //   getData();
  // },[data]);
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Create />}></Route>
            <Route path="/read" element={<Read />}></Route>
            <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
          <div className="row">
            {
                data.map((eachData)=>{
                  return(
                    <div className="col-md-12 col-lg-2 mb-1 mb-lg-0 shadow-sm p-3 bg-white mx-1 my-1">
                      <span className="font-weight-bold">Name : <span className="text-info text-uppercase">{eachData.name}</span></span>
                      <br></br>
                      <span className="font-weight-bold">Email : <span className="text-success ">{eachData.email}</span></span>
                    </div>
                    )
                  })
            }
          </div>
      </div> */}
    </div>
  );
}

export default App;
