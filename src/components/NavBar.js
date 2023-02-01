
 import { ReactDOM } from "react";
 import {React,Link} from "react";
 
 import { SocialMedia } from "./index.js";
 import '../App.css';
 export  function NavBar(){
   return (
  //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  // <div class="container-fluid">
  //   <a class="navbar-brand" href="#">Navbar</a>
  //   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //      <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  //       <li class="nav-item">
  //         <a class="nav-link active" aria-current="page" href="#">Home</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" href="#">Link</a>
  //       </li>
  //       <li class="nav-item dropdown">
  //         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //           Dropdown
  //         </a>
          
    
  //         </div>
  //       </nav>
  //   /* 
  <nav className="navbar navbar-expand-lg ">
      <div className="col-2 m-1"><SocialMedia/></div>
      <a href="#x" data-bs-toggle="collapse" className="navbar-toggler bg-light m-2" data-bs-target="#x">
        <span className="navbar-toggler-icon"></span>
      </a>
    <div className="collapse navbar-collapse" id="x">
    <ul className="navbar-nav col-lg-10  justify-content-center ">
       <li className="nav-item text-center">
       <a className="nav-link active text-white" href="#Profile">Profile</a>
       </li>
       <li className="nav-item text-center">
       <a className="nav-link text-white" href="#Projects">Projects</a>
        </li>
      <li className="nav-item text-center">
    <a className="nav-link text-white" href="#ContactMe">Contact</a>
        </li>
  
</ul>
</div>



</nav>
  
  
);
 }