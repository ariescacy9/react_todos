import React from "react";
import './Burgerbutton.css';


function Burgerbutton() {

  return(
    <div className='icon nav-icon-5'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
  icon.classList.toggle("open");
  });
});


export default Burgerbutton;