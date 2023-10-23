"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CarDetails, CustomButton } from ".";
import { calculateCarRent } from "@/utils";

interface CarCardProp {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const { year, city_mpg, transmission, drive, make, model } = car;
  const carRent = calculateCarRent(year, city_mpg);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}
          {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          fill
          priority
          className="object-contain"
          alt="Car model"
        />
      </div>
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={"/steering-wheel.svg"}
              alt="Steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src={"/tire.svg"} alt="Tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src={"/gas.svg"} alt="Gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            btnType="button"
            title="View More"
            containerStyles="w-full py-[10px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              if (isOpen) {
                setIsOpen(!isOpen);
              } else {
                setIsOpen(!isOpen);
              }
            }}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(!isOpen)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
