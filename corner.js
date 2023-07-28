import React from "react";
import img1 from './image/li.jpg';
import img2 from './image/fz.jpg';
import img3 from './image/p1.jpg';
import img4 from './image/l1.webp';
import video from "./vd.mp4";
import './vdpi.css';
class Task4 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img className="img" src={img1}/>
                    <img className="img1" src={img2}/>
                    <div>
                    
                    <video autoPlay muted loop className="vid" width={850} controls>
                        <source src={video} type="video/mp4"/> 
                         
                    </video>

                    </div>
                    <img className="img2" src={img3}/>
                    <img className="img3" src={img4}/>
                </div>
            </div>
        );
    }
}

export default Task4;