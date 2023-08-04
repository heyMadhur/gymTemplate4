import { spyroClasses } from "../stores/spyroClasses";
import { SpyroClass } from "../types";
import SpyroClassesCard from "./SpyroClassCard";
// import BrandButton from "./BrandButton";

function Classes() {
    return (
        <div className="relative w-full px-6 xs:px-8 sm:px-12 lg:px-16 py-10 texture-bg flex flex-col items-center gap-10" id="classes">
            <h2 className="text-2xl xs:text-3xl lg:text-4xl">Classes</h2>
            <div className="flex flex-col lg:flex-row gap-8 mb-2">
                {
                    spyroClasses.map((spyroClass: SpyroClass) => {
                        return(
                            <SpyroClassesCard key={spyroClass.name} {...spyroClass} />
                        )
                    })
                }
            </div>
            {/* <BrandButton>
                See all
            </BrandButton> */}
        </div>
    );
}
export default Classes;