import Email from "../models/email";

const setupTestData = (num: number) => {
  const testData: Email[] = [];

  for (let i = 0; i < num; i++) {
    let email = new Email();
    email.subject = "Hello👋 This is just a test email !!!!!!!!!!!!!!";
    email.senderName = "Test Account !!!!!!!!!てすとてすと";
    email.senderAddr = "hugahuga@hoge.com !!!!!!!!!!!!!!!!!!!!!!!!";
    email.body =
      "hoge様\\r\\n\\r\\n役員会の資料をお送りいたします。\\r\\n以下のリンクから資料に\
      アクセスできます。\\r\\n\\r\\nリンク : https://example.com\\r\\n\\r\\nよろしくお願いいたします。\\r\\n\\r\\n\
      上記のリンクが閲覧出来ない場合は https://hogehuga.com からお願いします。\\r\\n\\r\\n\
      お時間あれば、https://example.com も見て頂けますと幸いです。\\r\\n";
    email.receptionTime = "22:00";

    if (i % 2 == 0) {
      email.read = true;
    }
    testData.push(email);
  }

  return testData;
};

export default setupTestData;
