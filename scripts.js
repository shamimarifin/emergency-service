

 let count = 0;
    const display = document.getElementById("favorits");

    function increaseOnce(e) {
      count++;
      display.textContent = count;
      e.target.disabled = true; 
    }


    document.querySelectorAll("#favorits-icon").forEach(btn => {
      btn.addEventListener("click", increaseOnce);
    });






let callBtns = document.querySelectorAll('#phoneCall');

let counts = 100;

callBtns.forEach((callBtn, index) => {

  let service = document.querySelectorAll('#serviceName')[index].innerText;
  let phoneNumber = document.querySelectorAll('#phoneNumber')[index].innerText;
  let coinNumber = document.querySelector('#coinNumber');

  callBtn.addEventListener('click', () => {
   

     alert(`Calling on ${service} ${phoneNumber}`);
     
   counts -= 20;
  
    if (counts >= 0) {
   
         coinNumber.textContent = counts;
    } else {
      alert('No points left to deduct.');
    }

  });
});


// Select all buttons
const buttons = document.querySelectorAll('#copyBtn');
const copyText = document.querySelector('#copyCount')
buttons.forEach((button, index) => {
  let count = 0;
  button.addEventListener('click', ()=> {
    let text = document.querySelectorAll('#phoneNumber')[index].innerText;
    navigator.clipboard.writeText(text)
    alert('Text Copied !')

    count++;

    copyText.textContent = count;

    
  })
})

// buttons.addEventListener('click', ()=> {

//   let text = document.querySelectorAll('#phoneNumber').innerText;

//   navigator.clipboard.writeText(text)
//     alert('Text copied!');
// })





