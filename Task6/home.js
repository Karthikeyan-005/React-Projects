import ReactDOM from 'react-dom';
import React from 'react';
import './a1.css';
import styles from './demo.module.css';
import img1 from './image/p1.jpg'
import img2 from './image/p2.jpg'
import img3 from './image/p3.jpg'
import vid from './vd.mp4'

class Home extends React.Component{
      render(){
        const mystyle={}
        return(
            <div>
                
                <h1 className={styles.heading}>Shop With us</h1>
                <img  className="img1" src={img1} alt='logo' width='200' height='200'></img>
                <img style={{marginLeft:"70%"}} className="img2" src={img2} alt='logo' width='200' height='200'></img>
                
                <div className='vidl' >
                    
                    <video className='vds'  controls >
                    <source src={vid} type='video/mp4' width={20} height={20}></source></video>
                    </div>

                <img className="img1" src={img3} alt='logo' width='200' height='200'></img>
                <img style={{marginLeft:"70%"}} className="img2" src={img1} alt='logo' width='200' height='200'></img>
                <h1><a href='http://localhost:3000/about'>NEXT</a></h1>
            </div>
        )
      }
    }
    // ReactDOM.render(<Home />,document.getElementById('root'));
    export default Home;