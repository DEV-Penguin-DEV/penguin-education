const getRandomNumber = (from = 0, to = 1) => {
  if (from < 0 || to < 0) { return 0; }
  if (from === to) { return from; }
  if (from > to) { return 0; }

  return Math.round(Math.random() * (to - from) + from);
};

const getRandomArrayElement = (list) => list[getRandomNumber(0, (list.length - 1))];

const getNameForServer = (name) => {
  return name.toLocaleLowerCase().replace(/ /ig, '-');
}

const changeElement = (element1, ...elements) => {
  element1.innerHTML = '';
  elements.forEach((element) => {
    element1.append(element);
  });
}

export { getRandomNumber, getRandomArrayElement, getNameForServer, changeElement }
