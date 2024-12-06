import { a as attr } from "../../chunks/attributes.js";
import { S as pop, Q as push } from "../../chunks/index.js";
const logo = "/sveltekit-github-pages/_app/immutable/assets/Lyreco_Logo.kwIwLxLo.png";
const rickroll = "/sveltekit-github-pages/_app/immutable/assets/rickroll.CwmM50_6.mp4";
function Chasse_logo($$payload, $$props) {
  push();
  $$payload.out += `<img${attr("src", logo)} class="circle-image no-opacity svelte-195rt35" alt="Circling with no opacity Image"> <img${attr("src", logo)} class="circle-image under-all svelte-195rt35" alt="Circling with opacity Image"> <iframe${attr("src", rickroll)} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" id="rickroll" allowfullscreen class="svelte-195rt35"></iframe>`;
  pop();
}
function _page($$payload) {
  Chasse_logo($$payload);
  $$payload.out += `<!----> <div class="HeaderRoot svelte-1tuj05m"><section id="about" class="HeaderSection svelte-1tuj05m"><h1 class="HeadingTitle svelte-1tuj05m">Welcome to Ocean World</h1> <p>Explore the depths of the ocean and its wonders. Learn about marine
            life, oceanography, and how to protect our seas.</p></section></div> <div id="content-descriptor" class="svelte-1tuj05m"><h2>About the Ocean</h2> <p>The ocean covers over 70% of our planet and is home to an incredible
    diversity of life. Dive in to discover more!</p></div>`;
}
export {
  _page as default
};
