import { css } from "@emotion/react";

const topContainerStyle = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

const titleBarStyle = css`
  display: flex;
  background-color: #f2f6fc;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const titleStyle = css`
  color: #23589f;
  font-weight: bolder;
  font-size: 15px;
  margin-left: 15px;
`;

const closeButtonStyle = css`
  width: 40px;
  height: 20px;
  background-color: #f2f6fc;
  border: none;
`;

const targetBarStyle = css`
  border-bottom: solid;
  border-width: 1px;
  border-color: #eceff1;
  margin-top: 8px;
  margin-left: 15px;
`;

const targetTextStyle = css`
  color: #80798d;
`;

const targetInputStyle = css`
  border: none;
  outline: none;
  margin-left: 5px;
  width: 90%;
  font-size: 15px;
`;

const subjectBarStyle = css`
  border-bottom: solid;
  border-width: 1px;
  border-color: #eceff1;
  margin-top: 8px;
  margin-left: 15px;
`;

const subjectTextStyle = css`
  color: #80798d;
`;

const subjectInputStyle = css`
  border: none;
  outline: none;
  margin-left: 5px;
  width: 90%;
  font-size: 15px;
`;

const bodyContainer = css`
  width: 540px;
  height: 95%;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 10px;
`;

const bodyStyle = css`
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
`;

const sendButtonContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  background-color: #fff;
`;

const sendButotn = css`
  background-color: #0b57d0;
  color: #fff;
  font-weight: bold;
  border-radius: 18px;
  width: 100px;
  height: 40px;
  margin-bottom: 15px;
  margin-right: 10px;
  border: none;
`;

type Props = {
  onClickCloseButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EmailCreater = (props: Props) => {
  return (
    <div css={topContainerStyle}>
      <div css={titleBarStyle}>
        <text css={titleStyle}>新規メッセージ</text>
        <button css={closeButtonStyle} onClick={props.onClickCloseButton}>
          X
        </button>
      </div>
      <div css={targetBarStyle}>
        <text css={targetTextStyle}>宛先</text>
        <input css={targetInputStyle} />
      </div>
      <div css={subjectBarStyle}>
        <text css={subjectTextStyle}>件名</text>
        <input css={subjectInputStyle} />
      </div>
      <div css={bodyContainer}>
        <textarea css={bodyStyle} />
      </div>
      <div css={sendButtonContainerStyle}>
        <button css={sendButotn}>送信</button>
      </div>
    </div>
  );
};

export default EmailCreater;
