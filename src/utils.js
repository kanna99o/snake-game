const getRandomNumber = number => 2 + Math.floor(Math.random()*number/2)*2

const getRandomFood = snakeDots => {
  const result = [ getRandomNumber(96), getRandomNumber(96) ];

  if(snakeDots.some(dot => dot[0] === result[0] && dot[1] === result[1])){
    return getRandomFood(snakeDots);
  }

  return result;
}

export { getRandomFood };