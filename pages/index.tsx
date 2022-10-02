import EmailOutline from "../templates/emailOutline";
import { css } from "@emotion/react";
import SideBar from "../templates/sidebar";
import EmailDetail from "../templates/emailDetail";
import setupTestData from "../testdata/testdata";
import Email from "../models/email";
import { useState } from "react";

const topContainerStyle = css`
  background-color: wheat;
  display: flex;
`;

const emailOutlineStyle = css`
  margin-top: 20px;
`;

let testData = setupTestData(14);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div css={topContainerStyle}>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div css={emailOutlineStyle}>
          {testData.map((email: Email, i: number) => {
            return (
              <EmailOutline
                key={i}
                from={email.senderName}
                title={email.subject}
                text={email.body}
                receptionTime={email.receptionTime}
                onClick={() => {
                  setCurrentIndex(i);
                }}
              />
            );
          })}
        </div>
        <EmailDetail
          title={testData[currentIndex].subject + currentIndex}
          from={testData[currentIndex].senderName}
          body={testData[currentIndex].body}
          receptionTime={testData[currentIndex].receptionTime}
        />
      </div>
    </div>
  );
};

export default Home;
