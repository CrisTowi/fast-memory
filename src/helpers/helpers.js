import items from '../data';

export const generateRandomPairsArrangement = () => {
  const itemsCopy = [...items, ...items];
  const resultArray = [];

  while (itemsCopy.length > 0) {
    let randomIndex = Math.floor(Math.random() * itemsCopy.length)
    resultArray.push(itemsCopy.splice(randomIndex, 1)[0])
  }

  console.log(resultArray);
  return resultArray;
};
