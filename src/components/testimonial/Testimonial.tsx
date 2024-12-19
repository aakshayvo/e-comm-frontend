import Image from "next/image";
import {
  section_heading,
  testimonial_section,
  discount_section,
} from "./data/data";

const Testimonial = () => {
  const {
    user_icon,
    user_name,
    user_alt,
    user_pro,
    user_thought,
    user_favIcon,
    favIcon_alt,
  } = testimonial_section;

  const { discount_percentage, collection_type, collection_startingProce } =
    discount_section;

  return (
    <section className="container py-16">
      <h2 className="font-medium text-2xl pb-4">{section_heading}</h2>
      <section className="grid grid-cols-1 lg:grid-cols-[20%,80%] gap-4">
        {/* Left Section */}
        <aside className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
          <div className="text-center flex flex-col items-center gap-1">
            <Image
              className="rounded-full h-auto w-auto"
              src={user_icon}
              width={80}
              height={80}
              alt={user_alt}
            />
            <h2 className="text-gray-500 font-black text-[20px]">
              {user_name}
            </h2>
            <p className="max-w-[200px] text-gray-500">{user_pro}</p>
            <Image
              className="py-2 inline-block h-8 w-8"
              src={user_favIcon}
              width={0}
              height={0}
              alt={favIcon_alt}
            />
            <p className="max-w-[200px] text-gray-500">{user_thought}</p>
          </div>
        </aside>

        {/* Right Section */}
        <aside className="bg-red-600 bg-cover bg-[url(/cta-banner.jpg)] h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-blackish text-black p-2 rounded-md">
              {discount_percentage}
            </button>
            <h2 className="font-extrabold text-2xl text-[#272727]">
              {collection_type}
            </h2>
            <p className="text-gray-500 text-[20px]">
              {collection_startingProce} <b>Shop Now</b>
            </p>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Testimonial;
