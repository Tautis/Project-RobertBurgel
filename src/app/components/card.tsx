"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  heading: string;
  description: string;
  image: string;
};

const Card = ({ heading, description, image }: Props) => {
  const divRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Set client-side state after component mounts
  }, []);
  useEffect(() => {
    if (isClient) {
      gsap.fromTo(
        divRef.current,
        { scale: 0.2, transformOrigin: "middle" },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [isClient]);

  return (
    <Link href={`/${encodeURIComponent(heading)}`} passHref>
      <div
        ref={divRef}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.4s ease-in-out",
        }}
        className="bg-cover bg-center min-h-[25vw] min-w-[20vw] zoom-box group aspect-square lg:aspect-auto"
      >
        <div ref={textRef} className="relative z-10">
          <span className="relative z-10 text-white xl:text-4xl font-bold p-12 pb-5 block opacity-0 group-hover:opacity-100 transition-[opacity,scale] duration-700 scale-0 group-hover:scale-100 origin-center">
            {heading}
          </span>
          <span className="relative z-10 text-white xl:text-sm text-xs font-extrabold px-12 block  opacity-0 group-hover:opacity-100 transition-[opacity,scale] duration-1000 scale-0 group-hover:scale-100 origin-bottom-right">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
