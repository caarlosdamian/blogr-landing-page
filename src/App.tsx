import "./App.scss";
import { Features } from "./sections/features/Features";
import { Header } from "./sections/header/Header";
import { featuresOne,featuresTwo } from "./utils/data";

function App() {

  return (
    <div className="App">
      <Header />
      <Features
       features={featuresOne}
      />
      <Features
       features={featuresTwo}
      />
    </div>
  );
}

export default App;
