import React from "react";

// function ProductCard(props) {
//   const style = {
//     width: "300px",
//     height: "400px",
//     padding: "5px",
//     borderRadius: "5px",
//     backgroundColor: "#f3f3f3",
//     margin: "5px",
//   };
//   const imgStyle = {
//     width: "90%",
//     height: "200px",
//     padding: "5px",
//     borderRadius: "5px",
//     backgroundColor: "#f3f3f3",
//     objectFit: "contain",
//   };
//   return (
//     <div style={style}>
//       <img src={props.image} alt="" style={imgStyle} />
//       <h4>{props.name}</h4>
//       <p>{props.price}</p>
//       <del>#50,500</del>
//     </div>
//   );
// }
function ProductCard({ image, name, price }) {
  const style = {
    width: "300px",
    height: "400px",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "#f3f3f3",
    margin: "5px",
  };
  const imgStyle = {
    width: "90%",
    height: "200px",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "#f3f3f3",
    objectFit: "contain",
  };
  return (
    <div style={style}>
      <img src={image} alt="" style={imgStyle} />
      <h4>{name}</h4>
      <p>{price}</p>
      <del>#50,500</del>
    </div>
  );
}

export default ProductCard;
