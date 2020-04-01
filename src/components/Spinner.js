import React from "react";
import styled from "styled-components";
import spinner from "../loading.gif";

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <div className="spinner-container">
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </SpinnerWrapper>
  );
}

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  .spinner-container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
