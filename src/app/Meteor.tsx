import React from 'react';
import { Meteors } from '../components/ui/meteors';

export function Meteor() {
  return (
    <div className="">
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            These are my repos with my knowledge based projects
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
           If you want to see more of my projects, you can visit my GitHub profile. 
           <br/>
           <a href="https://github.com/Sanjai-Shaarugesh" target='_blank'>https://github.com/Sanjai-Shaarugesh</a>
           
          </p>
          
          <a href="https://github.com/Sanjai-Shaarugesh" target='_blank'>
            <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button>
          </a>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
