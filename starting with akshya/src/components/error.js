import {useRouteError} from "react-router-dom"

const Error = () => {

    const err = useRouteError() 
    
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Something went wrong!!..</h2>
            <h3>{err.data}</h3>
            <h4>{err.status + "  " + err.statusText}</h4>
        </div>
    )
}

export default Error;