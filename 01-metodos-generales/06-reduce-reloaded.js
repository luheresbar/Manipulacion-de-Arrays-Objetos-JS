//* REDUCE - TOMA UN ARRAY Y LO REDUCE A UN SOLO VALOR
//* Inmutable

const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

//* Por rangos
const items3 = [2, 7, 4, 5, 1, 3, 8, 10, 6, 9, 1, 3, 7, 8, 5];

const ranges = {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
};

items3.forEach(item => {
    if (item >= 1 && item <= 5) {
        ranges["1-5"]++;
    } else if (item >= 6 && item <= 8) {
        ranges["6-8"]++;
    } else if (item >= 9 && item <= 10) {
        ranges["9-10"]++;
    }
});
console.log(ranges);