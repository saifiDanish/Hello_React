import { useState } from "react";

const User = (props)=>{
    let [count,setCount] = useState(0);
    return(
        <div className="user">
            <h1>Count {count}</h1>
            <button onClick={()=>{
                // console.log(count)
                setCount(count+1);
            }}>Increase</button>
            <h1>Name : {props.name}</h1>
            <h2>Location : {props.location}</h2>
            <h1>Job : {props.job}</h1>
        </div>
    )
}

export default User;