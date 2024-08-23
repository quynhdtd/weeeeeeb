

function SimpleTextField(props){
    return(
        <div>
            <p style={{ fontSize: '16px', color: '#1C1E53', paddingBottom:'10px' }}>
                {props.title}
            </p>
            <input type={props.type} className="text-field"/>
        </div>
    )
}

export default SimpleTextField