import Image, { StaticImageData } from "next/image";
import image from "../assets/phone.png";

type AppType = {
  title: string;
  subtitle: string;
  repo: string;
  demo: string;
  image: StaticImageData;
  color: string;
};

export const Work = ({ app }: { app: AppType }) => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div
        className="w-3/4 h-4/5 rounded-3xl shadow-2xl px-12 py-12 flex flex-col justify-between"
        style={{ backgroundColor: app.color }}
      >
        <h2 className="text-white text-3xl">{app.title}</h2>
        <Image
          src={app.image}
          alt="iphone"
          className="absolute right-0 left-0 m-auto mt-10
          "
        />
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-end text-2xl leading-relaxed text-white">
            <a className="hover:opacity-70 cursor-pointer duration-300">
              github repo
            </a>
            <a className="hover:opacity-70 cursor-pointer duration-300">
              visit demo
            </a>
          </div>
          <h2 className="text-white text-3xl self-end ">{app.subtitle}</h2>
        </div>
      </div>
    </div>
  );
};
