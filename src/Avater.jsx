import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";

const Avater = ({ item, key }) => {
  const [cartState, setCartState] = useState([]);

  const handleAddToCart = (item) => {
    const cartItem = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (cartItem.length > 0) {
      let check = cartItem.filter((item1, i) => {
        return item1.id == item.id;
      });
      if (check) {
        const itemToPush = cartItem.filter((itemi, key) => {
          return item.id !== itemi.id;
        });
        check[0].quantity = check[0].quantity++;
        localStorage.setItem(
          "cart",
          JSON.stringify({ ...itemToPush, ...check })
        );
        // window.location.reload(true);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([{ ...item, quantity: 1 }]));
    }
  };
  return (
    <div key={key}>
      <Link to={`/productDetail/${item.id}`} replace>
        <img
          src={item.images[0]}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Link>
      <p className="">{item.price}</p>
      <Button />
    </div>
  );
};

export default Avater;
