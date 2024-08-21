import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className=" mx-auto">
      <NavBar />
      <HeroSection />
      <hr />
      <About />
      <hr />
      <Testimonials />
      <hr />
      <Form />
      <hr />
      <ContactUs />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
