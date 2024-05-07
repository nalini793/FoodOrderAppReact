import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite south-indian delicacies from our broad selection of
        available dishes and enjoy them at comfort of your home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs keeping in mind the authenticity and
        taste of our historic tradition!
      </p>
    </section>
  );
};

export default MealsSummary;
