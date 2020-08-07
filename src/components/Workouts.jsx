import React from 'react';
import NavBar from './NavBar';

const Workouts = () => {
    return ( 
    <header className = 'workout-header'> 
        <div>
        <NavBar/>
        <div  className="workout-plan">
        
        <div>
        <h3 class="text-center h3">Workouts</h3>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4 class="text-center">7 Days Workout Challange</h4>
                    <img src={require("../assets/image/workout1.jpeg")} alt=""/>
                </div>
                <div class="col-md-4">
                    <h4 class="text-center">7 Days Abs Workout Challange</h4>
                    <img src= {require("../assets/image/crossfit.jpg")} alt=""/>
                </div>
                <div class="col-md-4">
                    <h4 class="text-center"> Weight Lifting Challange</h4>
                    <img src={require("../assets/image/yoga.jpeg")} alt=""/>
                </div>
            </div>
            </div>

        </div>
    
    </div> 
    </div>
    </header>);
}
 
export default Workouts;