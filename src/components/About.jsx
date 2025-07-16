import Link from "next/link";
import React from "react";
import Image from "next/image";
import TechFestAnimatedSVG from "../svgs/TechFestAnimatedSVG";





const About = () => {
  return (
    <>
      <div className="w-full h-auto border-[px] overflow-hidde ease-in-out duration-300 px-4 sm:px-6 lg:px-8 mx-auto">
        <h3 className="text-[#43fcff] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-['Play'] tracking-wide">
          About Us
        </h3>
        <div className="w-full h-auro border-[px] overflow-hidden flex flex-col gap-2 ease-in-out duration-300">
          <AboutTechtopia />
          
          {/* Events Button */}
          <div className="w-full flex justify-center my-12">
            <a 
              href="/events"
              className="w-full max-w-[400px] px-8 py-4 bg-[#43fcff] text-black font-bold rounded-full shadow-lg hover:bg-[#53c28b] transition-colors duration-300 text-lg tracking-wide text-center"
            >
              Check out Events
            </a>
          </div>


          <AboutCollege />
          
          {/* Tech Fest Animated SVG Section */}
          <div className="w-full flex flex-col items-center py-12 md:py-16 lg:py-20">
            <h2 className="text-[#43fcff] font-bold text-3xl md:text-5xl text-center tracking-wide mb-8 font-['Play']">
              CELEBRATING TECHNOLOGY & TEACHING
            </h2>
            <TechFestAnimatedSVG />
            <p className="mt-6 text-center text-lg text-[#43fcff]/80 max-w-xl">
              Experience the fusion of <span className="font-bold">technology</span> and <span className="font-bold">education</span> at TechTopia Fest! Where innovation, learning, and celebration come together.
            </p>
          </div>

          <EventVenue />
        </div>
      </div>
    </>
  )
}

export default About;

export const AboutTechtopia = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
      <div className="w-full md:w-2/5 flex items-center justify-center mb-6 md:mb-0">
        <Image
          src={"/techtopailog.png"}
          width={500}
          height={500}
          alt="Techtopia Logo"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#43fcff] font-bold tracking-wide text-center md:text-left">
          ABOUT TECHTOPIA 2025
        </h1>
        
        <div className="space-y-4">
          <p className="text-base sm:text-lg font-sans text-gray-200 leading-relaxed">
            Welcome to the ITCS Departmental Fest - a vibrant celebration of innovation, creativity, and technical brilliance! Our annual fest brings together the brightest minds for an exciting lineup of events that include code battles, technical games, seminars, and hands-on opportunities to build and showcase projects.
          </p>
          
          <p className="text-base sm:text-lg font-sans text-gray-200 leading-relaxed">
            Whether you&apos;re here to compete, learn, or simply have fun, our fest offers something for everyone. From thrilling coding challenges to thought-provoking seminars and fun-filled games and entertainment, it&apos;s the perfect platform to demonstrate your skills, explore new ideas, and connect with like-minded tech enthusiasts.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl sm:text-2xl text-[#43fcff] font-bold mb-4 text-center">
            Our Vision & Mission
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#43fcff] mr-2">•</span>
              <span className="text-base sm:text-lg font-sans text-gray-200">
                Young minds showcasing their skills in healthy competition
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#43fcff] mr-2">•</span>
              <span className="text-base sm:text-lg font-sans text-gray-200">
                Creating awareness about IT career prospects and opportunities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#43fcff] mr-2">•</span>
              <span className="text-base sm:text-lg font-sans text-gray-200">
                Facilitating internships and job opportunities for students
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#43fcff] mr-2">•</span>
              <span className="text-base sm:text-lg font-sans text-gray-200">
                Hosting engaging workshops and fun technical games
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-6">
          <p className="text-[#43fcff] text-lg sm:text-xl font-bold mb-2">
            Unleash Your Potential at TechTopia 2025!
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Where innovation meets inspiration
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutCollege = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="w-full md:w-2/5 flex items-center justify-center mb-8 md:mb-0">
        <Image
          src={"/patkar_logo.png"}
          width={500}
          height={500}
          alt="Patkar-Varde College Logo"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#43fcff] font-bold tracking-wide text-center md:text-left">
            ABOUT COLLEGE
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#43fcff] font-semibold mt-2 text-center md:text-left">
            Patkar-Varde College
          </h2>
        </div>

        <div className="space-y-5">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            Chikitsak Samuha&apos;s Patkar Varde College is affiliated with the University of Mumbai and is located in Mumbai&apos;s Western suburbs. It has achieved an &apos;A+&apos; NAAC accreditation with an institutional score of 3.53, ISO certification, and numerous recognitions such as India&apos;s Education Excellence Award and the best College Award by the University of Mumbai. Ranked 40th in the Education World India Autonomous College Ranking and 13th in Maharashtra, our college is committed to providing affordable quality education and fostering academic excellence.
          </p>
          
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            With a vision to empower students through experiential learning and innovation, Mrs. Namrata Kawale-Shinde, Chief Coordinator, Faculty of Technology and Coordinator of the Information Technology department, along with Mrs. Karishma Jain, Coordinator of the Computer Science department at Patkar-Varde College, took a pioneering step in 2025 by launching Techtopia—an intercollegiate technical fest. This initiative was designed to provide a vibrant platform for students to explore their creativity, sharpen technical acumen, and build leadership, teamwork, and organizational skills.
          </p>
          
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            The college has its alumni placed in various good positions, who have brought laurels by shining in all walks of life like administrative and foreign services, defense, education, art, film, theatre, sports, dance, music, I.T., media and so on.
          </p>
          
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic">
            Simple, hard-working students imbibed with a sense of educational attainment, is our true strength, reminding all of us of our vision statement, <span className="not-italic font-medium">&quot;Purnata Gauravay&quot;</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export const EventVenue = () => {
  return (
    <div className="w-full py-12 bg-gray-900/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Venue Header */}
        <h1 className="mb-8 text-3xl font-bold text-center text-[#43fcff] md:text-4xl lg:text-5xl">
          EVENT VENUE
        </h1>
        
        {/* Venue Info */}
        <div className="flex flex-col items-center w-full gap-3 p-4 mb-10 rounded-lg sm:flex-row sm:justify-between bg-gray-800/80 backdrop-blur-sm sm:px-6">
          <div className="text-center sm:text-left">
            <span className="text-lg font-medium text-gray-200 md:text-xl">
              Patkar-Varde College
            </span>
          </div>
          <div className="w-full h-px my-2 bg-gray-600 sm:hidden"></div>
          <div className="text-center sm:text-right">
            <span className="text-lg font-medium text-[#43fcff] md:text-xl">
              S. V. Road, Goregaon (West), Mumbai - 400104
            </span>
          </div>
        </div>
        
        {/* Image and Map Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* College Images */}
          <div className="space-y-4">
            <div className="relative w-full overflow-hidden rounded-xl shadow-xl aspect-video">
              <Image
                src={"/patkar_college.jpg"}
                alt="Patkar College Building"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-xl shadow-xl aspect-video">
              <Image
                src={"/college_gate.jpg"}
                alt="Patkar College Main Gate"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Google Map */}
          <div className="w-full h-[50vh] md:h-full rounded-xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.316102862963!2d72.8456039!3d19.1673701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b78f43408a6b%3A0xa387a49687e89612!2sChikitsak%20Samuha%27s%20Sir%20Sitaram%20%26%20Lady%20Shantabai!5e0!3m2!1sen!2sin!4v1694761386000!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patkar-Varde College Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


