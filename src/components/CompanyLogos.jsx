import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex xs:flex-col md:flex-row mt-20">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-4 xs:backdrop-blur xs:border-1 xs:border-n-1/10 xs:rounded-2xl xs:py-5 xs:mb-1 md:bg-transparent md:border-0 md:py-0 md:mb-0 cursor-pointer"
            key={index}
          >
            <img
              className="grayscale hover:grayscale-0 transition-all ease-in w-[4rem] bg-contain"
              src={logo}
              alt={logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
