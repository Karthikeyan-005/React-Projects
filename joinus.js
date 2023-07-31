import React from "react";
import img2 from "./image/p2.jpg";

class Join extends React.Component{
    render(){
        return(
            <div>
                <h1>Join us</h1>
                <p>Welcome to the Join page</p>
                <img src={img2} className="p1" alt="Asus" width={300} height={300}/>
            </div>
        );
    }}

    export default Join;