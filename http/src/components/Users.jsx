import React, { useEffect, useState } from 'react'

const Users = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Users component mounted");

        return ()=>{
          alert("Users component hide ho raha hai")
            console.log("Users component unmounted")
        }
    },[count])
  return (
    <div>
      <h1>
      Users
      </h1>
      <h3>{count}</h3>
<button onClick={()=>setCount(count=>count+1)}>Update</button>


    </div>
  )
}

export default Users