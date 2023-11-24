import React, { useState } from "react";
import { FaUserCircle, FaQrcode, FaHeart } from 'react-icons/fa';
import '../app/globals.css'
import RootLayout from "../app/layout";


export default function ClientHome() {
  const [points, setPoints] = useState(0);
  const [coins, setCoins] = useState(0);

  // Mocked data for restaurants
  const restaurants = [
    {
      name: "Restaurant A",
      description: "Delicious cuisine from around the world.",
    },
    {
      name: "Restaurant B",
      description: "Authentic local dishes served here.",
    },
    {
      name: "Restaurant C",
      description: "Great ambiance and gourmet food.",
    },
    {
      name: "Restaurant D",
      description: "Family-friendly restaurant with a variety of options.",
    },
  ];

  return (
    <RootLayout>
      <main className="min-h-screen p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">

        <section className="mt-8 bg-indigo-100">
          <div className="container mx-auto flex flex-wrap items-center justify-center">
            {/* User Profile Section */}
            <div className="w-full sm:w-1/2 p-4 sm:flex items-center">
              <div className="bg-indigo-500 rounded-full w-16 h-16 p-4 text-white text-center shadow-lg sm:w-auto sm:mr-4">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="User Avatar"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <div className="mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl font-semibold">Hola, Esteban!</h2>
                <h3 className="text-lg sm:text-xl font-semibold">Tus puntos:</h3>
                <p>{points}</p>
                <h3 className="text-lg sm:text-xl font-semibold">Tus monedas:</h3>
                <p>{coins}</p>
              </div>
            </div>

            {/* Feature Cards Section */}
            <div className="w-full mt-8 sm:w-1/2 sm:mt-0">
              <div className="flex flex-wrap justify-center">
                {[
                  { title: "Compras", color: "bg-indigo-500" },
                  { title: "Locales", color: "bg-indigo-500" },
                  { title: "Monedas", color: "bg-indigo-500" },
                  { title: "Rachas", color: "bg-indigo-500" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                  >
                    <div
                      className={`${feature.color} rounded-lg p-4 text-white text-center shadow-lg`}
                    >
                      <h2 className="text-lg font-semibold">{feature.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 p-4 sm:p-8 md:p-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Mis favoritos</h3>
        </section>
        <section className="mt-8 p-4 sm:p-8 md:p-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">No he visitado</h3>
        </section>
        <section className="mt-8 p-4 sm:p-8 md:p-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">He visitado</h3>
        </section>
        <section className="mt-8 p-4 sm:p-8 md:p-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Retos</h3>
        </section>

      </main>
    </RootLayout>
  );
}
