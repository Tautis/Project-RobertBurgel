import { cardData } from "../components/cardData";
import { notFound } from "next/navigation";
import Gallery from "./components/gallery";
import Link from "next/link";
import NavBar from "../components/navBar";

interface CardPageParams {
  heading: string;
}

interface PageProps {
  params: CardPageParams;
}

export default function CardPage({ params }: PageProps) {
  const decodedHeading = decodeURIComponent(params.heading);
  const card = cardData.find((card) => card.heading === decodedHeading);
  const headingsArray = cardData.map((card) => card.heading);

  if (!card) {
    notFound();
  }
  const galleryImages = card.gallery ? Object.values(card.gallery) : [];

  return (
    <div className="card-page">
      <NavBar />
      <Gallery images={galleryImages} />
      <div className="lg:flex grid lg:p-36 p-10 gap-10">
        <div className="grid w-3/10 h-32">
          <span className="xl:text-4xl text-2xl font-extrabold">
            {card.heading}
          </span>
          <span className="text-sm text-[#8d8d8d] ">{card.description}</span>
        </div>
        <div className="flex-1">
          <span className="xl:text-[30px]/10 text-[20px]/7 line-h text-[#8d8d8d] font-extrabold block">
            {card.content}
          </span>
        </div>
      </div>
      <div className="lg:p-36 p-10">
        {headingsArray.map((item, index) => (
          <Link key={index} href={`/${encodeURIComponent(item)}`} passHref>
            <span
              className={`hover:text-white cursor-pointer text-sm/8  ${
                item == card.heading ? "text-white" : "text-[#8d8d8d]"
              }`}
            >
              {item.toUpperCase()}
              {index < headingsArray.length - 1 && (
                <span className="text-yellow-500 font-bold leading-none ">
                  {" | "}
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
