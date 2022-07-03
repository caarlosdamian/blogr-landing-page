import "./App.scss";
import { Features } from "./sections/features/Features";
import { Header } from "./sections/header/Header";
import { featuresOne } from "./utils/data";

function App() {
  const { desktopImg, features, id, mobileImg, title } = featuresOne;

  return (
    <div className="App">
      <Header />
      <Features
        desktopImg={desktopImg}
        featueres={features}
        mobileImg={mobileImg}
        id={id}
        title={title}
      />
    </div>
  );
}

export default App;
