"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <p className="hero__title">Find, Book, or rent a car -- Quickly and easily</p>

        <p className="hero__subtitle"> Streamline your car rental experience with our effortles booking rpocess</p>

        <CustomButton title="Expolre Cars" btnType="button" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
