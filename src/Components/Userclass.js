import React from "react"

class Userclass extends React.Component{

    constructor(props){
        super(props);
        // console.log(props)
        this.state={
            count:0,
            // count2:1,
        }
        console.log(this.props.name+" constructor");
    }
    
    componentDidMount(){
        console.log(this.props.name+" component did mount");
    }
    
    render(){
        console.log(this.props.name+" render");
        const {name,location} = this.props;
        const {count} = this.state;
        return (
            <div className="user">
                <h1>Count {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Increase</button>
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h1>Job : {this.props.job}</h1>
            </div>
        )
    }
}


export default Userclass;