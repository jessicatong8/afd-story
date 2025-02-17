import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Page 1", `Page 2`, "Page 3", "Page 4", "Page 5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    setAlertVisibility(true);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup items={items} heading="List" onSelectItem={handleSelectItem} /> */}
      {alertVisible && (
        <Alert onCLose={() => setAlertVisibility(false)}>
          <span>Hello World!</span>
        </Alert>
      )}
      <Button color="secondary" onClick={handleButtonClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
