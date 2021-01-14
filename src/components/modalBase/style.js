import styled from "styled-components";

export const ModalElement = styled.div`
  width: 30rem !important;
  height: 62.5rem !important;
  width: 70% !important;
  height: 80% !important;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
  z-index: 11;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const ContainerIcon = styled.i`
  font-size: 2rem;
  position: relative;
  float: right;
`;

export const ContentContainerModal = styled.div`
  width: 60%;
  height: 75%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* background-color: azure; */
  text-align: center;
`;