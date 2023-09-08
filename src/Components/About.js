import User from "./User";
import Userclass from "./Userclass";
import React from "react";
// const About =()=>{
//     return (
//         <div>
//             <h1>About US</h1>
//             <User name={"Danish"} location={"Delhi"} job={"Function Develpoer"}/>
//             <Userclass name={"Danish"} location={"Delhi"} job={"Class Developer"}/>
//         </div>
//     )
// }

class About extends React.Component{
    
    constructor(){
        super();
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent component did mount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About US</h1>
                {/* <User name={"Danish"} location={"Delhi"} job={"Function Develpoer"}/> */}
                <Userclass name={"First Child "} location={"Delhi"} job={"Class Developer"}/>
                <Userclass name={"Second Child "} location={"US"} job={"Class Developer"}/>
            </div>
        )
    }
}
export default About;