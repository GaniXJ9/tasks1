function groupBy(objArr, groupKey) {
  let groupedObj = {};

  for (let obj of objArr) {
    for (let key in obj) {
      if (key === groupKey) {
        let inGruop = objArr.filter((el) => {
          return el[key] === obj[key];
        });

        groupedObj[obj[key]] = [];

        groupedObj[obj[key]].push(...inGruop);
      }
    }
  }

  return groupedObj;
}

module.exports = groupBy;
