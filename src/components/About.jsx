import Link from "next/link";
import React from "react";
import Image from "next/image";



const galleryPhotos = [
  { id: 1, src: '/gallery/photo1.jpg', alt: 'Tech Event 1' },
  { id: 2, src: '/gallery/photo2.jpg', alt: 'Workshop Session' },
  { id: 3, src: '/gallery/photo3.jpg', alt: 'Hackathon' },
  { id: 4, src: '/gallery/photo4.jpg', alt: 'Guest Lecture' },
  { id: 5, src: '/gallery/photo5.jpg', alt: 'Award Ceremony' },
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const totalSlides = galleryPhotos.length;

  // Auto-advance slides
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying, goToNext]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrev();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="relative overflow-hidden rounded-xl shadow-2xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Image */}
        <div className="relative h-72 sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          {galleryPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover w-full h-full"
                priority={index === currentIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors z-10"
          aria-label="Previous photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors z-10"
          aria-label="Next photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {galleryPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#43fcff] w-8' : 'bg-white/50 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

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
          
          {/* Gallery Section */}
          <div className="w-full flex flex-col items-center py-12 md:py-16 lg:py-20">
            <h2 className="text-[#43fcff] font-bold text-3xl md:text-5xl text-center tracking-wide mb-8 font-['Play']">
              OUR GALLERY
            </h2>
            <div className="w-full max-w-6xl px-4 sm:px-6">
              <GallerySlider />
            </div>
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
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-2 sm:px-4 md:px-8 lg:px-12 py-4 md:py-8">
      <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
        <Image
          src={"/techtopailog.png"}
          width={400}
          height={400}
          alt="Techtopia Logo"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-[#43fcff] font-bold mb-3 tracking-wide">ABOUT TECHTOPIA</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-3">
          Welcome to the ITCS Departmental Fest - a vibrant celebration of innovation, creativity, and technical brilliance! Our annual fest brings together the brightest minds for an exciting lineup of events that include code battles, technical games, seminars, and hands-on opportunities to build and showcase projects. Whether you&apos;re here to compete, learn, or simply have fun, our fest offers something for everyone. From thrilling coding challenges to thought-provoking seminars and fun-filled games and entertainment, it&apos;s the perfect platform to demonstrate your skills, explore new ideas, and connect with like-minded tech enthusiasts.
        </p>
        <div className="w-full text-center my-4">
          <span className="text-[#43fcff] text-base sm:text-lg md:text-xl font-bold block mb-1">
            Unleash your potential. Join us for TechTopia 2025!
          </span>
          <span className="text-gray-300 text-xs sm:text-sm md:text-base block font-medium">
            Where innovation meets inspiration.
          </span>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-[#43fcff] text-lg sm:text-xl md:text-2xl text-center md:text-left font-bold mb-2">
            WE WOULD LIKE TO INVITE YOU ON A JOURNEY THAT IS FULL OF MESMERIZING STORIES AND ARTIFACTS!
          </h2>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-gray-200 pl-4 space-y-1">
            <li>Young brains will get to showcase their skills and compete with others to find the best.</li>
            <li>Create awareness about IT and career prospects.</li>
            <li>To offer internships and job opportunities for the students.</li>
            <li>Inclusion of workshops and fun games.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const AboutCollege = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-2 sm:px-4 md:px-8 lg:px-16 py-8 md:py-14">
      <div className="w-full md:w-2/5 flex items-center justify-center mb-6 md:mb-0">
        <Image
          src={"/patkar_logo.png"}
          width={400}
          height={400}
          alt="Patkar-Varde College Logo"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
        />
      </div>
      <div className="w-full md:flex-1 flex flex-col justify-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#43fcff] font-bold mb-4 tracking-wide text-center md:text-left">ABOUT COLLEGE</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#43fcff] font-semibold mb-3 text-center md:text-left">Patkar-Varde College</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-loose mb-5 text-left">
          Chikitsak Samuha&apos;s Patkar Varde College is affiliated with the University of Mumbai and is located in Mumbai&apos;s Western suburbs. It has achieved an &apos;A+&apos; NAAC accreditation with an institutional score of 3.53, ISO certification, and numerous recognitions such as India&apos;s Education Excellence Award and the best College Award by the University of Mumbai. Ranked 40th in the Education World India Autonomous College Ranking and 13th in Maharashtra, our college is committed to providing affordable quality education and fostering academic excellence.
        </p>
        <div className="w-full">
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-loose text-justify mb-4">
            With a vision to empower students through experiential learning and innovation, Mrs. Namrata Kawale-Shinde, Chief Coordinator, Faculty of Technology and Coordinator of the Information Technology department, along with Mrs. Karishma Jain, Coordinator of the Computer Science department at Patkar-Varde College, took a pioneering step in 2025 by launching Techtopia—an intercollegiate technical fest. This initiative was designed to provide a vibrant platform for students to explore their creativity, sharpen technical acumen, and build leadership, teamwork, and organizational skills. Under their able guidance, Techtopia quickly gained recognition for its unique blend of tech competitions, workshops, project showcases, and interactive sessions that bridge the gap between academic learning and industry trends. The fest has become a hub for budding technocrats to network, collaborate, and gain exposure to real-world challenges, all within an atmosphere of healthy competition and spirited innovation. Their commitment to excellence and student development has made Techtopia a milestone event in the college’s academic calendar, setting new standards for student-led initiatives in the field of Information Technology and Computer Science.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-loose mb-3 text-left">
            The college has its alumni placed in various good positions, who have brought laurels by shining in all walks of life like administrative and foreign services, defense, education, art, film, theatre, sports, dance, music, I.T., media and so on.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-loose text-left">
            Simple, hard-working students imbibed with a sense of educational attainment, is our true strength, reminding all of us of our vision statement,
            <span className="italic"> “Purnata Gauravay” (पूर्णता गौरवाय)</span>.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.316102862963!2d72.8367!3d19.1674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c1d1e1e1e1%3A0x1e3e1e1e1e1e1e1e!2sPatkar-Varde%20College!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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


