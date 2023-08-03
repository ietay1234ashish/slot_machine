import React from "react";
  const SlotM = (props) =>{
    // let x = '😃  ';
    // let y = '😃  ';
    // let z = '😇   ';
    let x = props.x;
    let y = props.y;
    let z = props.z;
    if((x===y) && (y===z)){
        return(
            <>
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is Maching</h1>
                
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is not Maching</h1>
               
            </div>
            </>
        )
    }
  }
const App = () =>{
    return(
        <>
        <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot machine game </span>🎰 </h1>
        <div className="slot_machine">
            <h1 className="date"> 📅{new Date().toDateString()}</h1>
            <hr />
        <SlotM x = '😃 ' y = '😃 'z = '😃 '/>
        <hr />
        <SlotM x = '😃 ' y = '😃 'z = '😃 '/>
        <hr />
        <SlotM x = '🍌 ' y = '🍎  'z = '🍌  '/>
        <hr />
        <SlotM x = '😃 ' y = '😃 'z = '😃 '/>
       
     
        </div>
        
        </>
    )
}
export default App;