import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import MealsSummary from "./MealsSummary";

const MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description:
      "delicious crepe made up of fermented lentil and rice batter served alongside sambar and chutney",
    price: 99,
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/9/DV3016_masala-dosa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1570635680579.jpeg",
  },
  {
    id: "m2",
    name: "Idli",
    description: "savoury rice cake paired with sambar and coconut chutney",
    price: 60,
    image:
      "https://4.bp.blogspot.com/-7C3B7VPDVKc/XBKGp3-XlcI/AAAAAAAA4VY/wKe7qrJ-ntQlNN5e1fGksH62duvg6f8-gCLcBGAs/s1600/Instant-Suji-idli.jpg",
  },
  {
    id: "m3",
    name: "Payasam",
    description:
      "milk-based pudding made of vermicelli noodles toasted in ghee",
    price: 80,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/semiya-payasam-recipe-1.jpg",
  },
  {
    id: "m4",
    name: "Vada",
    description:
      "protein rich and effortlessly delicious doughnut shape snack served with sambar or rasam",
    price: 60,
    image:
      "https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg",
  },
  {
    id: "m5",
    name: "Upma",
    description: "a savory porridge made with semolina, water and veggies",
    price: 70,
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-South-Indian-Rava-Upma-Recipe-500x500.jpg",
  },
  {
    id: "m6",
    name: "Uttapam",
    description:
      "pancake made from rice and lentils with crispy golden edges and a pillowy soft center topped with veggies",
    price: 90,
    image:
      "https://ministryofcurry.com/wp-content/uploads/2020/09/uttapam-4-500x500.jpg",
  },
];

const AvailableMeals = () => {
  const mealsList = MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <MealsSummary />
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
