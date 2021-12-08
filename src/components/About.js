import React,{useState} from 'react';
import Card from './Card';
// import img from './myimage.png';


export default function About(props) {
     const [state1, setstate1] = useState(
        'https://i.ibb.co/HTprZpn/Group-1-1.png'
     )
   //   const [state2, setstate2] = useState(
   //      'https://pixabay.com/get/g45a6057762c776e2b78f4f4957e3ba2bc8d73b87f7eb4faea63f8db18be982ef052e740ec9a778c16a87873c9374d2658d0da1dbac9dcf2ae4fabe648f27659e9b008bac92669f0cf918c72be7769132_640.png'
   //   )
   //   const [state3, setstate3] = useState(
   //      'https://pixabay.com/get/g45a6057762c776e2b78f4f4957e3ba2bc8d73b87f7eb4faea63f8db18be982ef052e740ec9a778c16a87873c9374d2658d0da1dbac9dcf2ae4fabe648f27659e9b008bac92669f0cf918c72be7769132_640.png'
   //   )


//  const [areawala, setareawala] = useState('')

     const piconehandler = (event)=>{
     if(state1 === 'https://i.ibb.co/HTprZpn/Group-1-1.png')
    {
        setstate1('https://i.ibb.co/jf4b6Hh/Group-1.png')
        //  setareawala('https://www.instagram.com/accounts/login/?hl=en')
} //here i have to paste the srn of image 
    else{setstate1('https://i.ibb.co/HTprZpn/Group-1-1.png')}
    
 }

//  const pictwohandler = (event)=>{
//     if(state2 === 'https://pixabay.com/get/g45a6057762c776e2b78f4f4957e3ba2bc8d73b87f7eb4faea63f8db18be982ef052e740ec9a778c16a87873c9374d2658d0da1dbac9dcf2ae4fabe648f27659e9b008bac92669f0cf918c72be7769132_640.png')
//    {setstate2('https://cdn.pixabay.com/photo/2012/04/11/14/00/ace-28344_1280.png')}
//    else{setstate2('https://pixabay.com/get/g45a6057762c776e2b78f4f4957e3ba2bc8d73b87f7eb4faea63f8db18be982ef052e740ec9a778c16a87873c9374d2658d0da1dbac9dcf2ae4fabe648f27659e9b008bac92669f0cf918c72be7769132_640.png')}
   
// }
// const picthreehandler = (event)=>{
//     if(state3 === 'https://pixabay.com/get/g45a6057762c776e2b78f4f4957e3ba2bc8d73b87f7eb4faea63f8db18be982ef052e740ec9a778c16a87873c9374d2658d0da1dbac9dcf2ae4fabe648f27659e9b008bac92669f0cf918c72be7769132_640.png')
//    {setstate3('https://cdn.pixabay.com/photo/2012/04/11/14/00/ace-28344_1280.png')}
//    else{setstate3('https://pixabay.com/get/g45a6057762c776e2b78f4f4957e3ba2bc8d73b87f7eb4faea63f8db18be982ef052e740ec9a778c16a87873c9374d2658d0da1dbac9dcf2ae4fabe648f27659e9b008bac92669f0cf918c72be7769132_640.png')}
   
// }
    return (
      
        <div>
         
            {/* <h3 style = {{color: props.mode==='dark'?'white':'black'}}>click on the cards to know more about us </h3> <br/> */}
           
            <img   onClick={piconehandler} src={state1} width="270" height="350" alt="card"  />
           
            {/* usemap="#image-map" */}
{/* 
            <img style={{ margin : 15 }} onClick={pictwohandler} src={state2} width="230" height="280" alt="card" />
             <img style={{ margin : 15 }} onClick={picthreehandler}src={state3} width="230" height="280" alt="card" /> */}
        </div>
        
    )
}
