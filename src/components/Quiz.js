// import { useState } from "react";

// function Quiz(){
//     const[img,setimg]=useState("")
//     const[loading,setloading]=useState(false)
// const[qrdata,setqrdata]=useState()
// const[imgsize,setimgsize]=useState(150)
// async function Genetrateqr (){
//         setloading(true);
//         try{
// const url=`https://api.qrserver.com/v1/create-qr-code/?size=${imgsize}x${imgsize}&data=${encodeURIComponent(qrdata)}`;
// setimg(url)        
// console.log(url)
// }
//         catch(error){
//             console.error("error for genetrating qrcode",error)
//         }
//         finally{
//             setloading(false)
//         }
// }

// function Downloadqr(){
// fetch(img).then((response)=>response.blob()).then((blob)=>{
//     const link=document.createElement("a");
//     link.href=URL.createObjectURL(blob);
//     link.download="qrcode.png";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link)
// })
// .catch((error)=>{
//     console.log("qr code download error",error)
// })
// }
//     return(
//         <div className="container">
//             <h1>Qr code genetrator</h1>
//             {img &&<img src={img} className="img"/>}
//          {loading && <p>Please wait...</p>}
//     <div>
//         <label htmlFor="datainput" className="input-label">Data for qr code</label>
//  <input type="text" id="datainput" placeholder="enter the link for qr code"value={qrdata} onChange={(e)=>setqrdata(e.target.value)}/> 
//  <label htmlFor="sizeinput" className="input-label">
//     image size (eg,.150)
//  </label>
//  <input type="text" id="sizeinput" placeholder="Enter image size"  value={imgsize} onChange={(size)=>setimgsize(size.target.value)}/>
//  <button className="genetrate-button" onClick={Genetrateqr} disabled={loading}> Genetrate Qr Code</button>
//  <button className="download-button" onClick={Downloadqr}  >download Qr Code</button>
//     </div>
//         <p>Designed by <span>karthi</span></p>
//         </div>
//     )
// }
// export default Quiz;