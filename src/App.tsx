import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={()=>setAlertVisibility(false)}>
          Halo <span>Wie geth's</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="danger">
        My Button
      </Button>
    </div>
  );
}

export default App;
