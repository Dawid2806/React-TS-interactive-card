import classes from "./app.module.css";
import { CardBack } from "./components/CardBack/CardBack";
import { CardFront } from "./components/CardFront/CardFront";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.card_container}>
        <CardBack />
        <CardFront />
      </div>
      <div className={classes.form}>
        <Form />
      </div>
    </div>
  );
}

export default App;
