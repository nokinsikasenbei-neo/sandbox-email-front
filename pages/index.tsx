import EmailOutline from "../templates/emailOutline";
import { css } from "@emotion/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SideBar from "../templates/sidebar";
import EmailDetail from "../templates/emailDetail";
import setupTestData from "../testdata/testdata";
import Email from "../models/email";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import EmailCreater from "../templates/emailCreater";

const topContainerStyle = css`
  background-color: #ecf0f0;
  display: flex;
`;

const emailOutlineStyle = css`
  margin-top: 20px;
`;

const outlineMenu = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 5px;
`;

const pagerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const pageCount = css`
  width: 150px;
  text-align: right;
  margin-right: 10px;
`;

const pageCountText = css`
  font-size: 17px;
  color: #7a7a7a;
  height: 25px;
`;

const leftIconStyle = css`
  margin-right: 30px;
  size: 20px;
`;

const lightLeftIcon = css`
  margin-right: 30px;
  size: 20px;
  color: gray;
  pointer-events: none;
`;

const rightIconStyle = css`
  margin-right: 10px;
  size: 20px;
`;

const lightRightIcon = css`
  margin-right: 10px;
  size: 20px;
  color: gray;
  pointer-events: none;
`;

let perPageEmail = 15;
let emailHashMap = new Map<string, Email[]>();

Modal.setAppElement("#root");

const calcPageStart = (page: number): number => {
  return page * perPageEmail + 1;
};

const calcPageEnd = (page: number, total: number) => {
  if (total < perPageEmail) return total;

  if ((page + 1) * perPageEmail > total) return total;

  return (page + 1) * perPageEmail;
};

const getEmails = (key: string): Email[] => {
  const emails = emailHashMap.get(key);
  if (emails == undefined) {
    return [];
  }

  return emails;
};

const getCurrentPageEmailLength = (total: number, page: number) => {
  if (total < perPageEmail) {
    return total;
  }

  return total - (page + 1) * perPageEmail;
};

const getHasNextPage = (total: number, page: number): boolean => {
  return total > calcPageEnd(page, total);
};

const Home = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [menu, setMenu] = useState<string>("receive");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [pageStart, setPageStart] = useState<number>(0);
  const [pageEnd, setPageEnd] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    emailHashMap.set("receive", setupTestData(70));
    emailHashMap.set("send", setupTestData(5));

    setEmails(getEmails(menu));
    setHasNextPage(getHasNextPage(emails.length, currentPage));
  }, [emails, menu, currentPage]);

  return (
    <div id="root" css={topContainerStyle}>
      <SideBar
        currentMenu={menu}
        onClickCreateButton={() => {
          setIsOpen(true);
        }}
        onClickReceiveMenu={() => {
          if (menu != "receive") {
            setMenu("receive");
            setEmails(getEmails("receive"));
          }
        }}
        onClickSendMenu={() => {
          if (menu != "send") {
            setMenu("send");
            setEmails(getEmails("send"));
          }
        }}
      />
      <div css={emailOutlineStyle}>
        <div css={outlineMenu}>
          <div css={pagerContainer}>
            <div css={pageCount}>
              <text css={pageCountText}>
                {calcPageStart(currentPage) +
                  " - " +
                  calcPageEnd(currentPage, emails.length) +
                  " / "}
              </text>
              <text css={pageCountText}>{emails.length}</text>
            </div>
            <div>
              <AiOutlineArrowLeft
                css={currentPage == 0 ? lightLeftIcon : leftIconStyle}
                onClick={() => {
                  setPage(currentPage - 1);
                }}
              />
              <AiOutlineArrowRight
                css={hasNextPage ? rightIconStyle : lightRightIcon}
                onClick={() => {
                  setPage(currentPage + 1);
                }}
              />
            </div>
          </div>
        </div>
        {emails
          .slice(
            calcPageStart(currentPage) - 1,
            calcPageStart(currentPage) - 1 + perPageEmail
          )
          .map((email: Email, i: number) => {
            return (
              <EmailOutline
                key={i}
                from={email.senderName}
                title={email.subject}
                text={email.body}
                receptionTime={email.receptionTime}
                read={email.read}
                onClick={() => {
                  setCurrentIndex(i);
                }}
              />
            );
          })}
      </div>
      {emails.length > 0 ? (
        <EmailDetail
          key={1}
          title={emails[currentIndex].subject + currentIndex}
          from={emails[currentIndex].senderName}
          body={emails[currentIndex].body}
          receptionTime={emails[currentIndex].receptionTime}
        />
      ) : undefined}
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            background: "transparent",
          },
          content: {
            position: "absolute",
            backgroundColor: "#fff",
            borderRadius: "20px 20px 10px 10px",
            top: "250px",
            left: "20px",
            width: "550px",
            height: "550px",
            padding: "0px",
          },
        }}
      >
        <EmailCreater
          onClickCloseButton={() => {
            setIsOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default Home;
