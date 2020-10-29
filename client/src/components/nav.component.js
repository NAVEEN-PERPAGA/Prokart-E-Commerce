import React from 'react'
import {useAuth0} from '@auth0/auth0-react'


const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0()

    return (
        <div style={{marginBottom:"20px"}}>
            {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Login</button>}
            {isAuthenticated && <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>}
        </div>
        // <div>
        //     <button>Login</button>
        //     <button>logout</button>
        // </div>
    )
}

export default Nav