import FirstSession from "./components/FirstSession";
import Main from "./components/Main";

document.querySelector('#app').innerHTML = /*html*/`
  <div class="mx-auto max-w-5xl h-screen">

  ${Main()}
  ${FirstSession()}
  </div>
`
