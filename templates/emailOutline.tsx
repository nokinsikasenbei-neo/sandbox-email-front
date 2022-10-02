import { css } from "@emotion/react";
import Image from "next/image";

const topContainerStyle = css`
  display: flex;
  width: 800px;
  height: 50px;
  align-items: center;
  background: #fff;
  margin-left: 20px;
  border-bottom: solid;
  border-width: 1px;
  border-color: #eceff1;
`;

const readStyle = css`
  display: flex;
  width: 800px;
  height: 50px;
  align-items: center;
  background: #f2f6fc;
  margin-left: 20px;
`;

const fromStyle = css`
  background: inherit;
  white-space: nowrap;
  width: 150px;
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
`;

const titleStyle = css`
  background: inherit;
  white-space: nowrap;
  width: 250px;
  text-align: left;
`;

const textStyle = css`
  background: inherit;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
  text-align: left;
  margin-left: 10px;
`;

const imageStyle = css`
  margin-left: 10px;
`;

const receptionTimeStyle = css`
  background: inherit;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;

type Props = {
  from: string;
  title: string;
  text: string;
  receptionTime: string;
  read: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const EmailOutline = (props: Props) => {
  return (
    <div
      css={props.read ? readStyle : topContainerStyle}
      onClick={props.onClick}
    >
      <div css={imageStyle}>
        <Image src="/abatar.png" alt="abata" width={40} height={40} />
      </div>
      <p css={fromStyle}>{props.from}</p>
      <p css={titleStyle}>{props.title}</p>
      <p css={textStyle}>{"- " + props.text}</p>
      <p css={receptionTimeStyle}>{props.receptionTime}</p>
    </div>
  );
};

export default EmailOutline;
