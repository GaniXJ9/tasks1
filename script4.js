// // Task 1
let fruits = [
  { type: "fruit", name: "apple", color: "red", count: 1 },
  { type: "veg", name: "carrot", color: "orange", count: 2 },
  { type: "veg", name: "onion", color: "white", count: 4 },
  { type: "fruit", name: "banana", color: "yellow", count: 1 },
  { type: "fruit", name: "pear", color: "green", count: 2 },
  { type: "veg", name: "cucumber", color: "green", count: 1 },
  { type: "fruit", name: "mango", color: "orange", count: 4 },
  { type: "berry", name: "strawberry", color: "red", count: 1 },
  { type: "berry", name: "blueberry", color: "purple", count: 4 },
  { type: "veg", name: "beetroot", color: "purple", count: 3 },
  { type: "berry", name: "raspberry", color: "pink", count: 1 },
  { type: "berry", name: "cherries", color: "red", count: 1 },
  { type: "berry", name: "currant", color: "pink", count: 4 },
  { type: "fruit", name: "orange", color: "orange", count: 2 },
];

function groupBy(objArr, groupKey) {
  let groupedObj = {};

  for (let obj of objArr) {
    for (let key in obj) {
      if (key === groupKey) {
        let inGruopFruits = objArr.filter((el) => {
          return el[key] === obj[key];
        });

        groupedObj[obj[key]] = [];

        groupedObj[obj[key]].push(...inGruopFruits);
      }
    }
  }

  return groupedObj;
}

console.log(groupBy(fruits, "type"));
console.log(groupBy(fruits, "color"));
console.log(groupBy(fruits, "count"));

// // Task 2

// function charFrequency(word) {
//   let result = {};

//   for (let letter of word) {
//     if (!result.hasOwnProperty(letter))
//       result[letter] = word.split("").reduce((initNum, item) => {
//         if (item === letter) {
//           initNum++;
//         }
//         return initNum;
//       }, 0);
//   }

//   return result;
// }
// console.log(charFrequency("banana"));
// console.log(charFrequency("apple"));

// Output: { b: 1, a: 3, n: 2 }

// Task 3

function chunk(arr, itemCount, result = []) {
  let count = 0;
  let group = [];

  for (let item of arr) {
    if (count < itemCount) {
      group.push(item);
      count++;
      if (!result.includes(group)) {
        result.push(group);
      }
    } else {
      let newArr = arr.splice(itemCount);
      chunk(newArr, itemCount, result);
    }
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));

// // Output: [[1, 2], [3, 4], [5]]

// Task 4
// HTML-like Parser

function HTMLParser(structure) {
  let i = 0;

  function parseNode() {
    if (structure[i] !== "<") return null;

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
        if (child) children.push(child);
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

console.log(
  JSON.stringify(HTMLParser("<div>Hello <b>world</b>!</div>"), null, 2)
);

// "<div>Hello <b>world</b>!</div>"
// {
//   tag: 'div',
//   children: [
//     'Hello ',
//     { tag: 'b', children: ['world'] },
//     '!'
//   ]
// }
