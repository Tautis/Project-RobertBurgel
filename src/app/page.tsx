import Card from "./components/card";
import { cardData } from "./components/cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMouse,
  faNewspaper,
  faEye,
  faStar,
  faArrowRight,
  faTools,
  faPenNib,
  faMapMarkerAlt,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Arrowx } from "../../public/icons/arrowx";
import Link from "next/link";
import NavBar from "./components/navBar";
import HomeHeading from "./components/homeHeading";

export default function Home() {
  return (
    <div className="">
      <div className="fixed z-50 bottom-5 right-10 overflow-hidden">
        <Link href="#start">
          <Arrowx rotation={270} width="30px" height="30px" color="gray" />
        </Link>
      </div>
      <HomeHeading />
      <div className="sticky top-0 z-999">
        <NavBar />
      </div>

      {/* <div className="z-10 relative" id="start">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="font-bold xl:text-3xl md:leading-[2vw] content-center p-14">
            <span className="w-[80%] mx-auto block">Hello and welcome.</span>
            <p className="text-[#8d8d8d] w-[80%] mx-auto">
              We are a graphic design agency based in Düsseldorf. We develop
              graphic concepts, create websites, design, draft, consult, create,
              implement, dream, and tinker, and we're always looking forward to
              the next project.
            </p>
          </div>
          <div className="">
            <Card {...cardData[0]} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`col-span-1 ${card.span === 2 ? "lg:col-span-2" : ""}`}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90vw] mx-auto pt-32" id="services">
        <div className="text-sm text-[#8d8d8d] border-b-[#8d8d8d] border-b-1 py-3 w-[90vw] mx-auto">
          SERVICES
        </div>
        <div className="lg:flex pt-10 gap-7 justify-center">
          <div className="text-[#8d8d8d] font-bold lg:w-[500px] ">
            <FontAwesomeIcon
              className="w-[80px] h-[80px] text-[100px] inline-block"
              icon={faMouse}
            />
            <div className=" pt-5">
              <span className="lg:text-[35px] text-[25px] text-white">
                Interface Design
              </span>
              <ul className="lg:text-[35px] text-[25px] list-[square] pl-7 lg:leading-[3vw]">
                <li>Responsive web design</li>
                <li>Landing pages</li>
                <li>One-pagers & microsites</li>
                <li>Blogs & CMS</li>
                <li>interactive exhibitions</li>
                <li>Homepage</li>
                <li>Online banners & SEO</li>
              </ul>
            </div>
          </div>
          <div className="text-[#8d8d8d] font-bold lg:w-[500px]">
            <FontAwesomeIcon
              className="w-[80px] h-[80px] text-[100px] inline-block"
              icon={faNewspaper}
            />
            <div className="lg:leading-[2.5vw] pt-5">
              <span className="lg:text-[35px] text-[25px] text-white">
                Editorial Design{" "}
              </span>
              <ul className="lg:text-[35px] text-[25px] list-[square] pl-7 lg:leading-[3vw]">
                <li>Book design</li>
                <li>Magazines & brochures</li>
                <li>Magazine</li>
                <li>Image & product brochures</li>
                <li>Annual reports</li>
                <li>Catalogs & Newspapers</li>
                <li>E-Paper</li>
              </ul>
            </div>
          </div>
          <div className="text-[#8d8d8d] font-bold lg:w-[500px]">
            <FontAwesomeIcon
              className="w-[80px] h-[80px] text-[100px] inline-block"
              icon={faEye}
            />
            <div className="lg:leading-[2.5vw] pt-5">
              <span className="lg:text-[35px] text-[25px] text-white">
                Corporate design
              </span>
              <ul className="lg:text-[35px] text-[25px] list-[square] pl-7 lg:leading-[3vw]">
                <li>Logo Design</li>
                <li>Appearances</li>
                <li>Business equipment</li>
                <li>Stationery & Business Cards</li>
                <li>Image brochures</li>
                <li>Design manuals/style guides</li>
                <li>Brand communication</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:flex pt-10 gap-7 justify-center">
          <div className="text-[#8d8d8d] font-bold lg:w-[500px]">
            <FontAwesomeIcon
              className="w-[80px] h-[80px] text-[100px] inline-block"
              icon={faStar}
            />
            <div className="lg:leading-[2.5vw] pt-5">
              <span className="lg:text-[35px] text-[25px] text-white">
                Marketing & Advertising{" "}
              </span>
              <ul className="lg:text-[35px] text-[25px] list-[square] pl-7 lg:leading-[3vw]">
                <li>Posters & Flyers</li>
                <li>Ads & Mailings</li>
                <li>Product campaigns</li>
                <li>Exhibition stands</li>
                <li>Packaging design</li>
                <li>Online banner</li>
                <li>Real Estate Exposé</li>
              </ul>
            </div>
          </div>
          <div className="text-[#8d8d8d] font-bold lg:w-[500px]">
            <FontAwesomeIcon
              className="w-[80px] h-[80px] text-[100px] inline-block"
              icon={faArrowRight}
            />
            <div className="lg:leading-[2.5vw] pt-5">
              <span className="lg:text-[35px] text-[25px] text-white">
                Information Design{" "}
              </span>
              <ul className="lg:text-[35px] text-[25px] list-[square] pl-7 lg:leading-[3vw]">
                <li>Orientation systems</li>
                <li>Data visualization</li>
                <li>schematic representations</li>
                <li>Information systems</li>
                <li>Signposts & information boards</li>
                <li>Infographics & diagrams</li>
                <li>Information boards & roll-ups</li>
              </ul>
            </div>
          </div>
          <div className="text-[#8d8d8d] font-bold lg:w-[500px]">
            <FontAwesomeIcon
              className="w-[80px] h-[80px] text-[100px] inline-block"
              icon={faTools}
            />
            <div className="lg:leading-[2.5vw] pt-5">
              <span className="lg:text-[35px] text-[25px] text-white">
                Production
              </span>
              <ul className="lg:text-[35px] text-[25px] list-[square] pl-7 lg:leading-[3vw]">
                <li>Coordination of service providers</li>
                <li>Implementation wordpress</li>
                <li>Final artwork</li>
                <li>Image editing & retouching</li>
                <li>Production support</li>
                <li>Photography & Composings</li>
                <li>Brand communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-32 w-[90vw] mx-auto" id="contact">
        <div className="text-sm text-[#8d8d8d] border-b-[#8d8d8d] border-b-1 py-3 w-[90vw] mx-auto">
          CONTACT
        </div>
        <div className="lg:flex justify-around text-[#8d8d8d] pt-10">
          <div className="grid pt-5">
            <FontAwesomeIcon
              icon={faPenNib}
              className="w-[100px] h-[100px] text-[100px] inline-block"
            />
            <div className="grid lg:text-4xl font-bold lg:leading-[3vw] pt-4 text-2xl">
              <span>
                Graduate designer
                <br /> Robert Bürgel
              </span>
            </div>
          </div>
          <div className="grid pt-5">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="w-[100px] h-[100px] text-[100px] inline-block"
            />
            <div className="grid lg:text-4xl text-2xl font-bold lg:leading-[3vw]">
              <span>
                d.werk | Hoffeldstr. 89
                <br />
                40235 Düsseldorf
              </span>
            </div>
          </div>
          <div className="grid pt-5">
            <FontAwesomeIcon
              icon={faComment}
              className="w-[100px] h-[100px] text-[100px] inline-block"
            />
            <div className="grid lg:text-4xl font-bold lg:leading-[3vw] text-2xl">
              <span>Telephone 000000000</span>
              <span>email@email.de</span>
            </div>
          </div>
        </div> 
      </div>*/}
    </div>
  );
}
