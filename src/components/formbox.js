import React,{useState} from 'react'

export default function Formbox(props) {
    const [text, settext] = useState("")

    const onchangehandler= (event)=>{
        settext(event.target.value);
    }

    const handleupclick = (event)=>{
        settext(text.toUpperCase());
    }

    const handleloclick = (event)=>{
        settext(text.toLowerCase());
    }

    const handleclearclick = (event)=>{
        settext("");
    }
   const handlecopy = (event)=>{
    //    text.select();
       navigator.clipboard.writeText(text);
   }





 const handlecapclick =  ()=>{
    let firstletter = text[0].toUpperCase();
     for(let i = 1;i<(text.length );i++)
     {
         let prevword = text[i-1];
         let currentword;
         if(prevword === " ")
         {currentword = text[i].toUpperCase();}
         else { currentword = text[i];}
         firstletter = firstletter + currentword;
     }
     settext(firstletter);
 }

 const handlespace = ()=>{
     let storingletter = '';
     for (let i = 0; i < (text.length); i++) {
         let currletter = text[i];
         let nextletter = text[i+1];
         if (currletter === ' ' && nextletter === ' ') {
             currletter = '';
         }
         storingletter = storingletter + currletter;
     }
     settext(storingletter);
 }




    return (<>
        <>
        <div>
      <div className="container my-3"  >
  <h4 style = {{color: props.mode==='dark'?'white':'black'}} >{props.heading}</h4>
  <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'#8c8c8c':'white', color:props.mode==='dark'?'white':'black'}} value ={text} onChange = {onchangehandler} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className ="btn btn-dark " style={{ margin : 10 }} onClick = {handleupclick} >Upper Case</button>
<button className ="btn btn-dark"   style={{ margin : 10 }} onClick = {handleloclick} >Lower Case</button>
<button className ="btn btn-dark"  style={{ margin : 10 }}  onClick = {handleclearclick} >Clear text</button>
<button className ="btn btn-dark"   style={{ margin : 10 }} onClick = {handlecapclick} >Capitalise</button>
<button className ="btn btn-dark"   style={{ margin : 10 }} onClick = {handlecopy} >Copy</button>
<button className ="btn btn-dark"   style={{ margin : 10 }} onClick = {handlespace} >Space</button>
        </div>



<div className = "container my-3">
<h3 style = {{color: props.mode==='dark'?'white':'black'}}>Text Summary</h3>
<p style = {{color: props.mode==='dark'?'white':'black'}}>{(text.split(" ").filter((element)=>{return element.length != 0}).length)} words and {(text.length)} characters</p>
</div>

</>
<h3 style = {{color: props.mode==='dark'?'white':'black'}}>Preview</h3>
<p style = {{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"enter something to preview"}</p>
</>
    )
}
