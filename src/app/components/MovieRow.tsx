import Image from "next/image";

interface MovieRowProps {
  sectionTitle: string;
}

type MovieCardProps = {
  index:number;
};
const MovieCard = ({index}: MovieCardProps) => {
  return (
    <div key={index} className="group relative h-28 min-w-[200px] transition duration-200 ease-in hover:scale-110 md:h-40 md:min-w-[300px] lg:h-60 lg:min-w-[400px]">
      <Image
        src={`/item_${index}.png`}
        fill={true}
        alt={`Item ${index}`}
        className="rounded object-cover"
      />
    </div>
  );
}

export function MovieRow({ sectionTitle}: MovieRowProps) {
  return <div className="flex-col space-y-4">
    <div className="flex mx-6 my-4">
      <h2 className="inline-flex text-center text-2xl font-bold">{sectionTitle}</h2>
    </div>
    <div className="flex flex-wrap p-6 gap-4">
      {[1, 2, 3, 4, 5].map((index) => (
         <MovieCard key={index} index={index} />
      ))}
    </div>
  </div>;
  
}
