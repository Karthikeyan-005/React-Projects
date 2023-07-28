import ReactDOM from 'react-dom';
import React from 'react';
import './a1.css';
import styles from './demo.module.css';
import img1 from './image/li.jpg'
import img2 from './image/fz.jpg'
import img3 from './image/p1.jpg'
import vid from './vdo.mp4'

class Picvdo extends React.Component{
      render(){
        const mystyle={}
        return(
            <div>
                
                <h1 className={styles.heading}>Hello</h1>
                <img  className="img1" src={img1} alt='logo' width='200' height='200'></img>
                <img  className="img2" src={img2} alt='logo' width='200' height='200'></img>
                
                <div className='vidl' >
                    <h1>plaplay the video:</h1>
                    <video className='vds'  controls >
                    <source src={vid} type='video/mp4'></source></video>
                    </div>

                <img className="img1" src={img3} alt='logo' width='200' height='200'></img>
                <img className="img2" src={img1} alt='logo' width='200' height='200'></img>
                
            </div>
        )
      }
    }
    ReactDOM.render(<Picvdo />,document.getElementById('root'));