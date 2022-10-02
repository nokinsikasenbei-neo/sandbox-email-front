import EmailOutline from "../templates/emailOutline";
import { css } from "@emotion/react";
import SideBar from "../templates/sidebar";
import EmailDetail from "../templates/emailDetail";
import setupTestData from "../testdata/testdata";
import Email from "../models/email";

const topContainerStyle = css`
  background-color: wheat;
  display: flex;
`;

const emailOutlineStyle = css`
  margin-top: 20px;
`;

let testData = setupTestData(14);

const Home = () => {
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
              />
            );
          })}
        </div>
        <EmailDetail
          title="Hello👋 This is just a test email !!"
          from="hugahuga@hoge.com"
          body="hoge様\r\n\r\n役員会の資料を     お送りいたします。\r\n以下のリンクから資料に アクセスできます。\r\nhttps://example.com\r\n\r\nよろしく  お願いいたします。https://example.com \r\n\r\nhuga\r\n"
          receptionTime="22:00"
        />
      </div>
    </div>
  );
};

export default Home;
