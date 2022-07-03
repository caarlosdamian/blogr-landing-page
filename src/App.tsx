import "./App.scss";
import { Features } from "./sections/features/Features";
import { Footer } from "./sections/footer/Footer";
import { Header } from "./sections/header/Header";
import { Middle } from "./sections/middle/Middle";
import { featuresOne,featuresTwo } from "./utils/data";

function App() {

  return (
    <main className="App">
      <Header />
      <Features
       features={featuresOne}
      />
      <Middle/>
      <Features
       features={featuresTwo}
      />
      <Footer/>
    </main>
  );
}

export default App;
