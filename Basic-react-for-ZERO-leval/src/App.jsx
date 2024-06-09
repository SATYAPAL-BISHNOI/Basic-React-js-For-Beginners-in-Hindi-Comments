import { Fragment, useState } from 'react'
import './App.css'
import Raja, {Main1,Main2 as MAIN} from './components/Main'
// # jo Main.jsx file se Main name ka compo. export ho rha hai use me Raja name se IMPORT kr rha hu
// # lekin jo mene Main.jsx se Compo. object ke rup me Export kiya hai Usko me sirf same name se hi IMPORT kr sakta hu
// # agar me usko kisi aur name se IMPORT krna chahta hu to usko "as" keyword ka use krke uska name badl sakte hai  


// COde ka defult formet create krne ke liye " rafce " type kr ke Enter press kre jiske liye ES6 name se ak Extension Install krna hoga

const Head = ()=>{<h1>Heading</h1>}
function App() {
  // Ya pr pure JAVASCRIPT likhi ja sakti hai EX:
  const Name = "Satyapal Bishnoi";

  return (
    <>
    {/* // function me ak Element ko hi return kr sakte hai eske liye ham pure code ko ak Empty <> Fragment </> me rakh dete hai
    // jisse multiple line ko ak sath retun kiya ja sake  */}

    <Raja  />
    {/* // Send data using props */}


    <h1>Welcome in my web tech</h1>
    <MAIN item="photo" size="1280x900px" price={199} id="Ab12Cd"/>
    <Main1 data="phone is 0987654321"  />
    <h2>My name is {Name}</h2>
     
    {/* Variable ya JS ki other property ko use krene ke liye {carli bracket} ka use kiya jata hai */}
    
    </>
  )
}

export default App;

// export default function App() for use in another jsx file's
