import {Link} from 'react-router-dom';

function Login(){

    const logoStyle ={
        color:'black',
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
            <div className='login'>
            
                <input type="text" placeholder="enter your email"></input>
                <input type="password" placeholder="password" required="required"></input>
                <input type="submit"  value="LOGIN"></input><br></br>
    
                <p>Don't have an account?<Link to="/Signup" > Sign up.</Link></p>
            
            

            </div>
        </div>
        
       
    )
}
export default Login