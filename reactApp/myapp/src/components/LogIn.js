import { useState } from "react"

function LogIn(props) {
    const [logedIn, setLogedIn] = useState(false);
    return (
        <div>
            <button className="login" onClick={() => setLogedIn(true)}>Log In</button>
            {/* <h1>{logedIn ? "welcome": null}</h1> */}
            {logedIn ? <h1>welcome {props.userName}</h1> : null}
        </div>
    )
}

export default LogIn;