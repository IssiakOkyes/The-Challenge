import {Link} from 'react-router-dom';


function Main() {
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

      <footer>
        <h1>iReporter</h1>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()}
        </p>
        <p>Privacy Policy</p>
      </footer>
    </home>
  );
}

export default Main;
