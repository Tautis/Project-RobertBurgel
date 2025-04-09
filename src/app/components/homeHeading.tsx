"use client";
import Link from "next/link";
import { Arrowx } from "../../../public/icons/arrowx";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import animationData from "../../../public/lottieAnim.json";
import Lenis from "lenis";
import dynamic from "next/dynamic";
gsap.registerPlugin(ScrollTrigger);

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HomeHeading() {
  const textRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    //SMOOTH SCROLLING//
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    //SMOOTH SCROLLING//
    if (isClient) {
      gsap.fromTo(
        textRef.current,
        { rotateZ: "-10deg", transformOrigin: "middle" },
        {
          rotateZ: "-50deg",
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 20%",
            end: "bottom 10%",
            scrub: true,
          },
        }
      );
      gsap.to("#arrow", {
        y: 30,
        x: -9,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [isClient]);
  return (
    <div className=" z-0 overflow-hidden">
      <div className="lottie-container">
        <Lottie animationData={animationData} />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-72 lg:top-80 w-[85vw] text-[6.7vw] leading-[5vw] font-bold font-hammer"
        ref={textRef}
      >
        <p className="text-white">ROBERT BURGEL</p>

        <p className="text-gray-400 text-right">
          OFFICE FOR VISUAL
          <br /> COMMUNICATION
        </p>
      </div>
      <div
        className="absolute lg:bottom-5 bottom-64 left-1/2 -translate-x-[10px] w-fit mx-auto pt-32"
        id="arrow"
      >
        <Link href="#start">
          <Arrowx rotation={90} width="50px" height="50px" color="gray" />
        </Link>
      </div>
    </div>
  );
}
