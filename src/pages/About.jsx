import React from "react";
import '../app.css';

export const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#F7EBD8] to-[#F1DBBF] min-h-screen py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 lg:p-12">
          {/* Header Section */}
          <h1 className="text-5xl font-extrabold text-center text-[#642011] bg-[#F1DBBF] py-4 px-8 rounded-full mb-6 ">
            About Shaurya
          </h1>
          <p className="text-center text-xl text-[#642011] mb-10">
            The Sports Committee of NIT Raipur - Inspiring excellence through sportsmanship, teamwork, and leadership.
          </p>

          {/* Section 1: Our Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#642011] mb-4">Our Moments in Sports</h2>
            <p className="text-lg text-[#642011] leading-relaxed mb-6">
              Take a look at some of the most exciting moments captured during our sporting events. These images showcase the energy, spirit, and dedication of our athletes and participants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Replace with actual images */}
              {[
                "/Assets/sports10.jpg", 
                "/Assets/sports2.jpg", 
                "/Assets/sports9.jpg", 
                "/Assets/sports4.jpg", 
                "/Assets/sports8.jpg", 
                "/Assets/sports6.jpg"
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
                >
                  <img
                    src={src}
                    alt={`Sport image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-75"></div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Section 2: What We Do */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#642011] mb-4">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bgs p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-[#642011]">Organize Competitions</h3>
                <p className="text-[#642011] mt-2">
                  We host inter-college and intra-college sports competitions throughout the year.
                </p>
              </div>
              <div className="bgs p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-[#642011]">National-Level Participation</h3>
                <p className="text-[#642011] mt-2">
                  We encourage and support our athletes to compete at national sports events.
                </p>
              </div>
              <div className="bgs p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-[#642011]">Sports Training & Coaching</h3>
                <p className="text-[#642011] mt-2">
                  We provide training sessions and coaching for a wide range of sports activities.
                </p>
              </div>
              <div className="bgs p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-[#642011]">Sports Facilities Management</h3>
                <p className="text-[#642011] mt-2">
                  We manage the sports facilities, ensuring all students have access to top-quality equipment.
                </p>
              </div>
              <div className="bgs p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-[#642011]">Collaborations</h3>
                <p className="text-[#642011] mt-2">
                  We collaborate with other institutions to foster a robust sports community.
                </p>
              </div>
              <div className="bgs p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-[#642011]">Event Management</h3>
                <p className="text-[#642011] mt-2">
                  We organize grand sporting events, from annual sports fests to casual inter-hostel games.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Stylish Photo Collection */}


          {/* Section 4: Get Involved */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#642011] mb-4">Get Involved</h2>
            <p className="text-lg text-[#642011] leading-relaxed">
              Whether you're an experienced athlete or just looking to try something new, Shaurya has something for everyone. Get involved in our events, participate in training sessions, and showcase your talent in competitions. Follow us on social media for updates!
            </p>
          </section>

          {/* Section 5: Contact Us */}
          <section>
            <h2 className="text-3xl font-bold text-[#642011] mb-4">Contact Us</h2>
            <p className="text-lg text-[#642011] leading-relaxed mb-6">
              Have questions? Reach out to us via email or visit our sports office on campus.
            </p>
            <div className="bgs p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#642011] mb-2">Email:</h3>
              <p className="text-[#642011]">shaurya@sports.nitrr.ac.in</p>
              <h3 className="text-lg font-semibold text-[#642011] mt-4 mb-2">Address:</h3>
              <p className="text-[#642011]">Shaurya Sports Committee, NIT Raipur, G.E. Road, Raipur - 492010</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
