import React from 'react'


const Main = () => {
    const a=10
  return (
    <>

    <h1>HEADING  "{a}"</h1>
    <h2></h2>
    </>
  )
}

const Main2 = () =><h1>HEADING "1"</h1>

const Main1 = (data) =><><h1>HEADING  "2"</h1> <h2>{data.data}</h2></>
// props ki location pr ham koi bhi word ko keyword ki jahge pr use kr sakte hai


export default Main; // defult rup se kisi ak compo. ko hi export kiya ja sakta hai
                     // defult export components ko kisi  bhi name se aaccess{IMPORT in other file} kiya ja sakata hai
export {Main1,Main2};
// esko export krne ke liye other Way's
//
//  export const Main3 = () =><h1>HEADING  "3"</h1>
//