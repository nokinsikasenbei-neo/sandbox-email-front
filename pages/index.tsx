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
import Service from "../services/services";

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

const perPageEmail = 15;
let emailHashMap = new Map<string, Email[]>();

Modal.setAppElement("#root");

const maxEmails = (page: number) => {
  return (page + 1) * perPageEmail;
};

const calcPageStart = (page: number): number => {
  return page * perPageEmail + 1;
};

const calcPageEnd = (page: number, total: number) => {
  return Math.min(maxEmails(page), total);
};

const setEmailsFromHashMap = (key: string): Email[] => {
  const emails = emailHashMap.get(key);
  if (emails == undefined) {
    return [];
  }

  return emails;
};

const getHasNextPage = (total: number, page: number): boolean => {
  return total > calcPageEnd(page, total);
};

const service = new Service("http://localhost:8000");

const Home = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [menu, setMenu] = useState<string>("receive");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const p = service.getEmails();

    p.then((v: Email[]) => {
      emailHashMap.set("receive", v);
      emailHashMap.set("send", setupTestData(5));
      setEmails(v);
    }).catch((e) => console.log(e));
  }, [emails]);

  useEffect(() => {
    setHasNextPage(getHasNextPage(emails ? emails.length : 0, currentPage));
  }, [menu, emails, currentPage]);

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
            //setEmails(setEmailsFromHashMap("receive", emailHashMap));
          }
        }}
        onClickSendMenu={() => {
          if (menu != "send") {
            setMenu("send");
            //setEmails(setEmailsFromHashMap("send", emailHashMap));
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
                from={email.from}
                subject={email.subject}
                body={email.body}
                date={email.date}
                onClick={() => {
                  setCurrentIndex(i);
                }}
              />
            );
          })}
      </div>
      {emails.length > 0 ? (
        <EmailDetail key={1} email={emails[currentIndex]} />
      ) : (
        <p>Loading ...</p>
      )}
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: "fixed",
            bottom: 0,
            left: 0,
            background: "transparent",
          },
          content: {
            position: "absolute",
            backgroundColor: "#fff",
            borderRadius: "20px 20px 10px 10px",
            left: 20,
            top: "auto",
            bottom: 15,
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
