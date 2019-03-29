// https://projecteuler.net/problem=1

const multipleOfThreeAndFive = (limit) => {
  const group = [];
  for(let i = 3; i < limit; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      group.push(i);
    }
  }
  return {
    group,
    sum: group.reduce((a,b) => a+b, 0)
  }
}

export default multipleOfThreeAndFive;