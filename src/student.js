import proptypes from "prop-types"




function Student(props){
    return(
        <>
        <div className="student">
     <table>
        <tr>
            <th>Name</th>
            <td>{props.name}</td>
        </tr>
        <tr>
            <th>AGE</th>
            <td>{props.age}</td>
        </tr><tr>
            <th>ismarried</th>
            <td>{props.ismarrid?" yes":"no"}</td>
        </tr>
     </table>
        </div>
               </>
    )
}

export default Student
Student.prototypes={
    name:proptypes.string,
    age:proptypes.number,
    ismarried:proptypes.bool
}
Student.defaultProps={
    name:"no name",
    age:90,
    ismarrid:false
}