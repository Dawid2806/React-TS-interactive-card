import { useState } from "react";
import classes from "./app.module.css";
import { CardBack } from "./components/CardBack/CardBack";
import { CardFront } from "./components/CardFront/CardFront";
import { Form } from "./components/Form/Form";
import { Thanks } from "./components/ThanksY/Thanks";
import { GlobalStateProvider } from "./Context/GlobalStateProvider";

const App: React.FC = () => {
  const [isValid, setIsValid] = useState(false);
  return (
    <GlobalStateProvider>
      <div className={classes.App}>
        <div className={classes.card_container}>
          <CardBack />
          <CardFront />
        </div>
        <div className={classes.form}>
          {!isValid ? (
            <Form isValidCheck={setIsValid} />
          ) : (
            <Thanks isValidCheck={setIsValid} />
          )}
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default App;
