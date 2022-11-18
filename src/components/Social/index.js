import facebookImg from '../../assets/images/facebook.png'
import instagramImg from '../../assets/images/instagram.png'
import twitterImg from '../../assets/images/twitter.png'

function Social(){

return /*html*/`

<section>
    <div class="text-colorDefault max-w-2xl mx-auto"> 
      <h2 class="text-base text-center font-bold mt-10">FOLLOW US ON SOCIAL AND DON'T MISS THE LATEST NEWS:</h2>
      <div>
        <nav class=" flex items-center list-none gap-10 justify-center mt-10">
          <li><a><img class=" w-10" src=${facebookImg}></a></li>
          <li><a><img class=" w-10" src=${instagramImg}></a></li>
          <li><a><img class=" w-10" src=${twitterImg}></a></li>
        </nav>
      </div>

      <p class=" text-center mt-10">Contact us at: <a class="externalLink" href="mailto:support@abya.tech">support@abya.com</a></p>

      <p class=" text-center p-5 mt-10">Copyright 2022 ABYA Corp. All rights reserved.</p>
    </div>
</section>
`
}
export default Social