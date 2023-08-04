import Image from "next/image";
import { Orbitron } from "next/font/google";
import BrandButton from "./BrandButton";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

function Hero() {
  return (
    <div className="relative w-full">
      <Image
        // src="/images/heroSection/hero.png"
        src="/images/heroSection/hero19.jpg"
        alt="hero background image"
        width={2000}
        height={1900}
        // className="w-full min-h-screen object-cover"
        className="w-full min-h-screen object-cover rounded-lg filter blur-sm"
        priority
      />
      <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center px-10 xs:px-16 sm:px-16 lg:px-24 py-16 bg-gradient-to-t from-black/20 to-black/20">
        <div className="w-full md:w-11/12 lg:w-[55%] flex flex-col gap-3 md:gap-4 lg:gap-6 mt-28 sm:mt-20">
          <h1
            className={`${orbitron.className} text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-widest md:leading-[3.8rem] lg:leading-[4.2rem] lg:mb-2`}
          >
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgb(224, 32, 2)" }}
            //   style={{ WebkitTextStroke: "2px #FF4601" }}
            >
              Unlock
            </span>{" "}
            your
            <br />
            Divine Strength!!
          </h1>
          <p className="text-[1rem] lg:text-[1.12rem] leading-5 xs:leading-6 lg:leading-7 tracking-wide text-white/75 mb-3">
            Get ready to sweat it out and achieve your fitness goals with our
            high-energy fitness classes! Our classes are designed to cater to
            all fitness levels and provide a fun and motivating environment to
            help you reach your peak performance.
          </p>
          <BrandButton link="#contact">Start free trial</BrandButton>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-primaryBg/5 to-primaryBg"></div>
    </div>
  );
}

export default Hero;