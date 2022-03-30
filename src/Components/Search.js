import React from "react";

const Search = (props) => {
  //  console.log(props)
  return (
    <div className="search-right" style={{color:"black" , display:"flex"}}>
      <img src={props.value.img} alt="" className="img"  style={{width:"50%", margin:"20px",borderRadius:"20px" }}></img>
      <br />
      <div style={{margin:"20px"}}>
      <b>Name: </b>
      {props.value.name}
      <br />
      <b>Location: </b>
      {props.value.location}
      <br />
      <b>Accomodation: </b>
      {props.value.size}
      <br />
      <b>Price: </b>
      Rs {props.value.price} / month
      <p style={{marginLeft:"30px"}}>{props.value.description}</p>
      </div>
    </div>
  );
};
export default Search;
