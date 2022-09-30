import Email from "../models/email";
import EmailDetail from "../templates/emailDetail";

const setupTestData = (num: number) => {
  const testData: Email[] = [];

  let email = new Email();
  email.subject = "Hello👋 This is just a test email !!";
  email.senderName = "Test Account";
  email.senderAddr = "hugahuga@hoge.com";
  email.body =
    "hoge様\r\n\r\n役員会の資料をお送りいたします。\r\n以下のリンクから資料に アクセスできます。\r\nhttps://example.com\r\n\r\nよろしく  お願いいたします。https://example.com \r\n\r\nhuga\r\n";
  email.receptionTime = "22:00";

  for (let i = 0; i < num; i++) {
    testData.push(email);
  }

  return testData;
};

export default setupTestData;
