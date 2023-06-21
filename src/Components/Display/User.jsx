import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUsersData } from '../../Slices/Users/getData';
const User = () => {
  const data=useSelector((state)=>state.fetch.users)
  const dispatch=useDispatch();
  return (
    <>
    <div>
    <button onClick={()=>dispatch(getUsersData())}>Get Users</button>
    </div>
    {
    data?.map((item)=>{
    return(
      <div key={item.id}>
      {item.name}<br/>
      </div>
    )
    })
    }
    </>
  )
}

export default User