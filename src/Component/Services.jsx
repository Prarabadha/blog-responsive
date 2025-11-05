import { FaHotel, FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { MdFastfood } from "react-icons/md";

export default function Services() {
  const services = [
    {
      icon: <MdOutlineFlight className="text-blue-400 text-2xl font-medium" />,
      title: "Flight Booking",
      description: "The City of light draw millions of visitors every year",
    },
    {
      icon: <FaHotel className="text-blue-400 text-2xl font-medium" />,
      title: "Hotel Booking",
      description: "The City of light draw millions of visitors every year",
    },
    {
      icon: <FaUmbrellaBeach className="text-blue-400 text-2xl font-medium" />,
      title: "Beach Tour",
      description: "The City of light draw millions of visitors every year",
    },
    {
      icon: <MdFastfood className="text-blue-400 text-2xl font-medium" />,
      title: "Food Service",
      description: "The City of light draw millions of visitors every year",
    },
  ];
  return (
    <>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className="text-2xl font-bold mb-3 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 space-x-3 gap-3">
            {services.map((item) => (
              <>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer p-4 transform transition duration-300 hover:scale-105">
                  <div className="flex justify-center items-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold p-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 p-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
