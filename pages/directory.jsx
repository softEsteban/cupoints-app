import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import '../app/globals.css';
import RootLayout from "../app/layout";
import Link from "next/link";

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [localBusinesses, setLocalBusinesses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/businesses');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLocalBusinesses(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const categories = Array.from(new Set(localBusinesses.map(business => business.category)));

  // Function to filter businesses based on the search query
  const filteredBusinesses = localBusinesses.filter(business =>
    business.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-3xl font-semibold mb-6">Directorio de negocios locales</h1>
        <p className="border border-blue-500 text-blue-500 px-2 py-1 rounded-full inline-block">Manizales</p>

        {/* Search bar */}
        <div className="mb-6 py-6">
          <div className="flex items-center border rounded-full p-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Busca negocios locales"
              className="w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* List of businesses grouped by categories */}
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mt-4 mb-2 py-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredBusinesses
                .filter(business => business.category === category)
                .map((business, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded shadow-lg">
                    <h3 className="text-2xl font-semibold py-4">{business.name}</h3>
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full rounded thumbnail-image"
                    />
                    <p className="text-gray-600">{business.description}</p>
                    {business.urls && business.urls.length > 0 ? (
                      <a
                        target="_blank"
                        href={business.urls[0].link} // Assuming you want to link to the first URL
                        className="mt-2 text-blue-500 hover:underline block"
                      >
                        {business.urls[0].label}
                      </a>
                    ) : (
                      <></>
                    )}
                    <Link
                      href={{
                        pathname: 'business-detail',
                        query:  business 
                      }}
                    >
                      Ver perfil

                    </ Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
}
