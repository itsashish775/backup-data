import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
