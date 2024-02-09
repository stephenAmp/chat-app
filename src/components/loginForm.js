import {useState} from "react";
import axios from "axios";


const LoginForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("");
    const handleSubmit = async(e) =>{
        e.preventDefault();
        //username + password => chat engine => loads messages
        const authObject = {"Project-ID":"11c36764-257d-41ab-9f97-ab54d5381ae8", "User-Name": username, "User-Secret": password}

        try {
            await axios.get("https://api.chatengine.io/chats",{headers:authObject});
            
            // storing user password and username to local storage 
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            // finally reloading page
            window.location.reload()

            //if this works, log in is successful,
        }catch(error){
            setError("Incorrect username or password"); 
        }
        //  else give an error directing user to try again
        
    }

    return(
        <div className="wrapper">
            <div className="form">
                 <h1 className="title" style={{ color:"#1d63ff"}}>Chat App</h1>
                 <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align= "center">
                        <button type="submit" className="button">
                            <span>start</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                 </form>
            </div>
        </div>
    )
}

export default LoginForm