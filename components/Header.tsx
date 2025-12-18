
import React from 'react';

const CubeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <CubeIcon />
            <h1 className="text-2xl font-bold text-slate-800">
              AI Governance Dashboard
            </h1>
          </div>
          <p className="hidden md:block text-slate-500 font-medium">Powered by GEZy OS & Gemini</p>
        </div>
      </div>
    </header>
  );
};
