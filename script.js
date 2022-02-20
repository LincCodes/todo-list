const h3 = document.querySelector("h3");
const form = document.querySelector("form");
const ul = document.querySelector("ul")

form.addEventListener("submit", submit);

function submit(e){
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = e.target[0].value;
  ul.appendChild(li);
  li.addEventListener("click", function(){
    li.style.textDecoration = "line-through"
  });
  li.addEventListener("dblclick", function(){
    li.style.display = "none"
  });
  form.reset();
}