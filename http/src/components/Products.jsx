import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("Products component mounted")
        test()
        return ()=>{
          // alert("Products component hide ho raha hai")
          console.log("Products component unmounted")
        }
      },[refetch])
      useEffect(()=>{
        // CleanUp function: Handle side effects. 
        // eg.set Interval and setTimeout this function used when memory more than used.
        // set Interval are used continiously code repeate
        const interval = setInterval(()=>{
          setCount((ititialvalue)=>ititialvalue = ititialvalue+1)
        },500)
        // clean up: release 
        return()=>{
          clearInterval(interval)
        }
        
      },[])
    const test =async () =>{
      try{
        setLoading(true)
        const response =await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setProducts(data)
        
      }
     catch(error){

      console.log(error)
     }
     finally{
      setLoading(false)
     }
    }
    return(
        <div>
          <h2>Count - {count}</h2>
          <h1>Try catch/useEffect/cleanUp/axios</h1>
          <button onClick={test}>Data</button>
          <button onClick={()=>setRefetch(!refetch)}>refetch useState again</button>
          {refetch.toString()}
          {loading && <h1>Loading...</h1>}
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

export default Products