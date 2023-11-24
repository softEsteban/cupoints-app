"use client";

import { useState } from "react";

const RecommendBtn = () => {
    const [localBusiness, setLocalBusiness] = useState({});

    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3000/api/businesses/random');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            setLocalBusiness(data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleClick() {
        console.log('increment like count');
    }

    return (
        <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-white p-6">
            <div className="text-center">
                <div className="sm:flex sm:flex-col sm:justify-between items-center relative z-10">
                    <div className="sm:w-3/4">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                            Te recomendamos algún lugar con base en tus experiencias
                        </h2>
                        <p className="text-lg mb-4">Prueba algo diferente</p>
                    </div>
                    <div className="sm:w-1/4 text-center mt-4 sm:mt-0">
                        <button onClick={handleClick}
                            className="bg-white text-indigo-800 px-4 py-2 rounded-md font-semibold hover:bg-indigo-200"
                        >
                            Explorar
                        </button>


                    </div>
                </div>
            </div>
            <button onClick={fetchData}
            >
                Test
            </button>
        </div>
    );
};

export default RecommendBtn;
