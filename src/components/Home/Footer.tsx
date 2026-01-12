import CMCLogo from "../../assets/cmc_logo.png";
import { IS_STUDY } from "../../config";

const Footer = () => {
  return (
    <footer className="p-12 bg-blue-dark text-white mt-12 text-sm flex flex-row flex-wrap justify-center items-center gap-6">
      <img src={CMCLogo} className="w-50 h-auto" />

      {IS_STUDY ? (
        <div className="text-base mb-1.5">
          850 Columbia Avenue <br></br>
          Claremont, CA 91711 <br></br>
        </div>
      ) : (
        <div>
          <div className="text-base mb-1.5">
            Cultural Influences on Mental Health Center
          </div>
          Claremont McKenna College 850 Columbia Avenue <br></br>
          Claremont, CA 91711 <br></br>
        </div>
      )}
      {IS_STUDY && (
        <div>
          This research study is being conducted by Dr. Wei-Chin Hwang, a
          Professor at Claremont McKenna College in the Department of
          Psychological Science. If you have any questions about the study,
          please feel free to contact Dr. Hwang at 909-607-2762; whwang@cmc.edu;
          This study has been approved by the Claremont McKenna College
          Institutional Review Board (IRB).
        </div>
      )}
    </footer>
  );
};

export default Footer;
