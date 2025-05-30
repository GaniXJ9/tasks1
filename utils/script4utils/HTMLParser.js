function HTMLParser(structure) {
  let i = 0;

  function parseNode() {
    if (structure[i] !== "<") {
      return null;
    }

    i++;

    let tag = "";
    while (structure[i] !== ">") {
      tag += structure[i++];
    }

    i++;

    let children = [];

    while (
      structure[i] &&
      structure.slice(i, i + 2 + tag.length) !== `</${tag}`
    ) {
      if (structure[i] === "<") {
        let child = parseNode();
        if (child) {
          children.push(child);
        }
      } else {
        let text = "";
        while (structure[i] && structure[i] !== "<") {
          text += structure[i++];
        }
        if (text.trim()) {
          children.push(text);
        }
      }
    }

    i += 3 + tag.length;
    return { tag, children };
  }

  return parseNode();
}

module.exports = HTMLParser;
