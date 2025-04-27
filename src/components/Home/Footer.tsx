import CMCLogo from "../../assets/cmc_logo.png";

const Footer = () => {
  return (
    <footer className="p-12 bg-blue-dark text-white mt-12 text-sm flex flex-row flex-wrap justify-center items-center gap-6">
      <img src={CMCLogo} className="w-50 h-auto" />
      <div>
        <div className="text-base mb-1.5">
          Cultural Influences on Mental Health Center
        </div>
        Claremont McKenna College 850 Columbia Avenue <br></br>
        Claremont, CA 91711 <br></br>
      </div>
    </footer>
  );
};

export default Footer;
