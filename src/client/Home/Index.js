import React from "react"
// import fs from "fs"

const image = require.context('../../assets/composit_doors/modran_composit_doors/')
// const importAll = (e)=>{
//     console.log("Value of e = "+e);
//     e.keys().map((v,i)=>{
//         console.log(v)
//     })
// }
export default function Home() {
  const [imagesElement,setImageElement] = React.useState(false);
  React.useEffect(()=>{
     setImageElement( image.keys().map((value,index)=>{
          console.log("img value = "+value)
          return (<img src={image(value)} alt={value.toString().substring()}/>)
      }))
  },[])
 return (
   <div>
       {imagesElement?imagesElement:<p>Loading images ......</p>}

   </div>
 )

}

