import { useEffect, useState } from "react"
import "./Shortener.css"
const triangle = require("./triangle2.png")
const copyicon = require("./copy.png")
const qricon = require("./qr.png")
function Shortener() {
    const [value, updateValue] = useState("")
    const [data, updateData] = useState("")
    const [copied, updateCopied] = useState(false)
    const [qr, updateQr] = useState("")
    const [showqr, updateShowqr] = useState(false)
    const [rangeValue, updateRangeValue] = useState(85);
    var x = () => {
        let freshvalue = value.replace("https://", "")
        freshvalue = freshvalue.replace("http://", "")
        let freshvalue2 = encodeURIComponent(freshvalue)
        console.log(freshvalue2)
        fetch(`https://chottourlserver.asiradnan.com/shorten/${freshvalue2}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                updateData(data.shorturl)
                updateQr(data.qrcode)
                updateValue("")
            })
        updateRangeValue(85)
    }
    const copy = () => {
        navigator.clipboard.writeText(data)
            .then(() => {
                updateCopied(true);
                setTimeout(() => updateCopied(false), 2500);
            });
    }
    const showqrcode = () => {
        updateShowqr(true);
        setTimeout(() => updateShowqr(false), 5000);
    }
    useEffect(() => {
        if (rangeValue === 50) x();
    }, [rangeValue]);
    return (
        <div className="body">
            <header>
                URL Shortener
            </header>
            <div className="first">
                <input type="url" id="longurl" onChange={(e) => updateValue(e.target.value)} value={value} placeholder="Enter the long URL here" />
                {/* <div id="slidercontainer"> 
                    <input type="range" min="1" max="100" value={rangeValue}
                        onChange={(e) => updateRangeValue(Math.max(e.target.value,50))}></input>
                        <button id="shorten" onClick={x}>Shorten</button>
                </div> */}
                <div id="slidercontainer">
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={rangeValue}
                        onChange={(e) => updateRangeValue(Math.max(e.target.value, 50))}
                        style={{
                            background: `linear-gradient(to right, #A4761E 0%, #A4761E ${(rangeValue - 1)}%, #652508 ${(rangeValue - 1)}%, #652508 100%)`
                        }}
                    />
                    <button id="shorten" onClick={x}>Shorten</button>
                </div>
            </div>
            <figure>
                <img id="firsttriangle" src={triangle}></img>
                <img id="secondtriangle" src={triangle}></img>
            </figure>
            <div className="second">
                <input type="text" readOnly value={data} placeholder="Shortened URL" id="shorturl"></input>
                <div>
                    {copied &&
                        <p id="message" >Copied to clipboard!</p>
                    }
                    {showqr &&
                        <img id="qrimg" src={`data:image/png;base64,${qr}`} alt="QR Code" />
                    }
                    {/* <p>This url was used: {count} times!</p> */}
                </div>
            </div>
            <div id="buttonsdiv">
                <button onClick={copy}><img className="buttonimg" src={copyicon}></img>Copy URL</button>
                <button onClick={showqrcode}><img className="buttonimg" src={qricon}></img>QR Code</button>
            </div>
        </div>
    )
}
export default Shortener