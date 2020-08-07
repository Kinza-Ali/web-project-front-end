import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css';
const Blogs = () => {
return ( 
        <header className ='blogs-header'>
        <div>
        <NavBar/>
        <div  className="testimonials">
        <div></div>
        <div>
        <h3  className ="text-center h3" > Blogs</h3> 
        <div id="blogs"></div>
        <h4   className="text-center testimonialsh4">Success Stories</h4>
        <div  className="container ">
        <div  className="row ">
                <div className="col-md-4  ">
                
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, facere aspernatur itaque natus aut a magnam esse praesentium quod quidem architecto. Non nihil quibusdam</p>
                        <img className = 'testimonials-image-img' src={require("../assets/image/people1.jpeg" )}alt="Amir"/> JOhn Watson
                </div>
                <div className="col-md-4">
                
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, facere aspernatur itaque natus aut a magnam esse praesentium quod quidem architecto. Non nihil quibusdam</p>
                        <img className = 'testimonials-image-img' src={require("../assets/image/people2.jpeg")} alt="Amir"/> Emma Watson
                </div>
                <div className="col-md-4">
                
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, facere aspernatur itaque natus aut a magnam esse praesentium quod quidem architecto. Non nihil quibusdam</p>
                        <img className = 'testimonials-image-img' src={require("../assets/image/people3.jpeg" )}alt="Amir"/> Goerge Robert
                </div>    
</div>
</div>
</div>
</div>
</div>
</header>
);
}
export default Blogs;