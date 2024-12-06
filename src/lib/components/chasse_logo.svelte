<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import logo from '$lib/assets/Lyreco_Logo.png'
    import rickroll from '$lib/assets/rickroll.mp4'

  
    let tl;
  
  
    // Initialisation de l'animation
    onMount(() => {
      const height = window.innerHeight-100;
      const width = window.innerWidth-100;
  
  
      tl = gsap.timeline({
        repeat: -1,});
  
      tl.fromTo(".circle-image", {
         y: height,
          x:width,
      },{   
          duration: 4,
          rotation: 90,
          x: 0,
          y: height/2,
          onComplete(){
              tl.pause();
          } })
  
        .fromTo(".circle-image", {
          x: 0,
          y: height/2,
      },{        
          duration: 4,
          rotation: 180,
          x: width,
          y: 0,
          onComplete(){
              tl.pause();
          } })
  
        .fromTo(".circle-image", {
          x: width,
          y: 0,
        },{
          duration: 4,
          rotation: 270,
          x: width / 2,
          y: height,
          onComplete(){
              tl.pause();
          } })
  
        .fromTo(".circle-image", {
          x: width / 2,
          y: height,
      },{
          duration: 4,
          rotation: 360,
          x: width,
          y: 0,
          onComplete(){
              tl.pause();
          } })
  
        .fromTo(".circle-image", {
          x: width-100,
          y: 0,
      },{
          duration: 4,
          rotation: 450,
          x: width,
          y: height,
          onComplete(){
              tl.pause();
          } })
    
    
      });
  
  
  
    // Fonction pour gérer le clic
    function findAnimation() {
        
      tl.pause(); 
      find = gsap.timeline({
          repeat: 0,
      })
      
      find.to(".circle-image", {
          duration: 2,
          rotation: 3600,
          onComplete(){
          tl.play();
          document.getElementById("rickroll").style.display = "inline";
          }  })
  
          find.to(".circle-image", {
          duration: 8,
          onComplete(){
          tl.play();
          document.getElementById("rickroll").style.display = "none";
          }  })
    }
  
  
    function hoverAnimation() {
      tl.play();
  }
  
  </script>
  
  
      <img src={logo} class="circle-image no-opacity" alt="Circling with no opacity Image" onclick={findAnimation} onmouseenter={hoverAnimation}/>
      <img src={logo} class="circle-image under-all" alt="Circling with opacity Image" onclick={findAnimation} onmouseenter={hoverAnimation}/>

  
      <iframe
      src={rickroll}
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      id="rickroll"
      allowfullscreen>
      </iframe>
  
  
  <style>
      #rickroll{
          display: none;
      }
  
      .no-opacity{
          opacity: 0;
      }
  
      .under-all{
          z-index: 100;
      }
  
      .circle-image-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
      }
  
      .circle-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #f8b500;
      }
  </style>
  
          