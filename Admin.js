import {Link} from 'react-router-dom';

function Admin(){

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
            <div className='admin'>
               
                <fieldset>
                    <h2>Admin Page</h2>
                    <p><label>Change Status<br />
                    <input type='text' placeholder="Status" name="statuses" list="status" required="required"/></label><br />
                    <datalist id="status">
                        <option value="Resolved"></option>
                        <option value="Under Investigation"></option>
                        <option value="Rejected"></option>
                    </datalist></p>
                    <button className='record'>View all Records</button>
                </fieldset>

            </div>
        </div>
    )

}

export default Admin
