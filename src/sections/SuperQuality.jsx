import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        

        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide you   
          <span className="text-coral-red"> Super
          </span> <br />
          <span className="text-coral-red">Quality </span>
           Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum quo non sapiente, nostrum tempore. Aliquam sunt cupiditate amet at maxime sapiente, tempora accusantium culpa vitae illo, odit, dolorem consequuntur.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione porro est iusto amet. Reiciendis quaerat iure architecto.</p>
        <div className="mt-11"><Button label="View details" /></div>
        
      </div>

      <div className="flex-1 flex justify-center items-center">

      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
        
      </div>
    </section>
  );
};

export default SuperQuality;
