"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { gsap } from "gsap";
import { Arrowx } from "../../../public/icons/arrowx";

const NavBar = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleBackClick = () => {
    router.back();
  };
  const handleMenuClick = () => {
    setClicked(!clicked);
    // Trigger GSAP animation when button is clicked
    gsap.to(".menu-box", {
      x: clicked ? "-50vw" : 0, // Move the element left or right
      opacity: clicked ? 0.5 : 1, // Fade in or out
      duration: 1, // Animation duration
      ease: "power2.out", // Easing function for smooth animation
    });
    gsap.to(".menu-items", {
      y: clicked ? "50vh" : 0,
      opacity: clicked ? 0 : 1,
      duration: 1.2,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="bg-black h-5 w-full flex justify-between items-center p-5 font-hammer z-50">
        <Link
          href="/"
          className="uppercase text-[#8d8d8d]"
          title="Robert Bürgel | Office for Visual Communication"
        >
          <span className="hidden sm:inline">
            Robert Bürgel | Office for Visual Communication
          </span>
          <span className="inline sm:hidden">Robert Bürgel</span>
        </Link>
        <div className="flex gap-2">
          <button
            onClick={handleBackClick}
            className="hover:text-white text-[#8d8d8d]"
          >
            BACK
          </button>
          <button
            onClick={handleMenuClick}
            className="hover:text-white text-[#8d8d8d]"
          >
            MENU
          </button>
        </div>
      </div>
      <div className="fixed left-0 top-0 transform -translate-x-[50vw] menu-box w-[50vw] h-[100vh] bg-[#181818] z-50">
        <div className="grid z-50 lg:text-6xl text-xl pl-8 lg:pt-20 pt-10 lg:pl-28 lg:gap-5 text-[#8d8d8d] menu-items opacity-0 -translate-y-[-50vw]">
          <Link
            onClick={handleMenuClick}
            href="/#start"
            className="hover:text-white hover:text-7xl transition-all duration-300"
          >
            Work
          </Link>
          <Link
            href="/#services"
            onClick={handleMenuClick}
            className="hover:text-white hover:text-7xl transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            onClick={handleMenuClick}
            className="hover:text-white hover:text-7xl transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <button
          className="absolute right-5 lg:top-20 top-10 z-50 group cursor-pointer"
          onClick={handleMenuClick}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Arrowx
            rotation={180}
            color={isHovered ? "white" : "gray"}
            className="group-hover:text-white"
          />
        </button>
      </div>
    </>
  );
};

export default NavBar;
