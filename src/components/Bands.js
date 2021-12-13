import React from "react";
import Band from "./Band";

const Bands = props => {
 const bandList = props.bands.map((band) => < Band id={band.id} name={band.name} deleteBand={props.deleteBand} />)

 return (
   <ul>
     {bandList}
   </ul>
 )
}

export default Bands