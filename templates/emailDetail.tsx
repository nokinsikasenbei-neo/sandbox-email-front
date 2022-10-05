import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Email, { UrlBlock } from "../models/email";
import utils from "../templates/utils";
import Service from "../services/services";

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
  text-decoration: underline;
`;

const attachmentContainer = css`
  display: flex;
  width: inherit;
  margin-top: 15px;
`;

const attachmentBox = css`
  width: 200px;
  height: 200px;
  background-color: #f5f5f5;
  margin-left: 10px;
  border-radius: 10px;
  border: solid;
  border-width: 0.5px;
  border-color: gray;
`;

const attachmentText = css`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

type Props = {
  email: Email;
};

const getSplitBodyText = (body: string, urls: string[]): string[] => {
  let splitTextList: string[] = [];
  let replacedBody = utils.replaceNewLineCode(body);
  const textList = utils.splitWithKey(replacedBody, "<br/>");

  splitTextList = textList;

  for (let i = 0; i < urls.length; i++) {
    splitTextList = utils.splitStringListWithKey(splitTextList, urls[i]);
  }

  return splitTextList;
};

class TextBlock {
  v: string = "";
  isDanger: boolean = false;
}

const createTextBlocks = (textList: string[], urls: string[]): TextBlock[] => {
  let blocks: TextBlock[] = [];

  for (let i = 0; i < textList.length; i++) {
    let block = new TextBlock();

    for (let j = 0; j < urls.length; j++) {
      if (textList[i] == urls[j]) {
        block.isDanger = true;
      }
    }

    block.v = textList[i];

    blocks.push(block);
  }

  return blocks;
};

const getUrlValues = (blocks: UrlBlock[]): string[] => {
  if (blocks === undefined) return [];
  if (blocks.length == 0) return [];
  return blocks.map((v: UrlBlock): string => {
    return v.value;
  });
};

const EmailDetail = (props: Props) => {
  const urls: string[] = getUrlValues(props.email.urlBlocks);
  const textList = getSplitBodyText(props.email.body, urls);
  const blocks = createTextBlocks(textList, urls);

  return (
    <div css={topContainerStyle}>
      <h1 css={titleStyle}>{props.email.subject}</h1>
      <div css={senderInfoContainerStyle}>
        <div>
          <Image src="/abatar.png" alt="abatar" width={40} height={40} />
        </div>
        <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
          {props.email.from}
        </div>
        <div>{props.email.date}</div>
      </div>
      <div css={bodyContainerStyle}>
        {blocks.map((block: TextBlock, i: number) => {
          return block.v == "<br/>" ? (
            <br key={i} />
          ) : block.isDanger ? (
            <a key={i} css={dangerUrlStyle} href={block.v}>
              {block.v}
            </a>
          ) : (
            block.v
          );
        })}
      </div>
      <div css={attachmentContainer}>
        <div css={attachmentBox}>
          <p css={attachmentText}>{props.email.attachment}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
