const MyMessage = ({message}) =>{
    if(message?.attachments?.length>0){
        return(
            <img
            src={message.attachments[0].file}
            className="message-attachment"
            alt="message-attachment"
            style={{float:"right"}}
            />
        )
    }
    return (
        <div className="message" style={{float:"right", marginRight:"18px", color:"white",backgroundColor:"#1d63ff"}}>
            {message.text}
        </div>
    ) 
};

export default MyMessage;