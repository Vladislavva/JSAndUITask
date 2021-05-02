window.onload = async function () {
  const divForLetters = document.querySelector(".letters");
  const divForResult = document.querySelector(".result");

  const response = await fetch("list.json");
  const list = await response.json();
  
  const letterHandler = (event) => {
    while (divForResult.firstChild) {
      divForResult.removeChild(divForResult.firstChild);
    }
    const result = list.filter(
      (item) => item.name[0] === event.target.innerText 
    );
    if(result.length> 0){
    result.map((char) => {
      divForResult.append(char.name + ", ");
    });} else divForResult.append("no match");
  };

  (function randomLetters() {
    const charArr = "12345".split("").map(function () {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
        Math.floor(26 * Math.random())
      );
    });

    charArr.map((char) => {
      var charBlock = document.createElement("div");
      charBlock.classList.add("letter")
      charBlock.textContent = char;
      charBlock.addEventListener('click',letterHandler, false)
      divForLetters.appendChild(charBlock);
    });
  })() 
};
