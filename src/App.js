import Effectcomp from "./components/useeffect/effectcomp";
import Statecomp from "./components/usestate/statecomp";
function App() {
  return (
    <div className="App">
      <h1>
       React Hooks
      </h1><br></br>
      <Statecomp />
      <br></br><hr></hr>
      <Effectcomp />
    </div>
  );
}

export default App;
