import {Link} from 'react-router-dom';


function Main() {
  const logoStyle ={
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <home>
      <div>
        <nav className="header">
          <h1>iReporter</h1>
      
          <ul className='nav-links'>
            <Link to='/Login' style={{ textDecoration: 'none' }}>
              <li>LOGIN</li>
            </Link>
                    
            <Link to='/Signup' style={{ textDecoration: 'none' }}>
              <li>SIGNUP</li>
            </Link>
            
          </ul>
        </nav>

      </div>
            
      <div className="main"> 
        <p>Create a Redflag and Report to intervene</p>
        <ul className="mainj">
          
          <Link to="/Redflag" style={{ textDecoration: 'none' }}> 
            <li className="redflag"> Redflag</li>
          </Link>
          <Link to='/Intervation' style={{ textDecoration: 'none' }}>
            <li className="intervene">Intervation</li>
          </Link>
                
        </ul>

      </div>
      <div className='ab'>
        <div className="content">
          <h3>What we do</h3><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            Lorem ipsum dolor adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et orem ipsum dolor adipisicing elit, sed do eiusmod tempor incididunt ut labor 
          </p> 
        </div>

        <div className="oks">
          <h3>Why this project</h3><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            Lorem ipsum dolor adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et orem ipsum dolor adipisicing elit, sed do eiusmod tempor incididunt ut labor 
          </p>
        </div>
        <div className="rana">
          <h3>Who are we</h3><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            Lorem ipsum dolor adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et orem ipsum dolor adipisicing elit, sed do eiusmod tempor incididunt ut labor 
            </p>
        </div>
      </div>
      <footer>
        
        <h1>iReporter</h1>
        
        <div>
          <Link to='/Login_admin' style={logoStyle}>
            <p>Admin Page</p>
          </Link>
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <p>
          &copy;{new Date().getFullYear()} iReporter Inc.
        </p>
        
        
      </footer>
    </home>
  );
}

export default Main;
