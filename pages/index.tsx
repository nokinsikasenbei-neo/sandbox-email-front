import EmailOutline from "../templates/emailOutline";
import { css } from "@emotion/react";
import SideBar from "../templates/sidebar";
import EmailDetail from "../templates/emailDetail";
import setupTestData from "../testdata/testdata";
import Email from "../models/email";
import { useEffect, useState } from "react";

const topContainerStyle = css`
  background-color: wheat;
  display: flex;
`;

const emailOutlineStyle = css`
  margin-top: 20px;
`;

const apiUrl = "localhost:8000";
let testData = setupTestData(14);

const Home = () => {
  const [emails, setEmails] = useState<Email[] | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setEmails(testData);
  }, [emails]);

  return (
    <div css={topContainerStyle}>
      <SideBar />
      <div css={emailOutlineStyle}>
        {emails?.map((email: Email, i: number) => {
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
  );
};

export default Home;
