// importing built in libraries
import styled from "styled-components";

// images
import LoginBgImg from "../../assets/login-page/login-bg-img.svg";

export const BoxWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${LoginBgImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;
