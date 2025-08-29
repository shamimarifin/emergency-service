# Answer the following questions clearly:

    1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Answer: * getElementById => Select Id Attribute
            * getElementsByClassName => Select Class Attribute
            * querySelector => Select single id or class attribute
            * querySelectorAll => Multiple Id or Class Select;

    2. How do you create and insert a new element into the DOM?
       const newDiv = document.createElement('div');
       newDiv.textContent = 'Hello World!';
       newDiv.classList.add('my-class');

    3.What is Event Bubbling and how does it work?
    Event Bubbling হলো একটি DOM কনসেপ্ট যেখানে কোনো child element-এ ইভেন্ট ট্রিগার হলে এটি স্বয়ংক্রিয়ভাবে parent element-এর দিকে চলে যায় এবং শেষ পর্যন্ত document-এ পৌঁছায়।
    
    What is Event Delegation in JavaScript? Why is it useful?
    What is the difference between preventDefault() and stopPropagation() methods?
