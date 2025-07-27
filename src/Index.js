function displayPoem(response){
  
  new Typewriter("#poem",{
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor:"",
  });
  }

function generatePoem (event){
  event.preventDefault();

  let instructionsInput=document.querySelector("#user-instructions");
  let apiKey="ff43f96f1et38ea9470b0c722o5c6709";
  let context="You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML, example <p>. Make sure to follow the user instructions and seperate each line with a <br/>. Sign at the end of the poem with a `shecodes AI`inside a <strong> element."; 
  let prompt= `user instructions: Generate a French poem about ${instructionsInput.Value}`;
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement=document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML=`<div class="blink">⌛Generating a French poem about ${instructionsInput.value} </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);