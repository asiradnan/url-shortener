import { useState } from "react"
function Shortener(){
    const [value, updateValue] = useState("")
    const [data, updateData] = useState("")
    const [flag,updateFlag] = useState(false)
    const [count,updateCount] = useState(0)
    var x = () =>{
        let freshvalue = value.replace("https://","")
        freshvalue = freshvalue.replace("http://","")
        fetch(`https://sshhoorrtt.vercel.app/shorten/${freshvalue}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            updateData(data.shorturl)
            updateCount(data.count)
            updateFlag(true)
            updateValue("")
        })
    }
    var cnt = () =>{
        let freshvalue = data.replace("https://sshhoorrtt.vercel.app/","")
        fetch(`https://sshhoorrtt.vercel.app/count/${freshvalue}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            updateCount(data.count)
        })
    }
    if (flag===true){
        return (
            <>
            <input type="text" onChange={(e)=>updateValue(e.target.value)} value={value} placeholder="Enter the long link"/>
            <button onClick={x}>Shorten</button>
            <br/>
            <a href= {data} target="_blank" onClick={cnt}>{data}</a> <p>{count}</p>
            </>
        )
    }
    else{
        return(
            <>
            <input type="text" onChange={(e)=>updateValue(e.target.value)} value={value} placeholder="Enter the long link"/>
            <button onClick={x}>Shorten</button>
            </>
        )
    }
}
export default Shortener