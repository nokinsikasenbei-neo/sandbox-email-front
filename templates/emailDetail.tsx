import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Email from "../models/email";
import utils from "../templates/utils";

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

type Props = {
  email: Email;
  dangerUrls: string[];
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

const EmailDetail = (props: Props) => {
  const dangerUrls = props.dangerUrls;
  const { subject, from, body } = props.email;
  const textList = getSplitBodyText(body, dangerUrls);
  const blocks = createTextBlocks(textList, dangerUrls);

  return (
    <div css={topContainerStyle}>
      <h1 css={titleStyle}>{subject}</h1>
      <div css={senderInfoContainerStyle}>
        <div>
          <Image src="/abatar.png" alt="abatar" width={40} height={40} />
        </div>
        <div style={{ marginLeft: "10px", fontWeight: "bold" }}>{from}</div>
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
    </div>
  );
};

export default EmailDetail;
