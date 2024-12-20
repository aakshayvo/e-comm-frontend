import Image from "next/image";
import { SlideProps } from "@/interfaces/Props";

const SlideComponent: React.FC<SlideProps> = ({ img }) => {
  return (
    <section className="outline-none border-none relative ">
      <section className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"></section>
      <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
        <Image
          className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover"
          src={img}
          alt={img}
          fill
          placeholder="blur"
          blurDataURL={img}
        />
      </section>
    </section>
  );
};

export default SlideComponent;
