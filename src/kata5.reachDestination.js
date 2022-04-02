const reachDestination = (distance, speed) => {
  const time = distance / speed;
  console.log('i am the time variable',time)
  return `I should be there in ${time} hours.`;
};

module.exports = reachDestination;
