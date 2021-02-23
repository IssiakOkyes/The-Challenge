import {Link} from 'react-router-dom';


function Intervation() {

    const logoStyle ={
        color: 'white',
        textDecoration: 'none'
        
    }

    return (
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
            

            <fieldset>
                <legend > Intervention</legend>
                <label>Province<br />
                <input placeholder="Province" name="cities" list="province" required="required"/></label><br />
                <datalist id="province">
                    <option value="Eastern Province"></option>
                    <option value="Western Province"></option>
                    <option value="Southern Province"></option>
                    <option value="Norhtern Province"></option>

                </datalist>
                <label>District<br />
                <input placeholder="city" name="cities" list="city" required="required" /></label><br />
                <datalist id="city">
                    <option value="Gasabo"></option>
                    <option value="Kicukiro"></option>
                    <option value="Nyarugenge"></option>

                </datalist>
                <label>Sector<br />
                <input placeholder="sector" name="cities" list="sector" required="required" /><br /></label>
                <datalist id="sector">
                    <option value="Kimironko"></option>
                    <option value="Bumbogo"></option>
                    <option value="Gatsata"></option>
                    <option value="Kicukiro"></option>
                    <option value="Nyanza"></option>
                    <option value="Gikondo"></option>
                    <option value="Nyamirambo"></option>
                    <option value="Gitega"></option>
                    <option value="Nyakabanda"></option>
                </datalist>

                <form action="">
                    <p>Report to:</p>
                    <select name="redflags" placeholder='report here'>
                        <option value="Police">Police</option>
                        <option value="District">District</option>
                        <option value="Other govenmental agency">Other govenmental agency</option>
                        
                    </select><br></br><br></br>
                    <label for="username">Date of report:</label><br></br>
                    <input type="date" name="report" />

                    <p>Add comment to your claim</p>
                        <textarea name="comments" cols="70" rows="10" required="required" placeholder="Enter your comments..."></textarea>
                        
                </form>
                
                <form action="" method="post">
                    
                    <input type="file" name="user-image"  />
                    <input type="submit" value="Upload" />

                   


                </form>
                
            </fieldset>

            <button className='edit'>Edit</button>
            <button className='delete'>Delete</button>
            
            
            
           
           
            

            

            
        </div>
    )
}

export default Intervation;