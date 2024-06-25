import Logo from "./assets/owencircle.png";
import linkdin from "./assets/linkedin.svg";
import email from "./assets/envelope.svg";
import facebook from "./assets/facebook.svg";

function Contact(){
    return(
        <div>
            <div className="text-center container border border-black rounded">
                <img src={Logo} alt="Logo" />
                <div className="row">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/owen-coombs-ab029b254/" target="_blank" rel="noopener noreferrer" id="linkdinpic">
                            <img src={linkdin} id="linkdin" alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="mailto:owencoombs03@gmail.com">
                            <img src={email} id="email" alt="Email" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.facebook.com/owen.coombs.1441?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} id="facebook" alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

