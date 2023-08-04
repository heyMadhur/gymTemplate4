function FreeTrial() {
    return (
        <div className="w-full px-10 xs:px-20 py-10 texture-bg flex flex-col items-center">
            <div className="w-full md:w-10/12 parallelogram pl-10 md:pl-16 pr-10 py-3 xs:py-5 flex flex-col md:flex-row items-center justify-between bg-brand gap-2 sm:gap-3">
                <div className="w-full md:w-7/12 text-center md:text-left">
                    <h3 className="text-lg xs:text-xl lg:text-3xl font-medium">
                        Are you ready to change?
                    </h3>
                    <p className="text-sm font-light hidden sm:block mt-1">
                        Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower you on the journey.
                    </p>
                </div>
                <button className="nested-parallelogram px-8 md:px-6 lg:px-8 py-2 border-[2px] border-white hover:bg-white hover:text-brand transition-all duration-300 mr-2">
                <a href="#contact">
                    <div className="text-xs sm:text-sm sm:font-semibold">
                    Start your Free Trial
                    </div>
                </a>
                </button>
            </div>
        </div>
    );
}

export default FreeTrial;