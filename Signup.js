import React from 'react';
import {Link} from 'react-router-dom';


function Signup(){

    const logoStyle ={
        color: 'white',
        textDecoration: 'none'
  
    }

    return(
        <div>
            <nav className="header">
                <Link style={logoStyle} to="/">
                    <h1>iReporter</h1>
                </Link>
                
            
                <ul id='logout'>

                    <Link to='/' style={logoStyle}>
                        <li>LOGOUT</li>
                    </Link>
                    
                </ul>
            </nav>
            <div className="signup">
                <h1>signup</h1>
                <input type="text" placeholder="First Name" required="required"></input>
                <input type="text" placeholder="Last Name" required="required"></input>
                 <input type="text" placeholder="District"></input>
                <input type="text" placeholder="Mobile number or Email"></input>
                <input type="password" placeholder="password"></input>
                <input type="submit"  value="SIGNUP"></input><br></br>

                <p>Already have an account ?<Link style={logoStyle}  to="/Login"> Sign in.</Link></p>

            
            
            </div>
        </div>
        


    )
}

export default Signup;