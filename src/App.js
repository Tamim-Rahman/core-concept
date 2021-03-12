import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['anwar', 'salma sah', "alamgir", 'Manna']
  const products = [
    {name: "photoshop", price:"$90.99"},
    {name: "illastator", price:"10.00"}
  ]
   
  return (
    <div className="App">
      <header className="App-header">
         <p>I am a react person</p>
         <Counter></Counter>
         <Users></Users>
         <ul>
           {
             nayoks.map(nayok => <li>{nayok}</li>)
           }
           {
             products.map(product=> <li>{product.name}</li>)
           } 
         </ul>
         {
           products.map(pd=> <Product products={pd}></Product>)
         }
          
           
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1)

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() =>setCount (count-1) }>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
        users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: "2ps, solid, red",
    borderRedius: "50px",
    backgroundColor: 'lightgray',
    height: "200px",
    width:"200px",
    float: "left"
  }
  const {name, price} = props.products
  return(
    <div style={productStyle}>
      <h2>{ name}</h2>
      <h3>{ price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return(
    <div style={{border: "2px solid yellow", margin: '10px', padding: " 10px"}}>
      <h3>My name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}
export default App;
