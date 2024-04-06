import { useState } from "react";


function Regform(){
    const [User,setUser]=useState({
        name:"",
        age:0,
        gender:"",
        ismarried:null
    })
function changehandler(e){
const name=e.target.name;
const value=e.target.type=="checkbox"?e.target.checked:e.target.value;
setUser({...User,[name]:value})

}
    return(
        <>
        <table>
            <tr>
                <td>Name</td>
                <td>{User.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{User.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td> {User.gender}</td>
            </tr>
            <tr>
                <td>Married</td>
                <td> {User.ismarried?"Married":"Not married"}</td>
            </tr>


        </table>
   <form><label>Name</label>
    <input type="text "placeholder ="fullname"  onChange={changehandler} name="name" value={User.name}id="male"/>
    <input type="text " placeholder ="age"  name="age"  onChange={changehandler}  id="female" value={User.age}/>
    <label htmlFor=""> Male </label>
    <input type="radio" checked={User.gender=="male"} onChange={changehandler} name="gender" value="mafle"/>
    <label htmlFor="">FeMale</label>
    <input type="radio" checked={User.gender=="Female"} onChange={changehandler} name="gender" value="female"/>
    <label htmlFor=""> ismarried
        <input type="checkbox" id="ismarried"  name="ismarried"  checked={User.ismarried} onChange={changehandler}/>

    </label>
   </form>
        </>
    )
}
export default Regform;