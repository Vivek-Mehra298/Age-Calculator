const calculateAgeButton = document.querySelector('button');
const outputPara = document.getElementById('output-para');

calculateAgeButton.addEventListener('click', () => {
  const birthdate = new Date(document.getElementById('input-box').value);
  const today = new Date();
  // console.log(birthdate);
  // console.log(today);

   // Calculate age in milliseconds
   const ageInMilliseconds = today - birthdate;

   // Convert milliseconds to years and days
   const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
   const remainingDays = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

  outputPara.textContent = `You are ${years} years and ${remainingDays} days old.`;
});