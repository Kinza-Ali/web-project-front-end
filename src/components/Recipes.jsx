import React from 'react';
import NavBarBlack from './NavBarBlack';
const Recipes = () => {
    return (
        <header className='recipe-header'> 
        <div>
        <NavBarBlack/>
        <div   className="features"> 
        <h3 className="text-center h3 features-h3">Recipes</h3>
        <p className="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur culpa doloremque aut eius, incidunt debitis iusto distinctio nam totam quis dolorum unde aliquid adipisci vero dolorem, cum consequatur asperiores!</p>

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <i className="fa fa-camera features-i"></i>
                    <h4 className ='features-h4 ' >Salsa Salad</h4 >
                    <p className="arranging"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci molestiae corporis voluptate pariatur reprehenderit iure id consequuntur sunt inventore distinctio quia harum repellat illum, minima sit asperiores error fuga.</p>
                </div>

                <div className="col-md-3">
                    <i className="fa fa-camera features-i"></i>
                    <h4 className ='features-h4 ' >Salsa Salad</h4 >
                    <p className="arranging">   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci molestiae corporis voluptate pariatur reprehenderit iure id consequuntur sunt inventore distinctio quia harum repellat illum, minima sit asperiores error fuga.</p>
                </div>

                <div className="col-md-3">
                    <i className="fa fa-camera features-i"></i>
                    <h4 className ='features-h4 ' >Salsa Salad</h4 >
                    <p className="arranging"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci molestiae corporis voluptate pariatur reprehenderit iure id consequuntur sunt inventore distinctio quia harum repellat illum, minima sit asperiores error fuga.</p>
                </div>
                <div className="col-md-3">
                    <i className="fa fa-camera features-i"></i>
                    <h4 className ='features-h4 ' >Salsa Salad</h4 >
                    <p className="arranging"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci molestiae corporis voluptate pariatur reprehenderit iure id consequuntur sunt inventore distinctio quia harum repellat illum, minima sit asperiores error fuga.</p>
                </div>
            </div>
        </div>
        </div>
    </div> 
    </header>);
}
export default Recipes;