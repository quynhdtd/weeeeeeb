
function MessageTextField(props){
    return(
        <div>
            <p style={{ fontSize: '16px', color: '#1C1E53', paddingBottom:'10px' }}>
                {props.title}
            </p>
            <textarea type={props.type} className="mess-field" placeholder="Type your message..."/>
        </div>
    )
}

export default MessageTextField