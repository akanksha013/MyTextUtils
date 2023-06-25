import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

  const countWords=()=>{
    let str3=text
    return str3.trim().split(/\s+/).filter((e)=>{return e.length!==0}).length;
  }

  const upClick = ()=>{
    setText(text.toUpperCase())
    props.showAlert("Text Converted To UpperCase","success")
  }

  const copyContent=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To ClipBoard","success");
  }

  const clear=()=>{
    setText("")
    props.showAlert("Text Cleared","success")
  }

  const SentenceCase=()=>{
    let str = text.toLowerCase().split(" ").reduce( (s, c) =>
      s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '')
      setText(str)
      props.showAlert("Text Converted To SentenceCase","success")
  }

  const reverseText=()=>{
    let NewT = text.split('').reverse().join('')
    setText(NewT)
    props.showAlert("Text Reversed","success")
  }

  const handleOnChange = (e)=>{
    setText(e.target.value)
  }

  const downClick = ()=>{
    setText(text.toLowerCase())
    props.showAlert("Text Converted To LowerCase","success")
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className='container my-3'>
        <h2 className='c1'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="10" value={text} placeholder='Enter the Text Here' style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(76,74,74)':'rgb(219, 219, 219)'}}></textarea>
        </div>
        <button disabled={text.length===0} className='btn mx-3 btt' style={{color:props.mode==='dark'?'white':'white',backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(49, 45, 45)'}} onClick={upClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn mx-3 btt" style={{color:props.mode==='dark'?'white':'white',backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(49, 45, 45)'}} onClick={downClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn mx-3 btt" style={{color:props.mode==='dark'?'white':'white',backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(49, 45, 45)'}} onClick={reverseText}>Reverse String</button>
        <button disabled={text.length===0} className="btn mx-3 btt" style={{color:props.mode==='dark'?'white':'white',backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(49, 45, 45)'}} onClick={SentenceCase}>Convert to SentenceCase</button>
        <button disabled={text.length===0} className="btn mx-3 btt" style={{color:props.mode==='dark'?'white':'white',backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(49, 45, 45)'}} onClick={copyContent}>Copy Text</button>
        <button disabled={text.length===0} className="btn mx-3 btt" style={{color:props.mode==='dark'?'white':'white',backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(49, 45, 45)'}} onClick={clear}>Clear</button>

        
    </div>
    <div className="container my-3">
      <h2 className='c1'>
        Your Text Summary
      </h2>
      <i>
      <p className='c1' style={{fontSize:'20px'}}>
        {text.length} characters  {countWords()} words
      </p>
      <p className='c1' style={{fontSize:'20px'}}>
        {(0.008*text.split(" ").filter((e)=>{return e.length!==0}).length)} mins read
      </p>
      </i>
      <br />
      <h3 className='c1' style={{fontSize:'25px'}}>
        Preview
      </h3>
      <p className='c1' style={{fontSize:'18px',fontStyle:'oblique'}}>
        {text.length>0?text:'Nothing to Preview !'}
      </p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading:PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading : "Set a Text Here"
}
