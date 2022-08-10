import React, {useEffect} from "react"

const callBackend = async () => {
    try {
        const response = await fetch('/api/users/123/friends/44')


        const body = await response.json()
        if (response.status !== 200) {
          return {express:'server did not find api'}
        } else return body
    }catch (e){

        return {express:'server is not connected'+e}
    }

}


export default function Home() {

    const [mState,setMstate] = React.useState({value:"Nothing"})
    useEffect(()=>{

        callBackend().then(res =>{
            setMstate({value:res.express})
        }).catch(error=>{
            setMstate({value:'error'})
        })
    },[])
    return (
         mState.value? (
             <h1>{mState.value}</h1>
         ):<h1>Server is not working</h1>
    )

}
