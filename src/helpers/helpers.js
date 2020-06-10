import items from '../data';

export const generateRandomPairsArrangement = () => {
  let id = 0;
  const itemsCopy = [...items, ...items];
  const resultArray = [];

  while (itemsCopy.length > 0) {
    let randomIndex = Math.floor(Math.random() * itemsCopy.length);
    resultArray.push({
      id,
      value: itemsCopy.splice(randomIndex, 1)[0]
    });

    id += 1;
  }

  return resultArray;
};
