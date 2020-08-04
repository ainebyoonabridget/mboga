import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//beginning of my react app/
const items=<h2>
  <ul>
    <li>Vegetables</li>   
    <li>Fruits</li>
    <li>Juices</li>
  </ul> 
</h2>;

class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Vegetables","Fruits","Juices"],
      name:["oranges","cucumber","Juices"],
      quantity:[300,700,400]
    };
  }
  render(){
    return(
      <div style={{backgroundColor:"green",color:"white",padding:"40px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{backgroundColor:"orange"}}>MAMA MBOGA GREEN KIOSK</h1>
        <p><li>OUR PRODUCTS</li>
        <h1>FRUITS</h1>
        <img src="images/oran.jpg"></img>
        <p>Quantity:300kgs</p>
         
            </p>
            "Enjoy our best services with discounts. Your health is our first priority"
            <p>
              
            <h1 style={{backgroundColor:"orange"}}>Fresh Vegetables</h1> 
          <li>VEGETABLE PRODUCTS</li>
          <h2>SPINACH</h2>
          <img src="images/spi.jpg"></img>
          <p>Quantity:700kgs</p>
           <p>We have all types of fruits and vegetables and at affordable prices.
           
         </p>

         <p>
              
              <h1 style={{backgroundColor:"orange"}}>Natural Juice</h1> 
            <li>Variety of JUICES</li>
            <h1>NATURAL JUICES</h1>
            <img src="images/jui.jpg"></img>
            <p>Quantity:400litres</p>
             <p>
             Our products are 100% natural and fresh so as to serve our customers' needs
           </p>
        </p>
        </p>
       </div>

      
    );
  }
}
ReactDOM.render(<Products/>,document.getElementById('root'));

