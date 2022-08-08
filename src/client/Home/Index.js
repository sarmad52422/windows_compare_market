import React, {useEffect} from "react"

const callBackend = async () => {
    const response = await fetch('/api')
    const body = await response.json()

    if (response.status !== 200) {
      console.log("Status is not equal to 200 means yeh sahi nahi he")
    } else return body
}

export default function Home() {
    const [mState,setMstate] = React.useState({value:"Nothing"})
    useEffect(()=>{
        callBackend().then(res =>{
            setMstate({value:res.express})
            console.log({res})
        }).catch(error=>{
            setMstate({value:error})
            console.log("error agya he"+error+"\n")
        })
    },[])
    return (
         mState.value? (
             <h1>{mState.value}</h1>
         ):<h1>Server is not working</h1>
    )

}