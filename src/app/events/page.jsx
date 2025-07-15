"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const eventPlaceholders = [
  {
    id: 1,
    name: "BGMI",
    image: "/events/bgmi.png",
    rules: [
      "Teams must have 4 players each.",
      "Finger sleeves are allowed.",
      "Air triggers or external triggers are not allowed.",
      "Hacking is strictly prohibited.",
      "Ensure that the language used is appropriate and respectful throughout the game. Any potential issues like hate or harassment will result in disqualification of the whole team.",
      "Participants should arrive 15 min prior.",
      "Participants should bring their own device.",
      "Participants should have strong internet connection."
    ],
    eligibility: [
      "Age limit: 16 years and above.",
      "Each team must have exactly 4 members (no solo/duo entries allowed).",
      "Participants must use their own mobile devices (no emulator/PC play allowed).",
      "Only official BGMI app must be used."
    ],
    timings: "9:30am - 3:00pm",
    fees: "200Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 2,
    name: "KEYBOARD WAR",
    image: "/events/keyboard.png",
    rules: [
      "Time Limit:",
      "Each round has a strict time limit (e.g., 10-15 minutes depending on complexity).",
      "Late submissions will lead to disqualification from that round.",
      "Disqualification Criteria:",
      "Copying from other teams or any kind of malpractice.",
      "Disruptive behavior during the event.",
      "Ignoring instructions from organizers.",
      "Use of Internet is restricted as per event rules.",
      "NOTE:",
      "DETAILS ABOUT THE EVENT WOULD BE DISCLOSED ON THE DAY OF THE EVENT."
    ],
    eligibility: "Open to all students with typing skills (ON PC).",
    timings: "12:00pm - 2:00pm",
    fees: "40Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 3,
    name: "RELAY CODE",
    image: "/events/relaycode.png", 
    rules: [
      "Round one will be conducted of about 7 mins.",
      "Participants who complete the round one phase within the given time limit will be selected for the second round.",
      "Second round has a time limit of 15-20 minutes; the one who completes within the time limit is the winner.",
      "Each players will either write 5 lines of code or for 2 mins; after that, they will have to strictly swap their positions. The one who doesn't follow this rule will get disqualified.",
      "NOTE:",
      "DETAILS ABOUT THE EVENT WOULD BE DISCLOSED ON THE DAY OF THE EVENT."
    ],
    eligibility: [
      "Open to all students with a basic knowledge of programming and IT concepts.",
      "Any programming language used in the game will be announced in advance."
    ],
    timings: "12:00pm - 2:00pm",
    fees: "80Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 4,
    name: "BUGSMASH",
    image: "/events/bugsmash.png",
    rules: [
      "Each round will provide a code snippet with multiple bugs—syntax, logical, and/or runtime.",
      "Participants must debug the code and ensure it runs successfully with the expected output.",
      "The language for each round will be pre-decided and announced at the start of that round.",
      "No external help or browsing is allowed. Offline resources like personal notes are also not allowed.",
      "Use only the provided software/tools; switching environments is not permitted.",
      "Participants must submit the corrected code along with the correct output before time runs out.",
      "NOTE:",
      "DETAILS ABOUT THE EVENT WOULD BE DISCLOSED ON THE DAY OF THE EVENT."
    ],
    eligibility: "Open to all students with knowledge of programming.",
    timings: "1:30pm - 2:30pm",
    fees: "40Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 5,
    name: "DESIGNSCAPE",
    image: "/events/credesignscape.png",
    rules: [
      "Participants will be given a theme or topic for design.",
      "They need to create a design using Canva within the given time limit.",
      "The design should meet the theme requirements.",
      "Originality and creativity will be judge's discretion.",
      "The participant with the best design wins.",
      "Using of Premium Version of Canva leads to Disqualification.",
      "Participants must submit their designs in the specified format."
    ],
    eligibility: "Open to all students with Designing Skills",
    timings: "1:30pm - 3:00pm",
    fees: "40Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 6,
    name: "64SQUARECLASH",
    image: "/events/chess.png",
    rules: [
      "Touch-Move Rule: If a players touches a piece, they must move it (if a legal move exists). If an opponents's piece is touched, it must be captured if possible.",
      "Illegal Moves: Any illegal move results in a warning. Two illegal moves may lead to loss.",
      "Time Control: Each players will have 10 minutes on their clock. If a players's time runs out, they lose the game (unless the opponents has no mating material).",
      "Touching the Clock: Players must press their clock with the same hand used to move the piece. Pressing the opponents's clock is not allowed.",
      "Arbiter's's Decision: In all disputes or unclear situations, the arbiter's decision will be final.",
      "No External Help: Players must not use any electronic devices or receive help from others during the game.",
      "NOTE:",
      "DETAILS ABOUT THE EVENT WOULD BE DISCLOSED ON THE DAY OF THE EVENT."
    ],
    eligibility: [
      "Open to all students.",
      "Basic understanding of chess rules is required."
    ],
    timings: "1:30pm - 3:00pm",
    fees: "40Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 7,
    name: "REELOVATION",
    image: "/events/reelmaking.png",
    rules: [
      "The reel must comprise of all the events (Seminar, Technical Games and Non-Technical Games). 10-15 minutes time will be permitted for covering each gaming event.",
      "The reel must be uploaded before 1 hour prior to the end of the last game (whichever is later).",
      "The reel must be tagged & mentioned to @techtopiafest and @patkar_ites Instagram handle with a suitable caption.",
      "Only Smartphones are allowed.",
      "Any editing software is allowed, but it should not be a premium version.",
      "Video references or templates are not allowed."
    ],
    eligibility: "Open to all students with Videography & Editing Skills.",
    timings: "9:30am - 3:00pm",
    fees: "40Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
  {
    id: 8,
    name: "SEMINAR",
    image: "/events/auditorim.png",
    rules: "BE on Time.",
    eligibility: "Every One Who Is Interested In Tech And Science.",
    timings: "11:00am - 1:00pm",
    fees: "50Rs",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJrcQjLetnKwj23OMNG1jf9Et1mSZwjCpQoA_B8o4IsArnGA/viewform",
  },
];

