import { useState } from "react";
import "./App.css";
import ImageSelector from "./components/imageSelector";


function App() {
  const [state,setState] = useState(false)
  return(
    <div>
    {!state && (
        <>
          <h1>Click to open</h1>
          <button onClick={(e) => setState(!state)}>Gallery</button>
        </>
      )}
      {state && <ImageSelector />}
    </div>
  )
}

export default App;
