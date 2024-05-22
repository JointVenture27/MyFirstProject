document.getElementById("submitBtn").addEventListener("click", getAnswer);

function getAnswer() {
    const responses = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later", 
    "For sure", 
   "Absolutely not", 
   "Very doubtful", 
   "It is certain", 
   "In due time"];
    
   const randomIndex = randomNumber(0, responses.length) 
   const answer = responses[randomIndex] 

   document.getElementById("answer").innerText = answer;
    }



function randomNumber(min,max) { 
    return Math.floor(Math.random() * (max - min) + min);
    

} 
