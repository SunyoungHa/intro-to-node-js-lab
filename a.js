// dog-age-calculator.js

const calculateDogYears = humanYears => {
  if (humanYears === 1) {
    return 15;
  } else if (humanYears === 2) {
    return 15 + 9;
  } else {
    return 15 + 9 + (humanYears - 2) * 5;
  }
};

const [dogName, humanAge] = process.argv.slice(2);

if (!dogName || !humanAge || isNaN(humanAge)) {
  console.log("사용법: node dog-age-calculator.js <개이름> <인간나이>");
} else {
  const dogAge = calculateDogYears(parseInt(humanAge));
  console.log(`당신의 개, ${dogName},은(는) ${humanAge}살이지만, 이는 개 나이로 환산하면 ${dogAge}살 입니다!`);
}
