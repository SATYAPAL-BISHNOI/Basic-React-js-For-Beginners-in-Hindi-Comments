//compo = components 


import React from 'react'


const Main = () => {
    const obj={
        name:"Satyapal bishnoi",
        age:20,
        city:"Sanchore"
    }
    // Object data using in h2 tage and h2 id is "objData"
    let {name,age,city} =obj; // object destructuring

    const projectNo =10
  return (
    <>

    <h1> Project "{projectNo}"</h1>
    <h2 id='objData' >My NAME IS {name} and i am {age} years old. I from {city}</h2>
    {/* this data from obj  */}

    </>
  )
}

const Main2 = ({id,item,price,size}) =>  <>

 <h1>HEADING "1"</h1>
</>

const Main1 = (data) =><><h1>HEADING  "2"</h1> <h2>{data.data}</h2></>
// props ki location pr ham koi bhi word ko keyword ki jahge pr use kr sakte hai


export default Main; // defult rup se kisi ak compo. ko hi export kiya ja sakta hai
                     // defult export components ko kisi  bhi name se aaccess{IMPORT in other file} kiya ja sakata hai
export {Main1,Main2};
// esko export krne ke liye other Way's
//
//  export const Main3 = () =><h1>HEADING  "3"</h1>
//