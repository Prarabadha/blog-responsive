import Client from "../Component/Client";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import PopularDestination from "../Component/PopularDestination";
import Services from "../Component/Services";

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/hero.png')" }}
      >
        <div className="absolute bg-black inset-0 bg-opacity-50 flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore the world with Us
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Discover the amazing places at exclusive deals
          </p>
          <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-600 transform transition duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      {/* Destination */}
      <PopularDestination />
      {/* Our Services Section */}
      <Services />
      {/* Client Section */}
      <Client />
      {/* Contact Us Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </>
  );
}
