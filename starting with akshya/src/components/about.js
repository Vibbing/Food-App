import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { getUser,loginUser } from "../api/user";

const About = () => {
    const [user,setUser] = useState('')
    const [userName,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const fetchData = async ()=>{
        try {
            const data =await getUser()
            console.log(data)
            setUser(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{     
        fetchData()
    },[])
    const handleSubmit = async ()=>{
        const user = {
            userName,
            password
        }
        try {
            const response = await loginUser(user)
            console.log(response)
        } catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <h1>This is the about page</h1>
            <h2>{user.message}</h2>
            <Outlet />
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <input type="text" value={userName} onChange={()=>{
                     setUsername(e.target.value)
                    }}></input>
                    <input type="text" value={password} onChange={()=>{
                        setPassword(e.target.value)
                    }}></input>

                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default About;