const Events = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const by = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["80%", "-100%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen">
      <motion.div
        className="inset-0 absolute z-0"
        style={{
          backgroundImage: "url(/heroBannerThree.gif)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          width: '100%',
          height: '100%',
        }}
        y={by}
        scale={scale}
        opacity={opacity}
      />
      <div className="relative w-full min-h-screen bg-black/80 text-white px-4 py-10 flex flex-col items-center" style={{zIndex: 1}}>
      <h1 className="text-[#43fcff] text-3xl md:text-5xl font-extrabold mb-8">TechTopia Events</h1>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {eventPlaceholders.map(event => (
          <div key={event.id} className="w-full flex flex-col md:flex-row bg-[#10191c]/70 rounded-xl shadow-lg border border-[#43fcff]/30 overflow-hidden">
            <div className="md:w-1/3 flex items-center justify-center bg-[#181f22]/70 p-4">
              <Image src={event.image} alt={event.name} width={400} height={520} className="rounded-lg object-cover" />
            </div>
            <div className="md:w-2/3 flex flex-col gap-3 p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#43fcff] mb-2">{event.name}</h2>
              <div className="flex flex-col gap-1">
  <span className="font-semibold text-xl md:text-2xl">Rules:</span>
  {Array.isArray(event.rules) ? (
    <ol className="list-decimal pl-5 text-gray-300">
      {event.rules.map((rule, idx) => (
        <li key={idx}>{typeof rule === 'string' ? rule.replace(/&#39;/g, "'").replace(/&amp;/g, "&") : rule}</li>
      ))}
    </ol>
  ) : (
    <p className="text-gray-300">{event.rules.replace(/&#39;/g, "'").replace(/&amp;/g, "&")}</p>
  )}
</div>
              <div className="flex flex-col gap-1">
  <span className="font-semibold text-xl md:text-2xl">Eligibility:</span>
  {Array.isArray(event.eligibility) ? (
    <ol className="list-decimal pl-5 text-gray-300">
      {event.eligibility.map((item, idx) => (
        <li key={idx}>{typeof item === 'string' ? item.replace(/&#39;/g, "'").replace(/&amp;/g, "&") : item}</li>
      ))}
    </ol>
  ) : (
    <p className="text-gray-300">{event.eligibility.replace(/&#39;/g, "'").replace(/&amp;/g, "&")}</p>
  )}
</div>
              <div className="flex flex-row gap-8 text-lg md:text-xl font-semibold mt-4">
                <div>
                  <span className="font-semibold">Timings:</span> <span className="text-gray-300">{event.timings}</span>
                </div>
                <div>
                  <span className="font-semibold">Fees:</span> <span className="text-gray-300">{event.fees}</span>
                </div>
              </div>
              <a href={event.regLink} target="_blank" rel="noopener noreferrer" className="mt-3 w-max px-6 py-2 bg-[#43fcff] text-black font-bold rounded hover:bg-transparent hover:text-[#43fcff] border border-[#43fcff] transition-all">Register</a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-5xl mt-16 p-6 bg-[#181f22] rounded-xl border border-[#43fcff]/40">
        <h2 className="text-3xl md:text-4xl font-bold text-[#43fcff] mb-4">General Rules of Techtopia</h2>
        <ol className="list-decimal pl-6 text-gray-300 text-lg md:text-xl">
  <li>Participation will only be allowed on a valid college ID card or a college fee receipt.</li>
  <li>Any kind of obscenity, vulgarity, misbehaviour, or slang language will not be tolerated.</li>
  <li>The decision of the organizing committee, referee, and judge&apos;s for any of the competitions is final and binding.</li>
  <li>The Organizing Committee has the authority to create, change, modify, or update any round or rules and regulations before, during, or after the event without any prior notice.</li>
  <li>Damage to any college property or any kind of misbehaviour will be treated as a serious offence.</li>
  <li>Carry valuables at your own risk. Team Techtopia will not be responsible for any damage, theft, or loss of your valuable and confiscated items.</li>
  <li>Sharp objects like knives, blades, cutters, nail filers, pins, staplers, Swiss-knives, scissors, etc. will be confiscated.</li>
  <li>Metal objects like scales/rulers, thick chains, lighters etc. will be confiscated.</li>
  <li>Any other article which is not included in the above but is injurious or harmful will not be allowed inside venue.</li>
</ol>
<span className="font-semibold text-2xl md:text-3xl text-[#43fcff] mt-6 block">COSTUME RULES:</span>
<ol className="list-decimal pl-6 text-gray-300 text-lg md:text-xl" start="10">
  <li>Tube tops, low backs, low necks, bralettes, and tops above the navel beyond a considerable length will not be permitted.</li>
  <li>Boy shorts, daisy dukes, dolphin shorts, micro/miniskirts, leotards, and bottoms above the knee will not be permitted.</li>
  <li>All costumes are subjected to scrutiny and the judge&apos;s discretion will be final.</li>
</ol>
      </div>
      </div>
    </section>
  );
};

export default Events;
