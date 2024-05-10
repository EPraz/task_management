import { Link } from "react-router-dom";
import { StyledLogo, StyledLogoWrapper } from "./styles";
import Logo from "~/assets/smileyFace.jfif";

const LogoComponent = () => {
  return (
    <Link to={"/departamento_a"}>
      <StyledLogoWrapper>
        <StyledLogo onClick={() => {}} src={`${Logo}`} alt={"Control Risks"} />
      </StyledLogoWrapper>
    </Link>
  );
};

export default LogoComponent;
