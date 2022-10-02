import { css } from "@emotion/react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { BsPencilFill } from "react-icons/bs";
import { FiCodesandbox } from "react-icons/fi";

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

const sideBarContentStyle = css`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  margin-left: -5px;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
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

const menuTextStyle = css`
  font-size: 15px;
`;

const SideBar = () => {
  return (
    <div css={sideBarStyle}>
      <div css={sideBarContentStyle}>
        <FiCodesandbox css={logoStyle} />
        <text css={titleStyle}>Sandbox Email</text>
      </div>
      <button css={createEmailButtonStyle}>
        <BsPencilFill css={pencilIconStyle} /> 作成
      </button>
      <div css={sideContentStyle}>
        <MdOutlineEmail css={iconStyle} />
        <text css={menuTextStyle}>受信トレイ</text>
      </div>
      <div css={sideContentStyle}>
        <SiMinutemailer css={iconStyle} />
        <text css={menuTextStyle}>送信済み</text>
      </div>
    </div>
  );
};

export default SideBar;
