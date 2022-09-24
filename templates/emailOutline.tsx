import { css } from "@emotion/react";

const topContainerStyle = css`
  display: flex;
  width: 800px;
  height: 50px;
  align-items: center;
  background: #fff;
  margin-left: 20px;
`;

const fromStyle = css`
  background: #fff;
  white-space: nowrap;
  width: 150px;
  text-align: center;
  font-weight: bold;
`;

const titleStyle = css`
  background: #fff;
  white-space: nowrap;
  width: 250px;
  text-align: left;
`;

const textStyle = css`
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
  text-align: left;
`;

const receptionTimeStyle = css`
  background: #fff;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;

type Props = {
  from: string;
  title: string;
  text: string;
  receptionTime: string;
};

const EmailOutline = (props: Props) => {
  return (
    <div css={topContainerStyle}>
      <p css={fromStyle}>{props.from}</p>
      <p css={titleStyle}>{props.title}</p>
      <p css={textStyle}>{props.text}</p>
      <p css={receptionTimeStyle}>{props.receptionTime}</p>
    </div>
  );
};

export default EmailOutline;
