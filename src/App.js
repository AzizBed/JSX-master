import React from "react";
import myPp from './myPp.jpg';
import './App.css';
import'./Style.css';

function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Aziz Bedouihech</h1>

<br />
<h3>This is an image in source</h3>
<img src={myPp} className="myPp"  alt="myPhoto"/>

<br />
<h3>This is an image in public</h3>

<img src="/myImage.jpg"className='myPp' alt='myPhoto'/>

</div>
    <video  src="/GMC.mp4" type="video/mp4" 
   width="320" height="240" controls>
   </video>
   </div>
  );
}

export default App;
