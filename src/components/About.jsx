import Link from "next/link";
import React from "react";
import Image from "next/image";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { sliderImgs } from "@/context/data";
// import styles from "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const About = () => {
  return (
    <>
      <div className="w-full h-auto border-[px] overflow-hidde ease-in-out duration-300">
        <h3 className="text-[#43fcff]/80 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          About us
        </h3>
        <div className="w-full h-auro border-[px] overflow-hidden flex flex-col gap-2 ease-in-out duration-300">
          <AboutByteIT />
          <EventBtn />
          <ImageSlider />
          <AboutCollege />

          <EventVenue />
        </div>
      </div>
    </>
  )
}

export default About;

export const AboutByteIT = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-4 md:gap-0">
        <div className="w-full h-auto flex flex-col md:flex-row gap-2 justify-center">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <Image
              src={"/byteITLogo.png"}
              width={500}
              height={500}
              alt="Techtopia Logo"
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mr-1 ease-in-out duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-4 md:px-8 lg:px-12">
            <h1 className="text-2xl md:text-3xl text-[#43fcff]">
              ABOUT Techtopia
            </h1>
            <div className="text-[15px] md:text-[18px] text-justify ease-in-out duration-500">
              <span>
              Techtopia is the flagship fest of the Department of Computer Science & Information Technology at Patkar-Varde College, designed to ignite passion and creativity in the field of Information Technology. 
              This dynamic and intellectually stimulating event serves as a platform for students to explore cutting-edge innovations, showcase their technical talents, and engage in healthy competition. 
              From coding challenges and tech quizzes, Techtopia fosters a spirit of innovation, teamwork, and critical thinking. 
              More than just a fest, it is a celebration of the future of technology—empowering students to dream big, develop real-world skills, and take confident steps toward becoming tomorrow’s tech leaders.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-center gap-2 px-10 md:px-20">
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
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center">
          <Image
            src={"/patkar_logo.png"}
            width={500}
            height={500}
            alt="Patkar-Varde College Logo"
            className="w-[250px] h-auto sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mr-1 ease-in-out duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto border-[px] flex flex-col justify-center px-2 md:px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl text-[#43fcff]">ABOUT COLLEGE</h1>
          <h1 className="text-lg md:text-xl text-[#43fcff] mt-5">
            Patkar-Varde College :
          </h1>
          <span className="flex text-justify text-[14px] md:text-[16px] lg:text-[18px] ease-in-out duration-500">
          Chikitsak Samuha's Patkar-Varde College, established in 1964 and located in the heart of Goregaon (West), Mumbai, is a reputed institution affiliated with the University of Mumbai. 
          With a legacy of academic excellence, the college offers a wide range of undergraduate and postgraduate programs across Arts, Science, and Commerce streams. 
          Over the years, it has expanded to include professional and self-financed courses such as B.Sc. (Information Technology), B.Sc. (Computer Science), B.M.S., B.M.M., B.Sc. (Biotechnology), along with M.Sc. (Information Technology) and M.Sc. (Computer Science). 
          The college is also recognized as a Research Centre for Ph.D. programs in several subjects. Committed to holistic education, 
          Patkar-Varde College nurtures students through co-curricular, cultural, and extension activities while promoting academic rigor, digital innovation, and industry readiness.
          </span>
        </div>
      </div>
      {/* [57vh] sm:h-[46vh] md:h-[55vh] lg:h-[550px] */}
      <div className="w-full h-auto border-[px] flex flex-col px-2 md:px-4 lg:px-8">
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
      </div>
    </>
  );
};

export const EventBtn = () => {
  return (
    <>
      <div className="w-full h-[10vh] border-[px] flex items-center justify-center">
        <Link
          href={"/Event"}
          className="w-auto md:w-[40%] h-[5vh] flex items-center justify-center px-10 border-[0.5px] border-[#43fcff] bg-[#43fcff]/[65%] hover:bg-transparent text-white hover:text-[#43fcff] cursor-pointer rounded-xl ease-in-out duration-300"
        >
          Check out Events
        </Link>
      </div>
    </>
  );
};

export const ImageSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className="w-full h-auto border-[px] flex items-center justify-center">
        {/* Slider images */}
        <div className="w-full md:w-[60%] h-auto relativ border-[px] flex items-center justify-center rounded-2xl overflow-hidden">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
          >
            {sliderImgs.map((sImgs) => (
              // <div className="w-full h-full" >
                <div key={sImgs.id} data-src={sImgs.img} alt={sImgs.title} />
              // </div>
            ))}
          </AutoplaySlider>
        </div>
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


