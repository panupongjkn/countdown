import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import moment from "moment";
import { countdownRef } from "../tools/firebase";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bde2fb;
  background-image: url("/images/cloudBG.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: 80% auto;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
`;

interface ParamTypes {
  id: string;
}

const Countdown: React.FC = () => {
  const [Days, setDays] = useState<number>(0);
  const [Hours, setHours] = useState<number>(0);
  const [Minutes, setMinutes] = useState<number>(0);
  const [Seconds, setSeconds] = useState<number>(0);
  const [loading, setLoading] = useState<Boolean>(true);
  let { id } = useParams<ParamTypes>();
  useEffect(() => {
    countdownRef.on("value", (snapshot) => {
      let items = snapshot.val();
      for (let item in items) {
        if (items[item].name === id) {
          Count(new Date(items[item].date));
          break;
        }
      }
    });
  }, []);

  const Count = (DateCountdown: Date) => {
    setInterval(() => {
      let now = new Date().getTime();
      let timeleft = DateCountdown.getTime() - now;

      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Background>
        <div className="pt-5">
          <img
            src="/images/cloud2.svg"
            style={{ zIndex: 1, position: "absolute", bottom: 0 }}
            alt="cloud2"
          />
          <img
            src="/images/cloud1.svg"
            style={{ zIndex: 2, position: "absolute", bottom: 0 }}
            alt="cloud1"
          />
          <div className="col-12 col-lg-8 mx-auto">
            <Box
              className="text-center p-5 rounded"
              style={{ zIndex: 3, position: "relative" }}
            >
              <h1>Countdown</h1>
              {loading ? (
                <p>loading...</p>
              ) : (
                <>
                  <p>
                    {Days}D : {Hours}H : {Minutes}M : {Seconds}S
                  </p>
                </>
              )}
            </Box>
          </div>
          <div
            className="pb-5 container"
            style={{
              position: "absolute",
              zIndex: 3,
              width: "100%",
              bottom: 0,
            }}
          >
            <Link to="/">
              <Button type="primary">back</Button>
            </Link>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Countdown;
