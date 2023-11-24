"use client";
import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="text-2xl text-white font-bold">
                    Cupoints
                </a>
                <div className="hidden lg:flex">
                    <a href="/directory" className="text-white px-2">
                        Directorio
                    </a>
                    <a href="#" className="text-white px-2">
                        Servicios
                    </a>
                    <a href="#" className="text-white">
                        Registro
                    </a>
                    <a href="/login" className="text-white px-2">
                        Login
                    </a>
                    <a href="/client-home" className="text-white px-2 underline">
                        Client home
                    </a>
                    <a href="/admin-home" className="text-white underline">
                        Admin home
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

