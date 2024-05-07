import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store-context/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (qty) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: qty,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹{props.price}</div>
        <div className={classes.form}>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>

      <div className={classes.image}>
        <img src={props.image} alt={props.name}></img>
      </div>
    </li>
  );
};

export default MealItem;
