import "./App.scss";
import { Features } from "./sections/features/Features";
import { Header } from "./sections/header/Header";
import { Middle } from "./sections/middle/Middle";
import { featuresOne,featuresTwo } from "./utils/data";

function App() {

  return (
    <div className="App">
      <Header />
      <Features
       features={featuresOne}
      />
      <Middle/>
      <Features
       features={featuresTwo}
      />
    </div>
  );
}

export default App;
