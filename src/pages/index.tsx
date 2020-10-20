import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bde2fb;
  background-image: url('/images/cloudBG.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: 80% auto; 
`;

const Index: React.FC = () => {
  return (
    <div>
      <Background>
        <div>
          <img
            src="/images/cloud2.svg"
            style={{ zIndex: 1, position: "absolute", bottom: 0 }}
          />
          <img
            src="/images/cloud1.svg"
            style={{ zIndex: 2, position: "absolute", bottom: 0 }}
          />
          <div style={{ zIndex: 3, position: "relative" }}>
            <h1 className="text-center">Countdown</h1>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Index;
