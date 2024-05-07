import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const qtyInputRef = useRef();
  const addHandler = (event) => {
    event.preventDefault();
    const enteredQty = +qtyInputRef.current.value;

    props.onAddToCart(enteredQty);
  };

  return (
    <form className={classes.form} onSubmit={addHandler}>
      <Input
        ref={qtyInputRef}
        label="Qty"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
