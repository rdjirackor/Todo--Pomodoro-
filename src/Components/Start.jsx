import React from "react";
import '../Styles/Start.css'
const Start =({ onClick, isActive })=>{
    return (
        <div className="button">
<button className="button-container" onClick={onClick}>
      {isActive ? 'Pause' : 'Start'}
     </button>   
     </div>
    )
}
export default Start;



