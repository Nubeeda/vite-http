  
  import React from 'react';
  import { useState,useEffect } from 'react';
  import axios from 'axios';
  const App =()=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
      console.log("component mounted")
      test()
      return ()=>{
        console.log("cleanup")
      }
    },[])
  const test =async () =>{
    try{
      const response =await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data)
      
    }
   catch(error){
    console.log(error)
   }
  }
  return(
    <div>
      <h1>Try catch/useEffect/cleanUp/axios</h1>
      <button onClick={test}>Data</button>
      <div style={{
        margin:"50px auto",
        width:"90%",
        display:"flex",
        flexWrap:"wrap",
        gap: 48
      }}>
        {
          products.map((item,index)=>(
            <div key={index} style={{
              width:"calc(25% - 48px)",
              border:"1px solid #ccc",
              boxShadow:"0 0 12px #ddd",
              textAlign:"center",
              borderRadius:4,
              padding:16,
              boxSizing:"border-box"
            }}>
              <img style={{width:"70%"}}
              src={item.image}/>
              <h3 style={{padding:0,margin:5}}>{item.title}</h3>
              <p style={{color:"gray",padding:0,margin:5}}>{item.description.slice(0, 95)}</p>
              <p style={{textTransform:"capitalize",padding:0,margin:0}}>{item.category}</p>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default App