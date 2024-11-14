"use client";

import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="bg-white shadow-lg rounded-lg p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left side: Text Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-orange-600 text-lg font-semibold mb-2">
            How It Started
          </h2>
          <h1 className="text-gray-900 text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Our Dream is Global Learning Transformation
          </h1>
          <p className="text-gray-600 text-lg">
            Our platform was founded by dedicated individuals with a passion for
            lifelong learning and education. Our vision is to create a digital
            hub of accessible knowledge for everyone, empowering learners
            around the globe. With a mission to drive transformative learning,
            we’ve launched a community of enthusiastic learners and experts,
            all connected by a shared desire to grow and explore.
          </p>
        </div>

        {/* Right side: Statistics */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">3.5</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">23</h3>
            <p className="text-gray-600">Project Challenges</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">830+</h3>
            <p className="text-gray-600">Positive Reviews</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">100K</h3>
            <p className="text-gray-600">Trusted Learners</p>
          </div>
        </div>
      </div>
    </div>
  );
}