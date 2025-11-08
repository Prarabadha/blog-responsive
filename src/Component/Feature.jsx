import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: "💼",
      title: "Business Growth",
      desc: "Sed perspiciatis unde omnis natus error voluptatem.",
    },
    {
      icon: "🎯",
      title: "User Research",
      desc: "Sed perspiciatis unde omnis natus error voluptatem.",
    },
    {
      icon: "📊",
      title: "Big Data Solution",
      desc: "Sed perspiciatis unde omnis natus error voluptatem.",
    },
    {
      icon: "📄",
      title: "Product Design",
      desc: "Sed perspiciatis unde omnis natus error voluptatem.",
    },
  ];

  const tags = [
    "Tech Solutions",
    "IT Consulting",
    "Web Solutions",
    "Business Growth",
    "Product Design",
  ];

  return (
    <div className="bg-[#0a0f2c] text-white px-6 md:px-16 py-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Illustration */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/Images/man.png"
            alt="Business Man"
            className="w-[200px] md:w-[300px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
            Explore Our Professional <br /> Travel Solutions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-[#131a3d] p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
            We’re Award Winning <br /> Modern Travel Agency
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis architecto beatae.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#1d2557] text-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                <span className="bg-[#4f46e5] w-3 h-3 rounded-full"></span>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/Images/feature.png"
            alt="Discount Illustration"
            className="w-[250px] md:w-[350px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
