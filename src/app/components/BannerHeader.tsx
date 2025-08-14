import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";


export function BannerHeader () {
  return (
    
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
     
      <div className="absolute left-0 top-0 -z-10 flex flex-col h-[95vh] w-screen bg-black">
        <Image
          src="/banner.png"
          alt="The Witcher promotional image"
          fill
          className="h-[65vh] object-cover object-top lg:h-[95vh]"
        />
      </div>

    
      <h1 className="mx-6 text-2xl font-bold md:text-4xl lg:text-7xl">
        The Witcher
      </h1>

 
      <p className="mx-6 text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        The Witcher is a fantasy drama television series based on the book series
        of the same name by Polish writer Andrzej Sapkowski.
      </p>

    
      <div className="flex space-x-3 mx-6">
        <button className="flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:text-xl md:px-8 md:py-2.5">
          <PlayIcon className="h-6 w-6 text-black" />
          Play
        </button>

        <button className="flex cursor-pointer items-center gap-x-2 rounded bg-gray-700 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:text-xl">
          <InformationCircleIcon className="h-6 w-6 text-white" />
          More Info
        </button>
      </div>
    </div>
  );
}