var total = 0;
//display none btn
function closeBTN(){

  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    this.parentElement.style.display = "none";
    total -= 1;
    document.querySelector("#all").innerHTML = total;
    }
  }
}
//---------------------------------------------------------------------------
//add to todo list
function newElement(){

  var input = document.querySelector("#input").value;
  var ul    = document.querySelector("ul");
  var li    = document.createElement("li");
  var spanIcon  = document.createElement("span");
  var spanText  = document.createElement("span");

  spanIcon.className = "close";
  spanIcon.innerHTML = `<i class="far fa-trash-alt"></i>`;
  document.createElement("span").append(spanIcon);

  spanText.className = "text";
  spanText.innerHTML = `${input}`;
  document.createElement("span").append(spanText);

  if(`${input}` === ''){
    alert("You must write something!");
  }else{
    li.append(spanText); 
    li.append(spanIcon);
    ul.append(li);
    total += 1;
  }
  document.querySelector("#input").value = "";
  document.querySelector("#all").innerHTML = total;
  closeBTN();
}
closeBTN();
//---------------------------------------------------------------------------
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') { 
    e.target.classList.toggle('checked');
  }
});
//---------------------------------------------------------------------------
function change(e) {
  if(e === 1){
    document.querySelector(".all").style.display = "block";
    document.querySelector(".completed").style.display = "none";
  }else if(e === 2){
    document.querySelector(".all").style.display = "none";
    document.querySelector(".completed").style.display = "block";
  }
}
//---------------------------------------------------------------------------




