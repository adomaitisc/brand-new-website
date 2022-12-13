export const Intro = () => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <div className="flex flex-col items-start text-7xl leading-[1]">
        <h1 className="text-center">
          Hello, I am{" "}
          <span className="text-green-700 font-semibold">Cauã Adomaitis</span>,
        </h1>
        <h1 className="text-center">fullstack dev and tech enthusiast</h1>
      </div>
      <aside className="absolute bottom-0 mb-12 flex flex-col items-center justify-center gap-2">
        <p className="text-3xl">check out my work</p>
        <svg
          width="24"
          height="53"
          viewBox="0 0 24 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9393 52.0607C11.5251 52.6464 12.4749 52.6464 13.0607 52.0607L22.6066 42.5147C23.1924 41.9289 23.1924 40.9792 22.6066 40.3934C22.0208 39.8076 21.0711 39.8076 20.4853 40.3934L12 48.8787L3.51472 40.3934C2.92893 39.8076 1.97918 39.8076 1.3934 40.3934C0.80761 40.9792 0.80761 41.9289 1.3934 42.5147L10.9393 52.0607ZM10.5 -6.55671e-08L10.5 51L13.5 51L13.5 6.55671e-08L10.5 -6.55671e-08Z"
            fill="black"
          />
        </svg>
      </aside>
    </div>
  );
};
