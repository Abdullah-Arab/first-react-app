import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <BsFillCalendarFill color="red" size={40}></BsFillCalendarFill>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Halo <span>Wie geth's</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        My Button
      </Button>
      <ListGroup
        items={["Tripoli", "Bengazhi"]}
        heading={""}
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      ></ListGroup>
      <Like
      onClick={()=> console.log('liked')}
       
      ></Like>
    </div>
  );
}

export default App;
