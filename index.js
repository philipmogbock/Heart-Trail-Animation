// select the body
bodyEl = document.querySelector("body");

// add event listener to detect mouse movements in the body 
bodyEl.addEventListener("mousemove", (event)=>{
    // store x and y positions in variables 
    xPos = event.offsetX;
    yPos = event.offsetY;
    // console.log(xPos,yPos);

    // create a span 
    const spanEl = document.createElement("span");

    //add span to the bpdy
    bodyEl.appendChild(spanEl);

    //style the span to be created wherever the mouse moves
    //  using the position values from above  

    spanEl.style.left = xPos +"px";
    spanEl.style.top = yPos +"px";

    // create random number that will be used to change size of span 
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // stop build up of hearts/spamming 
    setTimeout(()=>{
        // remove span element after 3 seconds of no movement
        spanEl.remove();

    },3000)


});