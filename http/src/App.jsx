  
  import React from 'react';
  import { useState,useEffect } from 'react';
  import axios from 'axios';
import Products from './components/Products';
import Users from './components/Users';
  const App =()=>{
    const [isProductsScreen, setIsProductsScreen] = useState(true)
    
  return(
    <div>
      <h1 style={{fontSize: 20, fontWeight:700}}>HOME</h1>
      <button onClick={()=>setIsProductsScreen(!isProductsScreen)}>{ isProductsScreen ? "Show Users Screen": "Shows Products Screen" }</button>
      {
  isProductsScreen ? 
  <Products/>:<Users/>
      }
    </div>
  )
}
export default App