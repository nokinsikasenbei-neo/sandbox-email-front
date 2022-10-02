import { css } from "@emotion/react";
import { AiFillMail } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { FiCodesandbox } from "react-icons/fi";

const createEmailButtonStyle = css`
  width: 120px;
  height: 60px;
  background: #d3e3fd;
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
  font-weight: 500;

  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.45);
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
  width: 180px;
  border-radius: 0px 20px 20px 0px;

  &:hover {
    background-color: #ecf0f0;
  }
`;

const currentSideContent = css`
  display: flex;
  align-items: center;
  width: 180px;
  border-radius: 0px 20px 20px 0px;
  background-color: #d3e3fd;
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
  font-weight: 500;
  margin-left: 10px;
`;

const logoStyle = css`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const iconStyle = css`
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  color: gray;
`;

const menuTextStyle = css`
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
`;

type Props = {
  currentMenu: string;
  onClickCreateButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickReceiveMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickSendMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const SideBar = (props: Props) => {
  return (
    <div css={sideBarStyle}>
      <div css={sideBarContentStyle}>
        <FiCodesandbox css={logoStyle} />
        <text css={titleStyle}>Sandbox Email</text>
      </div>
      <button css={createEmailButtonStyle} onClick={props.onClickCreateButton}>
        <BsPencilFill css={pencilIconStyle} /> 作成
      </button>
      <div
        css={
          props.currentMenu == "receive" ? currentSideContent : sideContentStyle
        }
        onClick={props.onClickReceiveMenu}
      >
        <AiFillMail size="1.4em" css={iconStyle} color="gray" />
        <text css={menuTextStyle}>受信トレイ</text>
      </div>
      <div
        css={
          props.currentMenu == "send" ? currentSideContent : sideContentStyle
        }
        onClick={(event) => {
          props.onClickSendMenu(event);
        }}
      >
        <IoSendSharp size="1.4em" css={iconStyle} />
        <text css={menuTextStyle}>送信済み</text>
      </div>
    </div>
  );
};

export default SideBar;
