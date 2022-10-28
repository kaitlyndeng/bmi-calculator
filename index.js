const Bob = {
  name: "Bob",
  height: 175, 
  weight: 70,
};

function getBMI(user){
  const height = user.height
  const weight = user.weight
  return bmi = (weight / ((height/100)**2))
}

function compareBMI(bmi){
  if (bmi <= 18.5) {
    console.log("underweight");
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    console.log("healthy");
  } else if (bmi >= 25) {
    console.log("unhealthy");
  }
    else {
    console.log('error');
  }
}

function init(user){
const BMI = getBMI(user)
compareBMI(BMI)
}

init(Bob)
