import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledBodyWrapper = styled(Toolbar)`
  position: relative;
  margin-bottom: 60px;
  margin-top: 48px;
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-color: rgba(4, 46, 66, 0.09);
  border: 1px solid black;
  background: linear-gradient(
    180deg,
    rgba(4, 46, 66, 0.2) 0.02%,
    rgba(255, 255, 255, 1) 99.86%
  );
`;
