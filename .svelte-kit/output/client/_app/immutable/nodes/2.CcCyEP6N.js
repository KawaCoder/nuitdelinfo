import{a as g,t as h}from"../chunks/disclose-version.5-VYsvCH.js";import"../chunks/legacy.3D2G9Lpc.js";import{G as w,I as y,K as x,M as p,a5 as C}from"../chunks/runtime.BxbSig_V.js";import{e as d,d as _}from"../chunks/events.CQKBbnPS.js";import{s as l}from"../chunks/attributes.ChmpTACJ.js";import{i as b}from"../chunks/lifecycle.DbI5IsWb.js";import{o as k}from"../chunks/index-client.CMFo1SHA.js";import{g as u}from"../chunks/index.DjKJqAo0.js";const f=""+new URL("../assets/Lyreco_Logo.kwIwLxLo.png",import.meta.url).href,L=""+new URL("../assets/rickroll.CwmM50_6.mp4",import.meta.url).href;var T=h('<img class="circle-image no-opacity svelte-195rt35" alt="Circling with no opacity Image"> <img class="circle-image under-all svelte-195rt35" alt="Circling with opacity Image"> <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" id="rickroll" allowfullscreen class="svelte-195rt35"></iframe>',1);function I(n,i){w(i,!1);let e;k(()=>{const t=window.innerHeight-100,o=window.innerWidth-100;e=u.timeline({repeat:-1}),e.fromTo(".circle-image",{y:t,x:o},{duration:4,rotation:90,x:0,y:t/2,onComplete(){e.pause()}}).fromTo(".circle-image",{x:0,y:t/2},{duration:4,rotation:180,x:o,y:0,onComplete(){e.pause()}}).fromTo(".circle-image",{x:o,y:0},{duration:4,rotation:270,x:o/2,y:t,onComplete(){e.pause()}}).fromTo(".circle-image",{x:o/2,y:t},{duration:4,rotation:360,x:o,y:0,onComplete(){e.pause()}}).fromTo(".circle-image",{x:o-100,y:0},{duration:4,rotation:450,x:o,y:t,onComplete(){e.pause()}})});function s(){e.pause(),find=u.timeline({repeat:0}),find.to(".circle-image",{duration:2,rotation:3600,onComplete(){e.play(),document.getElementById("rickroll").style.display="inline"}}),find.to(".circle-image",{duration:8,onComplete(){e.play(),document.getElementById("rickroll").style.display="none"}})}function c(){e.play()}b();var m=T(),r=y(m);l(r,"src",f),r.__click=s;var a=p(r,2);l(a,"src",f),a.__click=s;var v=p(a,2);l(v,"src",L),d("mouseenter",r,c),d("mouseenter",a,c),g(n,m),x()}_(["click"]);var j=h(`<!> <div class="HeaderRoot svelte-1tuj05m"><section id="about" class="HeaderSection svelte-1tuj05m"><h1 class="HeadingTitle svelte-1tuj05m">Welcome to Ocean World</h1> <p>Explore the depths of the ocean and its wonders. Learn about marine
            life, oceanography, and how to protect our seas.</p></section></div> <div id="content-descriptor" class="svelte-1tuj05m"><h2>About the Ocean</h2> <p>The ocean covers over 70% of our planet and is home to an incredible
    diversity of life. Dive in to discover more!</p></div>`,1);function O(n){var i=j(),e=y(i);I(e,{}),C(4),g(n,i)}export{O as component};