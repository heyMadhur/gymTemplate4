import Image from "next/image";
import { categories } from "../stores/categories";
import { Category } from "../types";
import Lifestyle from "./Lifestyle";

function FindYourFit() {
  return (
    <div className="relative">
      <div className="px-12 sm:px-16">
        <div className="mt-10 xs:mt-12 mb-16">
          <h2 className="text-center text-2xl xs:text-3xl font-semibold mb-10">
            Find what moves you
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            {categories.map((category: Category) => {
              return (
                <CategoryCard
                  key={category.name}
                  name={category.name}
                  imageSrc={category.imageSrc}
                  description={category.description}
                />
              );
            })}
          </div>
        </div>
        <Lifestyle />
      </div>
      <div className="absolute w-3/12 h-20 bg-brand/10 bottom-[12%] right-0"></div>
      <div className="absolute w-7/12 h-20 bg-brand/10 bottom-[2%] right-0"></div>
    </div>
  );
}

function CategoryCard(category: Category) {
  return (
    <div className="relative w-auto h-80 xs:h-96 md:h-96 flex-[1] hover:flex-[1.5] duration-300 group rounded-ss-[3.5rem] hover:rounded-ss-[5rem] md:hover:border-t border-brand/50 overflow-hidden">
      <Image
        src={category.imageSrc}
        alt={category.name}
        width={400}
        height={400}
        className="w-full h-80 xs:h-96 md:h-full object-cover md:object-center lg:object-top brightness-[0.8] rounded-ss-[3.5rem] group-hover:rounded-ss-[5rem] duration-300"
      />
      <div className="absolute w-full bottom-0 px-2 pb-2 pt-10 bg-gradient-to-b from-primaryBg/0 to-primaryBg/95 text-white/80 flex items-end gap-3">
        <div className="text-lg pb-4 whitespace-nowrap group-hover:whitespace-normal">
          {category.name}
        </div>
        <div className="hidden xs:block text-sm overflow-hidden">
          <p className=" md:opacity-0 md:translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 duration-1000">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FindYourFit;
