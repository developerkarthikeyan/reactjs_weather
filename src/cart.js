import React, { useState } from "react";

function Cart() {
  let [UserName, setUserName] = useState({name:"karthi",age:20});
 
 

  const changeName = () => {
    setUserName({...UserName,name:"john"})
  };

  const updateAge = () => {
    // Implement your logic to update age here
setUserName({...UserName,age:40})
  };

  return (
    <>
      {/* <h1>Number of items in cart :{cartcount}</h1>
      <button onClick={Addtocart}>Add to cart</button> */}
      <h1>{UserName.name}</h1>
      <h1>{UserName.age}</h1>
      <button onClick={changeName}>Change username</button>
      <button onClick={updateAge}>Change Age</button>
    </>
  );
}
export default Cart;                