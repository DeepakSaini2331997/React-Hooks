import LoginContextProvider from "./components/context/loginContextProvider";
import ParentComponents from "./components/parentComponents";
import Effectcomp from "./components/useeffect/effectcomp";
import CountRef from "./components/useref/countref";
import DomManipulated from "./components/useref/domManipulated";
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
      <br></br><hr></hr>
      <h2>UseContext</h2>
      <LoginContextProvider>
        <ParentComponents />
      </LoginContextProvider>
      <br></br><hr></hr>
      <h2>UseRef</h2>
      <CountRef/>
      <br></br>
      <DomManipulated/>
    </div>
  );
}

export default App;
