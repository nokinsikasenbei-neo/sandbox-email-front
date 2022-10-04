class Email {
  id: string;
  from: string;
  subject: string;
  date: string;
  body: string;
  attachment: string;

  constructor(
    id: string,
    from: string,
    subject: string,
    date: string,
    body: string,
    attachment: string
  ) {
    this.id = id;
    this.from = from;
    this.subject = subject;
    this.body = body;
    this.attachment = attachment;

    const tmpArr: RegExpMatchArray | null = date.match(/..:../);
    if (tmpArr) {
      this.date = tmpArr[0].toString();
    } else {
      this.date = "00:00:00";
    }
  }
}

export default Email;
