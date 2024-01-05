import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt=""
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum
          quo non sapiente, nostrum tempore. Aliquam sunt cupiditate amet at
          maxime sapiente, tempora accusantium culpa vitae illo, odit, dolorem
          consequuntur.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          ratione porro est iusto amet. Reiciendis quaerat iure architecto.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor = "bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" hoverColor="true" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
