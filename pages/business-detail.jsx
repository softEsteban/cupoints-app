import React from "react";
import RootLayout from "../app/layout";
import { useRouter } from "next/router";
import { FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { LuFacebook } from 'react-icons/lu';
import { PiTiktokLogoBold } from 'react-icons/pi';

export default function BusinessDetail() {
  const router = useRouter();
  const { name, image, description, category } = router.query;



  if (!name) {
    return <p>Cargando...</p>;
  }

  // Sample data for opening hours, payment methods, location, menu, reviews, and user information
  const openingHours = "Lunes-Viernes: 9 AM - 9 PM, Sábado-Domingo: 10 AM - 8 PM";
  const paymentMethods = ["Tarjetas", "Efectivo", "Nequi"];
  const location = "Manizales, Colombia";
  const menu = ["Producto 1", "Producto 2", "Producto 3"];
  const reviews = [
    { user: "Usuario 1", rating: 5, comment: "Great place!" },
    { user: "Usuario 2", rating: 4, comment: "Good food." },
  ];
  const isAuthenticated = true;
  const visited = true;
  const points = 100;

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="max-w-md bg-white rounded-lg shadow-lg">
          <div className="relative">
            <img src={image} alt={name} className="w-full rounded-t-lg" />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <span className="px-2 py-1 mb-2 text-sm text-white bg-blue-500 rounded-full">
              {category}
            </span>
            <p className="text-gray-600">
              {description && description.length > 0 ? description : "Description"}
            </p>

            {isAuthenticated && (
              <div className="mt-4">
              <h3 className="text-xl font-semibold">User Information</h3>
              <div className="bg-yellow-200 p-2 rounded-md">
                <p>Visited: {visited ? "Yes" : "No"}</p>
                <p>Points Collected: {points}</p>
              </div>
            </div>
            )}

            {/* Additional business details */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Disponibilidad</h3>
              <p>{openingHours}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Métodos de pago</h3>
              <div className="flex flex-wrap">
                {paymentMethods.map((method, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 mr-2 mt-2 text-sm text-white bg-green-500 rounded-full"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Ubicación</h3>
              <p>{location}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Menú</h3>
              <ul>
                {menu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Comentarios</h3>
              {reviews.map((review, index) => (
                <div key={index} className="mt-2">
                  <p>Usuario: {review.user}</p>
                  <p>Puntuación: {review.rating}</p>
                  <p>Comentario: {review.comment}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">  Redes sociales</h3>
              <div className="flex space-x-2">
                <FiGlobe size="30px" />
                <LuFacebook size="30px" />
                <FaInstagram size="30px" />
                <PiTiktokLogoBold size="30px" />
                <FaWhatsapp size="30px" />
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
