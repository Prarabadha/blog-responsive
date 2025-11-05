export default function PopularDestination() {
  const destination = [
    {
      image: "/Images/gal1.jpg",
      title: "Paris, France",
      description: "The City of light draw millions of visitors every year",
    },
    {
      image: "/Images/gal3.png",
      title: "Tokyo, Japan",
      description: "The City of light draw millions of visitors every year",
    },
    {
      image: "/Images/gal4.jpg",
      title: "New York, USA",
      description: "The City of light draw millions of visitors every year",
    },
  ];
  return (
    <>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className="text-2xl font-bold mb-3 text-center">
            Popular Destination
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 space-x-3 gap-3">
            {destination.map((item) => (
              <>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={item.image}
                    alt="destinationImage"
                    className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
                  />
                  <h3 className="text-xl font-bold p-2">{item.title}</h3>
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
