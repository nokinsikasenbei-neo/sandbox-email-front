import Email, { UrlBlock } from "../models/email";

type Response = {
  messages: Email[];
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
        emails.push(
          new Email(
            messages[i]["id"],
            messages[i]["from"],
            messages[i]["subject"],
            messages[i]["date"],
            messages[i]["body"],
            messages[i]["attachment"],
            messages[i]["url_results"] as UrlBlock[]
          )
        );
      }

      return emails;
    } catch (e) {
      console.log(e);
    }

    return emails;
  }
}

export default Service;
