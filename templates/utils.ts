function splitWithKey(str: string, key: string): string[] {
  const strList: string[] = [];
  let lastIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + key.length) == key) {
      let before = str.substring(lastIndex, i);
      let after = str.substring(i, i + key.length);
      strList.push(before);
      strList.push(after);
      lastIndex = i + key.length;
    }

    if (i + key.length == str.length) {
      strList.push(str.substring(lastIndex, str.length));
    }
  }

  return strList;
}

function splitStringListWithKey(strList: string[], key: string): string[] {
  let newStrList: string[] = [];

  for (let i = 0; i < strList.length; i++) {
    if (strList[i].indexOf(key) == -1) {
      newStrList.push(strList[i]);
    } else {
      let tmp = splitWithKey(strList[i], key);
      newStrList = newStrList.concat(tmp);
    }
  }

  return newStrList;
}

function replaceNewLineCode(text: string): string {
  return text.replace(/\r?\n/g, "<br/>");
}

const utils = {
  splitWithKey,
  splitStringListWithKey,
  replaceNewLineCode,
};

export default utils;
