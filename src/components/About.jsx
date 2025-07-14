import Link from "next/link";
import React from "react";
import Image from "next/image";



const galleryPhotos = [
  { id: 1, src: '/gallery/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/gallery/photo2.jpg', alt: 'Photo 2' },
  { id: 3, src: '/gallery/photo3.jpg', alt: 'Photo 3' },
  { id: 4, src: '/gallery/photo4.jpg', alt: 'Photo 4' },
  { id: 5, src: '/gallery/photo5.jpg', alt: 'Photo 5' },
];

const GallerySlider = () => {
  const [index, setIndex] = React.useState(0);
  const total = galleryPhotos.length;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Calculate indexes for left and right preview images
  const leftIdx = (index === 0 ? total - 1 : index - 1);
  const rightIdx = (index === total - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full flex items-center justify-center min-h-[350px] md:min-h-[450px]">
      {/* Coverflow Images with drag/swipe support */}
      <div
        className="relative flex flex-col sm:flex-row items-center justify-center w-full max-w-full sm:w-[90vw] sm:max-w-[1100px] h-auto min-h-[220px] md:min-h-[450px] select-none cursor-pointer px-2 sm:px-0"
        onMouseDown={(e) => {
          e.preventDefault();
          const startX = e.clientX;
          let moved = false;
          const onMouseMove = (moveEvent) => {
            moved = true;
          };
          const onMouseUp = (upEvent) => {
            if (moved) {
              const diff = upEvent.clientX - startX;
              if (diff > 60) setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
              else if (diff < -60) setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
            }
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          };
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
        onTouchStart={(e) => {
          const startX = e.touches[0].clientX;
          let moved = false;
          const onTouchMove = (moveEvent) => {
            moved = true;
          };
          const onTouchEnd = (endEvent) => {
            if (moved) {
              const endX = endEvent.changedTouches[0].clientX;
              const diff = endX - startX;
              if (diff > 60) setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
              else if (diff < -60) setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
            }
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
          };
          window.addEventListener('touchmove', onTouchMove);
          window.addEventListener('touchend', onTouchEnd);
        }}
      >
        {/* Left (previous) image */}
        <Image
          src={galleryPhotos[leftIdx].src}
          alt={galleryPhotos[leftIdx].alt}
          width={320}
          height={260}
          className="absolute left-[10%] sm:left-1/4 md:left-[18%] top-1/2 -translate-y-1/2 w-[120px] h-[90px] sm:w-[180px] sm:h-[130px] md:w-[320px] md:h-[260px] rounded-lg shadow-lg object-cover border border-[#43fcff]/20 opacity-70 scale-90 z-10 transition-all duration-500"
          style={{ transform: 'translateX(-60%) scale(0.88) rotateY(20deg)' }}
        />
        {/* Center (active) image */}
        <Image
          src={galleryPhotos[index].src}
          alt={galleryPhotos[index].alt}
          width={600}
          height={420}
          className="relative z-20 w-[220px] h-[160px] sm:w-[320px] sm:h-[220px] md:w-[600px] md:h-[420px] rounded-xl shadow-2xl object-cover border-2 border-[#43fcff] scale-105 transition-all duration-500"
          style={{ boxShadow: '0 10px 50px #43fcff33' }}
        />
        {/* Right (next) image */}
        <Image
          src={galleryPhotos[rightIdx].src}
          alt={galleryPhotos[rightIdx].alt}
          width={320}
          height={260}
          className="absolute right-[10%] sm:right-1/4 md:right-[18%] top-1/2 -translate-y-1/2 w-[120px] h-[90px] sm:w-[180px] sm:h-[130px] md:w-[320px] md:h-[260px] rounded-lg shadow-lg object-cover border border-[#43fcff]/20 opacity-70 scale-90 z-10 transition-all duration-500"
          style={{ transform: 'translateX(60%) scale(0.88) rotateY(-20deg)' }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="w-full h-auto border-[px] overflow-hidde ease-in-out duration-300">
        <h3 className="text-[#43fcff]/80 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          About us
        </h3>
        <div className="w-full h-auro border-[px] overflow-hidden flex flex-col gap-2 ease-in-out duration-300">
          <AboutTechtopia />
          
          {/* Gallery Section */}
          <div className="w-full flex flex-col items-center mt-12 mb-6">
            <h2 className="text-[#43fcff] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-wide mb-8" style={{ fontFamily: 'Play, sans-serif', letterSpacing: '0.08em' }}>
              OUR GALLERY
            </h2>
            {/* TODO: Insert event photos here. Example below: */}
            <GallerySlider />
          </div>


          <AboutCollege />
          <EventVenue />
        </div>
      </div>
    </>
  )
}

export default About;

export const AboutTechtopia = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-4 md:gap-0">
        <div className="w-full h-auto flex flex-col md:flex-row gap-6 md:gap-2 justify-center px-2 sm:px-4">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center mb-8">
            <Image
              src={"/techtopailog.png"}
              width={500}
              height={500}
              alt="Techtopia Logo"
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mr-1 ease-in-out duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-2 sm:px-4 md:px-8 lg:px-12">
            <h1 className="text-2xl md:text-3xl text-[#43fcff]">
              ABOUT Techtopia
            </h1>
            <div className="text-[15px] md:text-[18px] text-justify ease-in-out duration-500">
              <span>
              Welcome to the ITCS Departmental Fest - a vibrant celebration of innovation, creativity, and technical brilliance! Our annual fest brings together the brightest minds for an exciting lineup of events that include code battles, 
              technical games, seminars, and hands-on opportunities to build and showcase projects. Whether you&apos;re here to compete, learn, or simply have fun, our fest offers something for everyone. 
              From thrilling coding challenges to thought-provoking seminars and fun-filled games and entertainment, it&apos;s the perfect platform to demonstrate your skills, explore new ideas, 
              and connect with like-minded tech enthusiasts.
              </span>
            </div>
            <div className="w-full text-center mt-2 mb-6">
              <span className="text-[#43fcff] text-lg md:text-2xl font-bold block">
                Unleash your potential. Join us for TechTopia 2025!
              </span>
              <span className="text-white text-base md:text-lg block mt-2 font-medium italic">
                Where innovation meets inspiration.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-center gap-2 px-2 sm:px-6 md:px-10 md:px-20">
          <span className="text-[#53c2be] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center ease-in-out duration-500">
            WE WOULD LIKE TO INVITE YOU ON A JOURNEY THAT IS FULL OF MESMERIZING
            STORIES AND ARTIFACTS !
          </span>
          <ul className="list-disc list-outside text-[15px] md:text-[18px] px-10 ease-in-out duration-500">
            <li>
              Young brains will get to showcase their skills and compete with
              others to find the best.
            </li>
            <li>Create awareness about IT and career prospects.</li>
            <li>
              To offer internships and job opportunities for the students.
            </li>
            <li>Inclusion of workshops and fun games.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const AboutCollege = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-1"></div>
      <div className="w-full h-auto border-[px] flex flex-col md:flex-row gap-2 justify-center">
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center mb-8 sm:mb-12">
          <Image
            src={"/patkar_logo.png"}
            width={500}
            height={500}
            alt="Patkar-Varde College Logo"
            className="w-[250px] h-auto sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mr-1 ease-in-out duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto border-[px] flex flex-col justify-center px-2 sm:px-4 md:px-8 space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-3xl text-[#43fcff]">ABOUT COLLEGE</h1>
          <h1 className="text-lg md:text-xl text-[#43fcff] mt-5">
            Patkar-Varde College :
          </h1>
          <span className="text-[14px] md:text-[16px] lg:text-[18px] ease-in-out duration-500">
          Chikitsak Samuha&apos;s Patkar Varde College is affiliated with the University of Mumbai and is located in Mumbai&apos;s Western suburbs. 
          It has achieved an &apos;A+&apos; NAAC accreditation with an institutional score of 3.53, ISO certification, and numerous recognitions such as 
          India&apos;s Education Excellence Award and the best College Award by the University of Mumbai. Ranked 40th in the Education World India Autonomous College Ranking and 13th in Maharashtra, 
          our college is committed to providing affordable.
          </span>
          
        </div>
      </div>
      {/* [57vh] sm:h-[46vh] md:h-[55vh] lg:h-[550px] */}
      <>
        <span className="text-[14px] md:text-[16px] lg:text-[18px] ease-in-out duration-300 flex text-justify">
        With a vision to empower students through experiential learning and innovation, 
        Mrs. Namrata Kawale-Shinde, Chief Coordinator, Faculty of Technology and Coordinator of the Information Technology department, 
        along with Mrs. Karishma Jain, Coordinator of the Computer Science department at Patkar-Varde College, 
        took a pioneering step in 2025 by launching Techtopia—an intercollegiate technical fest. 
        This initiative was designed to provide a vibrant platform for students to explore their creativity, sharpen technical acumen, and build leadership, teamwork, and organizational skills. 
        Under their able guidance, Techtopia quickly gained recognition for its unique blend of tech competitions, workshops, project showcases, and interactive sessions that bridge the gap between academic learning and industry trends. 
        The fest has become a hub for budding technocrats to network, collaborate, and gain exposure to real-world challenges, all within an atmosphere of healthy competition and spirited innovation. 
        Their commitment to excellence and student development has made Techtopia a milestone event in the college’s academic calendar, setting new standards for student-led initiatives in the field of Information Technology and Computer Science.
          <br />
          <br />
          The college has its alumni placed in various good positions, who have
          brought laurels by shining in all walks of life like administrative
          and foreign services, defense, education, art, film, theatre, sports,
          dance, music, I.T., media and so on.
          <br />
          <br />
          Simple, hard-working students imbibed with a sense of educational
          attainment, is our true strength, reminding all of us of our vision
          statement, “Purnata Gauravay” (पूर्णता गौरवाय).
        </span>
      </>

    </>
  );
};

export const EventBtn = () => {
  return (
    <>
      <div className="w-full h-[10vh] border-[px] flex items-center justify-center">
        <Link
          href={"/events"}
          className="w-auto md:w-[40%] h-[5vh] flex items-center justify-center px-10 border-[0.5px] border-[#43fcff] bg-[#43fcff]/[65%] hover:bg-transparent text-white hover:text-[#43fcff] cursor-pointer rounded-xl ease-in-out duration-300"
        >
          Check out Events
        </Link>
      </div>
    </>
  );
};



export const EventVenue = () => {
  return (
    <>
      <div className="w-full h-auto md:h-[75vh] lg:h-[90vh] border-[px] px-2 md:px-4 lg:px-8 flex flex-col gap-2 ease-in-out duration-500">
        <h1 className="w-full h-auto text-[#43fcff] font-extrabold text-2xl sm:text-3xl md:text-4xl ease-in-out duration-500">
          EVENT VENUE
        </h1>
        <div className="w-full h-auto flex flex-row items-center justify-center gap-10 border-[px] text-[14px] sm:text-xl md:text-2xl ease-in-out duration-300">
          <span className="flex items-center justify-center">
            Patkar-Varde College :
          </span>
          <span className="flex items-center justify-center text-[#43fcff]">
          S. V. Road, Goregaon (West),Mumbai - 400104
          </span>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-2 border-[px] rounded-xl overflow-hidden ease-in-out duration-300">
          <div className="w-full md:w-[40%] h-auto flex flex-col gap-2 items-center justify-center">
            {/* Adjusted the width and height attributes for better responsiveness */}
            <Image
              src={"/patkar_college.jpg"}
              width={500}
              height={300}
              alt="patkar college "
              className="rounded-lg"
            />
            {/* Adjusted the width and height attributes for better responsiveness */}
            <Image
              src={"/college_gate.jpg"}
              width={500}
              height={300}
              alt="patkarcollege gate"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-[60%] h-[40vh] md:h-full flex items-center justify-center ease-in-out duration-200">
            {/* Updated the width and height to 100% for better responsiveness */}
            <iframe
              src="https://www.google.com/maps?q=Chikitsak+Samuha's+Sir+Sitaram+and+Lady+Shantabai+Patkar+College+of+Arts+and+Science,+Swami+Vivekananda+Rd,+Piramal+Nagar,+Goregaon+West,+Mumbai,+Maharashtra+400104&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};


