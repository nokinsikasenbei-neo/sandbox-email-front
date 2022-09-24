import EmailOutline from "../templates/emailOutline";
import { css } from "@emotion/react";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { BsPencilFill } from "react-icons/bs";
import { FiCodesandbox } from "react-icons/fi";

const topContainerStyle = css`
  background-color: wheat;
  display: flex;
`;

const createEmailButtonStyle = css`
  width: 120px;
  height: 60px;
  background: #87cefa;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
  font-weight: bold;

  &:hover {
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.65);
  }
`;

const pencilIconStyle = css`
  width: 17px;
  height: 17px;
  margin-right: 14px;
  margin-left: -10px;
`;

const sideBarStyle = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background: #f5f5f5;
`;

const sideContentStyle = css`
  display: flex;
  align-items: center;
  width: 200px;
`;

const logoStyle = css`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const iconStyle = css`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

type Email = {
  from: string;
  title: string;
  text: string;
  receptionTime: string;
};

const emails: Email[] = [
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
  {
    from: "Test user",
    title: "[title] test title",
    text: "[text] test test test test test",
    receptionTime: "22:00",
  },
];

const Home = () => {
  return (
    <div css={topContainerStyle}>
      <div css={sideBarStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginTop: "10px",
            marginLeft: "-5px",
          }}
        >
          <FiCodesandbox css={logoStyle} />
          <text
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "10px ",
            }}
          >
            Sandbox Email
          </text>
        </div>
        <button css={createEmailButtonStyle}>
          <BsPencilFill css={pencilIconStyle} /> 作成
        </button>
        <div css={sideContentStyle}>
          <MdEmail css={iconStyle} />
          <text style={{ fontSize: "15px" }}>受信トレイ</text>
        </div>
        <div css={sideContentStyle}>
          <SiMinutemailer css={iconStyle} />
          <text style={{ fontSize: "15px" }}>送信済み</text>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {emails.map((email: Email, i: number) => {
          return (
            <EmailOutline
              key={i}
              from={email.from}
              title={email.title}
              text={email.text}
              receptionTime={email.receptionTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
