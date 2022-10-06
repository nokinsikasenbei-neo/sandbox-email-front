import Email, { UrlBlock } from "../models/email";

const setupTestData = (num: number) => {
  const testData: Email[] = [];

  for (let i = 0; i < num; i++) {
    const testBody =
      "hoge様\\r\\n\\r\\n役員会の資料をお送りいたします。\\r\\n以下のリンクから資料に\
      アクセスできます。\\r\\n\\r\\nリンク : https://example.com\\r\\n\\r\\nよろしくお願いいたします。\\r\\n\\r\\n\
      上記のリンクが閲覧出来ない場合は https://hogehuga.com からお願いします。\\r\\n\\r\\n\
      お時間あれば、https://example.com も見て頂けますと幸いです。\\r\\n";

    const blocks: UrlBlock[] = [];
    for (let i = 0; i < 2; i++) {
      let b = new UrlBlock();
      if (i == 0) {
        b.value = "http://example.com";
        b.isDanger = true;
      } else {
        b.value = "http://hogehuga.com";
        b.isDanger = false;
      }

      blocks.push(b);
    }

    let email = new Email(
      "id",
      "Test Account <test@test.com>",
      "Hello👋 This is just a test email !!!!!!!!!!!!!!",
      "22:00",
      testBody,
      "",
      blocks
    );
    testData.push(email);
  }

  return testData;
};

export default setupTestData;
