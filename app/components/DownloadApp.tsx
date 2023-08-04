import Image from "next/image";

function DownloadApp() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center px-12 lg:px-16 py-6 bg-brand">
            <div className="w-full md:w-6/12 flex flex-col gap-4 xs:gap-6 md:gap-10">
                <h3 className="text-2xl xs:text-4xl md:text-5xl font-semibold">Download the most loved fitness app</h3>
                <p className="text-lg">Start your fitness journey with us!</p>
                <div className="self-center xs:self-start grid auto-cols-max xs:auto-rows-max grid-flow-row xs:grid-flow-col gap-3 xs:gap-6">
                    <div className="flex gap-1 bg-black px-2 py-1 rounded-lg border-2 border-gray-500 cursor-pointer">
                            <Image
                                src="/icons/icons8-google-play.svg"
                                alt="Google Play logo"
                                width={40}
                                height={32}
                                className=""
                            />
                        <div>
                            <div className="text-[0.65rem] font-light">GET IT ON</div>
                            <div className="text-[1.3rem] font-medium leading-5">Google Play</div>
                        </div>
                    </div>
                    <div className="flex gap-1 bg-black px-2 py-1 rounded-lg border-2 border-gray-500 cursor-pointer">
                            <Image
                                src="/icons/icons8-apple-logo.svg"
                                alt="Apple logo"
                                width={40}
                                height={32}
                                className=""
                            />
                        <div>
                            <div className="text-xs font-light">Download on the</div>
                            <div className="text-[1.3rem] font-medium leading-5">App Store</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12 relative min-h-[25rem]">
                <Image 
                    src="/images/iPhone-13-mockup.png"
                    alt="app mockup"
                    width={200}
                    height={400}
                    className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Image 
                    src="/images/iPhone-13-mockup.png"
                    alt="app mockup"
                    width={160}
                    height={300}
                    className="absolute hidden min-[420px]:block top-3/4 left-1/4 -translate-x-1/4 -translate-y-3/4"
                />
                <Image 
                    src="/images/iPhone-13-mockup.png"
                    alt="app mockup"
                    width={160}
                    height={300}
                    className="absolute hidden min-[420px]:block top-3/4 left-3/4 -translate-x-3/4 -translate-y-3/4"
                />
            </div>
        </div>
    );
}

export default DownloadApp;