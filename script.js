let boxes = document.querySelectorAll(".box");
console.log(boxes);
let turn0=true;
let winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turn0){

      box.innerText="O";
      turn0=false;
      box.disabled=true;
    }
    else
    {
      box.innerText="X";
    turn0=true;
    box.disabled=true;
    }
    for(let pattern of winPatterns) {
      if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[0]].innerText !== "") {
        alert("Winner: " + boxes[pattern[0]].innerText);
        break;
      }
    }
  });
});
