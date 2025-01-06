"use client";

import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-8">
        {" "}
        {/* Added margin-bottom to create gap */}
        My
        <span className="text-purple"> Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex md:max-w-60 max-w-32 gap-2 transform transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-2xl hover:shadow-purple-600 hover:rotate-3"
            >
              <img
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5 transition-all duration-500 ease-in-out hover:brightness-175 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
