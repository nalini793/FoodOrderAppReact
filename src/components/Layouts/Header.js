import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1> Gatti Chutney</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://sukhis.com/app/uploads/2022/04/image3-5-1024x684.jpg"
          alt="south idian food delicacies"
        ></img>
      </div>
    </>
  );
};

export default Header;
