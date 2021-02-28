import { useState } from "react";


const Home = () =>{
    const [name,setName]=useState('esha');
    const [age,setAge]=useState(20);

   const handleClick = () =>{
       setName('pepsi');
       setAge('2');
   }
    return(
        <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years</p>
        <button onClick={handleClick}>click me</button>
        
        </div>
      
    );
}
export default Home;