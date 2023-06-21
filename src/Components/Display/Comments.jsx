import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getComment } from '../../Slices/Comments/Get';
const Comments = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.Comments.comments)
    // console.log(data);
  return (
    <>
    <div>
        <button onClick={()=>dispatch(getComment())}>Get Comments</button>
    </div>
    {
        data?.map((item,idx)=>{
            if(idx<=20){
                return(
                    item.name
                )
            }
        })
    }
    </>
  )
}

export default Comments