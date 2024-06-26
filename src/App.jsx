import Apresentation from "./components/Apresentacao";
import Artistas from "./components/Artistas";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Obras from "./components/Obras";


function App() {
  return (
    <div className="mx-page max-md:mx-1">
      <Header/>
       <Apresentation/>
      <Obras/>
      <Artistas/>
      <Footer/>
    </div>
  );
}

export default App;
