import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import Image from 'next/image';

interface CarCardProps{
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return <div className="car-card group">
    <div className="car-card_content">
      <h2 className="car-card-content-title"> {make} {model}</h2>
    </div>
    <p className="flex mt-6 text-[32px]">
      <span className="self-start text-[14px] font-semibold">
        $
      </span>
       {carRent}
      <span className="self-end text-[14px] font-semibold">
        /day
      </span>
    </p>
    <div className="relative w-full h-40 my-3 object-contain">
      <Image src='/hero.png' className="object-contain" alt='car model' fill priority/>
    </div>
    </div>;
};

export default CarCard;
