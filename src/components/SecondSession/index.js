import apexImg from '../../assets/images/apex-legends.jpg'
import Button from '../Button'

function SecondSession(){

  return /*html*/`
<section>
  <div class="max-w-2xl mx-auto">
    <img src=${apexImg}>
    <div class=" mt-10 text-lg">
      <nav class=" text-colorDefault flex flex-col gap-5 ">
          <ul><li >Against the Storm (<a href="https://store.epicgames.com/en-US/p/against-the-storm?utm_campaign=geforce_now&utm_source=nvidia">Epic Games</a> and New release on <a class="externalLink" href="https://store.steampowered.com/agecheck/app/1336490/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>)</li></ul>
          <ul><li>Horse Tales: Emerald Valley Ranch (New release on <a class="externalLink"  href="https://store.steampowered.com/app/1474740/Horse_Tales_Emerald_Valley_Ranch/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>, Nov. 3)</li></ul>
          <ul><li>Space Tail: Every Journey Leads Home (New release on <a class="externalLink"  href="https://store.steampowered.com/app/1975660/Space_Tail_Every_Journey_Leads_Home/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>, Nov. 3)</li></ul>
          <ul><li>The Chant (New release on <a class="externalLink"  href="https://store.steampowered.com/agecheck/app/1577250/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>, Nov. 3)</li></ul>
          <ul><li>The Entropy Centre (New release on <a class="externalLink"  href="https://store.steampowered.com/agecheck/app/1730590/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>, Nov. 3)</li></ul>
          <ul><li>WRC Generations — The FIA WRC Official Game (New Release on <a class="externalLink"  href="https://gfn.us20.list-manage.com/track/click?u=e7a9045360788391db9372a23&id=b3bb740784&e=74f3e484a9">Steam</a>, Nov. 3)</li></ul>
          <ul><li>Filament (Free on <a class="externalLink"  href="https://store.epicgames.com/en-US/p/filament-332a92?utm_campaign=geforce_now&utm_source=nvidia">Epic Games</a>, Nov. 3-10)</li></ul>
          <ul><li>STAR OCEAN THE DIVINE FORCE (<a class="externalLink"  href="https://store.steampowered.com/app/1776380?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>)</li></ul>
          <ul><li>PAGUI (<a class="externalLink"  href="https://store.steampowered.com/agecheck/app/986680/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>)</li></ul>
          <ul><li>RISK: Global Domination (<a class="externalLink"  href="https://store.steampowered.com/app/1128810/RISK_Global_Domination/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>)</li></ul>
          <ul><li>Total War: THREE KINGDOMS (<a class="externalLink"  href="https://store.steampowered.com/app/779340/Total_War_THREE_KINGDOMS/?utm_source=nvidia&utm_campaign=geforce_now">Steam</a>)</li></ul>
      </nav>
    </div>
    <div class="max-w-2xl mx-auto mt-10 text-center mb-10"> 
      ${Button()}
    </div>
    <p class=" text-colorDefault text-lg text-center">HAVE QUESTIONS? Visit the <a class="externalLink"  href="https://abya.gfn.la/pt-BR/faq">FAQ</a></p>
  </div>
</section>
  `

}
export default SecondSession