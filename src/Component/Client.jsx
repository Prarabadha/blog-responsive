// export default function Client() {
//   const destination = [
//     {
//       image: "/Images/me.png",
//       name: "John doe",
//       title: "Paris, France",
//       description: "Nice Exprience , staff is very nice and supportive",
//     },
//     {
//       image: "/Images/me2.png",
//       name: "David johnsan",
//       title: "Bali, Indonasia",
//       description: "Excellent, staff is very nice and supportive",
//     },
//     {
//       image: "/Images/me.png",
//       name: "Sara tailor",
//       title: "Tokyo, Japan",
//       description: "good , staff is very nice and supportive",
//     },
//   ];
//   return (
//     <>
//       <div className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-3 text-center">
//             What Our Client Say
//           </h2>
//           <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-6">
//             {destination.map((item) => (
//               <>
//                 <div className="bg-white shadow-lg rounded-lg cursor-pointer  transform transition duration-300 hover:scale-105 flex flex-col justify-center items-center py-2">
//                   <img
//                     src={item.image}
//                     alt="destinationImage"
//                     className="w-20 h-20 rounded-fulsl "
//                   />
//                   <h3 className="text-xl font-semibold p-2">{item.name}</h3>
//                   <h3 className="p-2 text-gray-400">{item.title}</h3>
//                   <p className="text-gray-400 p-2 italic">{item.description}</p>
//                 </div>
//               </>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Client() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCenterSlidePercentage(100); // 1 card on small screens
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50); // 2 cards on tablets
      } else {
        setCenterSlidePercentage(33.33); // 3 cards on large screens
      }
    };

    handleResize(); // call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const destination = [
    {
      image: "/Images/me.png",
      name: "John Doe",
      title: "Paris, France",
      description: "Nice experience, staff is very nice",
    },
    {
      image: "/Images/me2.png",
      name: "David Johnson",
      title: "Bali, Indonesia",
      description: "Excellent, staff is very nice and supportive",
    },
    {
      image: "/Images/me.png",
      name: "Sara Tailor",
      title: "Tokyo, Japan",
      description: "Good, staff is very nice and supportive",
    },
    {
      image: "/Images/me2.png",
      name: "Emma Watson",
      title: "London, UK",
      description: "Amazing hospitality, love the service!",
    },
  ];

  return (
    <div className=" bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What Our Clients Say
        </h2>

        <div className="max-w-[1200px] mx-auto">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={centerSlidePercentage}
            swipeable={true}
            emulateTouch={true}
            interval={3000}
            autoPlay={true}
          >
            {destination.map((item, index) => (
              <div key={index} className="px-4">
                <div className=" shadow-lg rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 flex flex-col justify-center items-center p-6">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-[50%] w-15 h-15"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
                  <p className="text-gray-400">{item.title}</p>
                  <p className="text-gray-500 italic text-center mt-2">
                    "{item.description}"
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
