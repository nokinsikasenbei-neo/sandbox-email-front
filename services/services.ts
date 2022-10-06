import Email, { UrlBlock } from "../models/email";

type Response = {
  messages: Email[];
};

const createUrlBlocks = (blocks: any[]): UrlBlock[] => {
  let urlBlocks: UrlBlock[] = [];

  if (blocks === undefined) return [];
  if (blocks.length == 0) return [];

  for (let i = 0; i < blocks.length; i++) {
    let newB = new UrlBlock();
    newB.is_danger = blocks[i]["is_danger"];
    newB.value = blocks[i]["value"];
    urlBlocks.push(newB);
  }

  return urlBlocks;
};

class Service {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getEmails(): Promise<Email[]> {
    let resBody: Response;
    let emails: Email[] = [];

    try {
      const response = await fetch("http://localhost:8000/messages", {
        method: "GET",
      });
      const json = await response.json();
      const messages = json["messages"];

      for (let i = 0; i < messages.length; i++) {
        let email = new Email(
          messages[i]["id"],
          messages[i]["from"],
          messages[i]["subject"],
          messages[i]["date"],
          messages[i]["body"],
          messages[i]["attachment"],
          messages[i]["url_results"] as UrlBlock[]
        );

        emails.push(email);
      }

      return emails;
    } catch (e) {
      console.log(e);
    }

    return emails;
  }
}

export default Service;
