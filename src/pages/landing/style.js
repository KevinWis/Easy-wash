import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 40;
  z-index: 1;

  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  font-weight: normal;
  font-size: 50px;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (min-width: 1280px) {
    margin: 2rem;
  }
`;
export const MainImageContainer = styled.div`
  width: 100%;
  height: 40%;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 70%;
  max-width: 300px;
  z-index: 1;

  @media (min-width: 1024px) {
    width: 19rem;
  }

  @media (min-width: 1280px) {
    width: 15rem;
  }
`;
export const WaveImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  max-height: 80%;

  @media (min-width: 600px) {
    display: none;
  }
`;
export const WaveImg2 = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  max-height: 80%;
  /* display: none; */
  @media (max-width: 600px) {
    display: block;
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  height: 20%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    z-index: 1;
    margin: 1rem;
    width: 20rem;
    height: 3rem;
    font-size: 14px;
  }
`;
