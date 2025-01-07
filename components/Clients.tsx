"use client";

import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-8 text-center">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="flex items-center justify-center transform transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-2xl hover:shadow-purple-600 hover:rotate-3 animate__animated animate__fadeInUp"
              style={{
                animationDelay: `${index * 100}ms`, // Stagger the animations for each company
              }}
            >
              <img
                src={company.img}
                alt={company.name}
                className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20 transition-all duration-500 ease-in-out hover:brightness-175 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
