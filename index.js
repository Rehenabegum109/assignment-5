
// **heart icon**
document.addEventListener('DOMContentLoaded',function(){


const hearts =document.querySelectorAll("#count-icon");
const navbarCount =document.getElementById('navbar-count');
 let totalLikes = 0;
for( let heart of hearts ) {
    heart.addEventListener("click",function(){
        totalLikes++;
        navbarCount.innerText =totalLikes;
    })
}
})


// **Call Button**

  let coins =100;


const coinCount =document.getElementById("coin-count");
const callList =document.getElementById("call-history");



const buttons =document.querySelectorAll('.call-btn');
for(let btn of buttons){
btn.addEventListener('click',() =>{
const title =btn.parentNode. parentElement.querySelector('.card-title').innerText;
const number =btn. parentNode.parentElement.querySelector('.number').innerText
        alert(`Calling ${title} ${number}`);
        if(coins < 20) {
        
                alert("You don't have enough coins.You need at least 20 coin ");
                return;
            
        }   else{
            coins -=20;
            coinCount.innerText =coins;
        } 
       
        const now =new Date()
        const timeStr =now.toLocaleString([],{hour :"2-digit",minute:"2-digit"});
        const div =document.createElement('div');
        div.innerHTML =`
        <div class="bg-gray-200 w-60 text-sm te gap-5 text-wrap  flex justify-between items-center p-4 rounded-lg mt-6" id="callHistory">
        <div  id="historyList>
<div>
  <h1 class="text-sm">${title}</h1>
  <p>${number}</p>
  </div>
  <div>
  <p> ${timeStr}</p>
  </div>


             </div>
        
        `
       callList.appendChild(div) 
       
       
        
      
})
}

//  **Clear History button**
document.getElementById('clear-btn').addEventListener('click',function() {
  const clearHistory =document.getElementById('call-history') 
  clearHistory.innerText='';
})

  // **Copy button**
  document.addEventListener('DOMContentLoaded',function(){


const copyBtn =document.querySelectorAll(".copyClicks");
const navbarCopy =document.getElementById('copy-count');
 let copyLikes = 0;
for( let btn of copyBtn ) {
    btn.addEventListener("click",() =>{
      const number =btn.parentNode.parentElement.querySelector('.number').innerText;
      navigator.clipboard.writeText(number).then(()=>{
alert(`copied number ${number}`)
      })
      
        copyLikes++;
        navbarCopy.innerText =copyLikes;
      

 } )
    
}
})


  
  

  


    

 