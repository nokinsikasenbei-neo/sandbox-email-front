import EmailOutline from "../templates/emailOutline";
import { css } from "@emotion/react";
import SideBar from "../templates/sidebar";
import EmailDetail from "../templates/emailDetail";
import setupTestData from "../testdata/testdata";
import Email from "../models/email";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import EmailCreater from "../templates/emailCreater";

const topContainerStyle = css`
  background-color: wheat;
  display: flex;
`;

const emailOutlineStyle = css`
  margin-top: 20px;
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  content: {
    position: "absolute",
    top: "5rem",
    left: "5rem",
    right: "5rem",
    bottom: "5rem",
    backgroundColor: "paleturquoise",
    borderRadius: "1rem",
    padding: "1.5rem",
  },
};

let testData = setupTestData(14);

Modal.setAppElement("#root");

const Home = () => {
  const [emails, setEmails] = useState<Email[] | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setEmails(testData);
  }, [emails]);

  return (
    <div id="root" css={topContainerStyle}>
      <SideBar
        onClickCreateButton={() => {
          setIsOpen(true);
        }}
      />
      <div css={emailOutlineStyle}>
        {emails?.map((email: Email, i: number) => {
          return (
            <EmailOutline
              key={i}
              from={email.senderName}
              title={email.subject}
              text={email.body}
              receptionTime={email.receptionTime}
              onClick={() => {
                setCurrentIndex(i);
              }}
            />
          );
        })}
      </div>
      <EmailDetail
        title={testData[currentIndex].subject + currentIndex}
        from={testData[currentIndex].senderName}
        body={testData[currentIndex].body}
        receptionTime={testData[currentIndex].receptionTime}
      />
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
