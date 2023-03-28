let btn = document.querySelectorAll('.btn-style')
let computershow = document.querySelector('#computerPlay')
let endshow = document.querySelector('#result')



btn.forEach( (btn) =>{
    btn.addEventListener('click', (e) => {  
    e.preventDefault();
    randoming();
    computerPlays(e);
  })
})
const randoming = () => {
    const random = [
 '<i class="far fa-hand-rock"></i>',
 '<i class="far fa-hand-scissors"></i>',
 '<i class="far fa-hand-paper"></i>'
];
 let randomIcon = random[Math.floor(Math.random() * random.length)];
 computershow.innerHTML = randomIcon;
 computershow.style.fontSize ="70px"
 computershow.style.color ="red"
 computershow.style.textAlign ="center"
};

const computerPlays = (x) => {
    let chosenIcon = x.target.className;
    let chosenByPc = computershow.innerHTML
    let resultBanner = endshow
    
    if(
      (chosenIcon.includes("scissors") && chosenByPc.includes("paper")) || 
      (chosenIcon.includes("rock") && chosenByPc.includes("scissors")) ||
      (chosenIcon.includes("paper") && chosenByPc.includes("rock"))
        ) { 
        resultBanner.innerHTML = "ایول بردی"
      }
    else if (
        (chosenIcon.includes("scissors") && chosenByPc.includes("rock")) ||
        (chosenIcon.includes("rock") && chosenByPc.includes("paper")) ||
        (chosenIcon.includes("paper") && chosenByPc.includes("scissors"))
      ) {
      resultBanner.innerHTML = "اه باختی"
    }
    else {
      resultBanner.innerHTML = "اعه مساوی"
    }
    resultBanner.style.fontSize = "50px"
  }

  let body = document.querySelector("body")
