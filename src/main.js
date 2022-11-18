import FirstSession from "./components/FirstSession";
import Main from "./components/Main";
import SecondSession from "./components/SecondSession";
import Social from "./components/Social"

document.querySelector('#app').innerHTML = /*html*/`
  <div class="mx-auto max-w-5xl h-screen">
  ${Main()}
  ${FirstSession()}
  ${SecondSession()}
  ${Social()}
  </div>
`
