
function Usercard(props){
    return(
        <>
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        
        <img src={props.profile} className="img" alt=""/>
         <h3>{props.name}</h3>
            <h3>{props.city}</h3>
        <p>{props.job}</p>
        <div className="button">
            <button className="primary">Message</button>
            <button className="primary">Following</button>

        </div>
        <div className="skills">
            <h6>SKILLS</h6>
            <ul>
                {props.skills.map((elemnt,index)=>(<li key={index}>{elemnt}</li>))}
                {/* <li>HTML</li>
                <li>Front end</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Node</li>
                <li>Python</li> */}
                

            </ul>
</div>
        </div>
        </>
    )
}
export default Usercard;


