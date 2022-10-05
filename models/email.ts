export class UrlBlock {
  value: string = "";
  isDanger: boolean = false;
}

class Email {
  id: string;
  from: string;
  subject: string;
  date: string;
  body: string;
  attachment: string;
  urlBlocks: UrlBlock[];

  constructor(
    id: string,
    from: string,
    subject: string,
    date: string,
    body: string,
    attachment: string,
    urlBlocks: UrlBlock[]
  ) {
    this.id = id;
    this.from = from;
    this.subject = subject;
    this.body = body;
    this.attachment = attachment;
    this.urlBlocks = urlBlocks;

    const tmpArr: RegExpMatchArray | null = date.match(/..:../);
    if (tmpArr) {
      this.date = tmpArr[0].toString();
    } else {
      this.date = "00:00:00";
    }
  }
}

export default Email;
