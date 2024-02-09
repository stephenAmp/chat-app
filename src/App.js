import {ChatEngine} from "react-chat-engine";
import LoginForm from "./components/loginForm";
import "./App.css";
import  ChatFeed  from "./components/ChatFeed";

const App = ()=>{
// if there is currently no username in local storage display log in form
    if(!localStorage.getItem("username")) return <LoginForm />

    return(
        <ChatEngine
        height ="100vh"
        projectID="11c36764-257d-41ab-9f97-ab54d5381ae8"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed ={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;