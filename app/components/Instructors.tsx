import { instructors } from "../stores/instructors";
import { InstructorType } from "../types";
import Image from "next/image";
import BrandButton from "./BrandButton";

function Instructors() {
    return (
        <div className="py-16 px-12 sm:px-16 relative" id="instructors">
            <div className="absolute w-full h-5 left-0 top-0 bg-gradient-to-b from-[rgb(24,43,43)] to-primaryBg"></div>
            <div className="flex flex-col items-center gap-10">
                <h2 className="text-2xl xs:text-3xl font-semibold">Instructors</h2>
                <div className="w-full flex flex-col xs:flex-row gap-5 md:gap-6 lg:gap-10">
                    {instructors.map((instructor : InstructorType) => {
                        return(
                            <Instructor key={instructor.name} {...instructor} />
                        )
                    })}
                </div>
                {/* <BrandButton>
                    All instructors
                </BrandButton> */}
            </div>
            <div className="absolute w-3/12 h-12 bg-brand/10 bottom-[34%] left-0"></div>
            <div className="absolute w-7/12 h-12 bg-brand/10 bottom-[24%] left-0"></div>
        </div>
    );
}

function Instructor(instructor : InstructorType){
    return(
        <div className="w-full sm:w-10/12 flex flex-col items-center">
            <div className="w-full flex justify-center mb-4 border border-transparent hover:border-brand rounded-sm">
                <Image 
                    src={instructor.imageSrc}
                    alt={instructor.name}
                    width={500}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover rounded-sm z-20"
                />
            </div>
            <div className="mb-1 text-center">
                {instructor.name}
            </div>
            <div className="text-sm font-light mb-3 text-center">
                {instructor.role}
            </div>
        </div>
    )
}

export default Instructors;