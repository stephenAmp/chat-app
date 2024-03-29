const TheirMessage = ({lastMessage, message}) =>{
    const  isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <div className="message-row">
            {isFirstMessageByUser &&(
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}} />
            )}
            { message?.attachments?.length > 0
                    ?(
                        <img
                        src={message.attachments[0].file}
                        className="message-attachment"
                        alt="message-attachment"
                        style={{marginLeft: isFirstMessageByUser?"4px":"48px"}}
                        />
                    ) : (
                        <div className="message" style={{float:"left", backgroundColor:"grey", marginLeft: isFirstMessageByUser?"4px":"48px"}}>
                            {message.text}
                        </div>
                    )
            }
        </div>
    )
};

export default TheirMessage;