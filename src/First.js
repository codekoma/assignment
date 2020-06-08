import './footer.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class First extends Component {

    
    render() {
        return (
            <div>
                 <div className="Mac" style={{height:400, color:"white"}}>
                    WELCOME TO EDUNOMICS
                    <div style={{marginLeft:1000}}>
                    <button >LOGIN </button>
                    <span className="input-group-btn">
                        <Link to="/signup" ><button>SIGNUP</button></Link>
                    </span>
                    </div>
                    <div style={{marginLeft:400,paddingTop:200}}><h2>WHERE DO YOU WANT TO GO?</h2></div>
                    
                    
                    </div>
                
            </div>
        );
    }
}

export default First;

