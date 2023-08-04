import Image from "next/image";

function Lifestyle() {
    return (
        <div className="flex flex-col items-center gap-6 xs:gap-8 mb-20">
            <h2 className="text-2xl xs:text-3xl font-semibold text-center">
                Fit for your lifestyle
            </h2>
            <p className="w-full xs:w-10/12 md:w-7/12 lg:w-6/12 text-center text-white/75">
                Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.
            </p>
            <div className="relative w-full xs:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] flex justify-center ">
                <Image 
                    src="/images/hero6.jpg"
                    // src="/images/lifestyle-image.png"
                    alt="lifestyle image"
                    width={500}
                    height={400}
                    className="w-full z-10 rounded-b-sm"
                />
                <div className="absolute w-[104%] h-[40%] -bottom-[2.1%] clipped-polygon bg-brand rounded-xl"></div>
                <div className="absolute w-4 h-4 bg-primaryBg bottom-[20.1%] -left-[2%]"></div>
                <div className="absolute w-8 h-4 bg-brand bottom-[20.1%] -left-[2%] rounded-ss-xl"></div>
            </div>
        </div>
    );
}

export default Lifestyle;