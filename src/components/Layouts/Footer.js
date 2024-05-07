import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.segment}>
            <h3>Contact</h3>
            <p>Malwadi Rd, near Samidha Gas,</p>
            <p>Hadapsar, Pune, Maharashtra 411028</p>
            <p>nilumahajan793@gmail.com</p>
          </div>
          <div className={classes.segment}>
            <h3>About Us</h3>
            <p>
              Bringing Authentic Dosa Idli from Namma Bengaluru to Apla Pune.
            </p>
            <p>
              Gatti Chuntney is an authentic South Indian Restaurant established
              in 2000.
            </p>
            <p>
              Since then, our mission has been to provide high-quality food with
              skillful cooking.
            </p>
          </div>
          <div className={classes.segment}>
            <h3>Opening Hours</h3>
            <p>Dine In or Take Away</p>
            <p>Monday - Sunday</p>
            <p>7 am to 10 pm</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
