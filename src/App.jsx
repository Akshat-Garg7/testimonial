import "./App.css";
import data from "./data";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
          <Testimonial reviews={data}/>
        </div>
        
    </div>
  );
}

export default App;