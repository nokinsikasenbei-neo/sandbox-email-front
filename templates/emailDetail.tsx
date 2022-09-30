import { css } from "@emotion/react";
import Image from "next/image";

const topContainerStyle = css`
  background-color: #fff;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 600px;
`;

const titleStyle = css`
  margin-left: 20px;
`;

const senderInfoContainerStyle = css`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const bodyContainerStyle = css`
  margin-left: 20px;
`;

const dangerUrlStyle = css`
  color: red;
  font-weight: bold;
`;

type Props = {
  title: string;
  from: string;
  body: string;
  receptionTime: string;
};

class TextObj {
  v: string = "";
  isDanger: boolean = false;
}

const EmailDetail = (props: Props) => {
  let textObjs: TextObj[] = [];

  const renderBody = (body: string, url: string) => {
    let replacedBody = replaceNewLineCode(body);
    console.log(replacedBody);
    convertTextToHTML(replacedBody, url);

    return (
      <div css={bodyContainerStyle}>
        {textObjs.map((obj: TextObj, i: number) => {
          return (
            <div key={i}>
              {obj.v.split("<br />").map((v: string, i: number) => {
                console.log(v);
                return v == "<br />" ? (
                  <br />
                ) : obj.isDanger ? (
                  <p css={dangerUrlStyle}>{v}</p>
                ) : (
                  <p>{v}</p>
                );
              })}
            </div>
          );
        })}
        ;
      </div>
    );
  };

  const replaceNewLineCode = (text: string): string => {
    return text.replace(/\\r?\\n/g, "<br />");
  };

  const convertTextToHTML = (text: string, url: string) => {
    const pos = text.indexOf(url, 0);
    if (pos == -1) {
      let obj = new TextObj();
      obj.v = text;
      obj.isDanger = false;
      textObjs.push(obj);
      return;
    }

    let front = new TextObj();
    front.v = text.substring(0, pos);
    front.isDanger = false;

    let middle = new TextObj();
    middle.v = text.substring(pos, pos + url.length);
    middle.isDanger = true;

    textObjs.push(front);
    textObjs.push(middle);

    let back = text.substring(pos + url.length, text.length);
    convertTextToHTML(back, url);
  };

  return (
    <div css={topContainerStyle}>
      <h1 css={titleStyle}>{props.title}</h1>
      <div css={senderInfoContainerStyle}>
        <div>
          <Image src="/abatar.png" alt="abata" width={40} height={40} />
        </div>
        <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
          <text>Tomoya Suzuki ({props.from})</text>
        </div>
      </div>
      {renderBody(props.body, "https://example.com")}
    </div>
  );
};

export default EmailDetail;
