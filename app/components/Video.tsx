import Image from "next/image";

function Video() {
    return (
        <div className="w-full p-6 xs:p-10 sm:p-12 md:p-14 lg:p-16 flex items-center justify-center" id="video">
            <div className="relative w-full sm:w-10/12 lg:w-9/12 bg-gradient-to-t from-black/20 to-black/20 cursor-pointer">
                <Image 
                    src="/images/videoSection/video-preview.png"
                    alt="video preview"
                    width={600}
                    height={400}
                    className="w-full aspect-video rounded-sm"
                />
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11%] aspect-square rounded-full bg-white/25"></div>
                <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8%] aspect-square rounded-full bg-white"></div>
                <Image 
                    src="/icons/play.svg"
                    alt="play video"
                    width={100}
                    height={100}
                    className="absolute z-30 top-1/2 left-[50.4%] -translate-x-1/2 -translate-y-1/2 w-[5.5%] aspect-square h-auto"
                />
            </div>
        </div>
    );
}

export default Video;