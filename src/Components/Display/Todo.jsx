import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../Slices/Todo/Get'
const Todo = () => {
  const data = useSelector((state) => state.fetch.tasks)
  const[datas,setDatas]=useState(null);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(getData(1));
          }}
        >
          Get Todos List
        </button>
      </div>
      <div className="container">
           {data?.map((item,idx) => {
            if(idx<=6){
              return (
              <div key={item.id}>
                {item.id}
                <button onClick={()=>setDatas(item.title)}>View User ID</button>
                </div>
              )
            }
            })}
          {datas}
      </div>
    </>
  );
};

export default Todo;
