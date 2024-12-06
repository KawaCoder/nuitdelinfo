
<nav class="sidebar">
    <ul>
        <li id="1" onmouseup={() => roulette()} onmouseenter={() => moveLink(1)}><a>Accueil</a></li>
        <li id="2" onmouseup={() => roulette()} onmouseenter={() => moveLink(2)}><a>L'humain au coeur de l'océan</a></li>
        <li id="3" onmouseup={() => roulette()} onmouseenter={() => moveLink(3)}><a>A propos</a></li>
        <li id="4" onmouseup={() => roulette()} onmouseenter={() => moveLink(4)}><a>Credits</a></li>
    </ul>
</nav>
<style>
    nav {
        width: 8%;
        min-width: fit-content;
        color: #ffffff;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        background: #162751ff;
        font-weight: bold;
        min-height: fit-content;
        display: flex;
        align-items: center;
    }

    nav ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 70%;
        margin: 0;
    }

    nav li {
        margin: 20px 0;
        align-content: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav a {
        color: #ffffff;
        text-decoration: none;
        text-align: center;
        font-size: 1.2em;
        margin: auto;
        padding: 20px;
        border-radius: 10px;
        transition: color 0.3s ease;
        width: 80%;
    }

    nav a:hover {
        color: #62B3E4ff;
        /*casual cursor*/
        cursor: default;
        background: #080E1Eff;
    }
</style>
<script>
    import { gsap} from 'gsap';
    import {goto} from "$app/navigation";

    function roulette(){

        const img = document.getElementById("roulette");
        const div = document.getElementById("div-roulette");
        //const p = document.getElementById("p-roulette");
        if(!img){
            console.error("Element with id 'roulette' not found.");
            return;
        }
        if(!div){
            console.error("Element with id 'div-roulette' not found.");
            return;
        }

        // Animate the image with GSAP to "pop" in
        gsap.to(div, {
            display: "block", // Make the image visible (handled outside GSAP, as GSAP can't animate `display`)
            opacity: 1,
            ease: "power3.out", // Easing for smoothness
            transformOrigin: "center center", // Origin of transformation
        });
        gsap.to(img, {
            display: "block", // Make the image visible (handled outside GSAP, as GSAP can't animate `display`)
            opacity: 1,
            scale: 2, // Full size
            duration: 0.5, // Animation duration
            ease: "power3.out", // Easing for smoothness
            transformOrigin: "center center", // Origin of transformation
        });

        gsap.to(img, {
            rotation: 10000, // Rotate the image (spin it)
            duration: 3, // Duration of rotation
            ease: "none", // No easing, continuous rotation
        });
        gsap.to(img, {
            opacity: 0,
            rotation: 0,
            duration: 0,
            delay: 3.2, // Delay to wait for 6 seconds before hiding
            ease: "power3.in", // Ease in for the fade out effect
            onComplete: () => {
                img.style.display = "none"; // Hide the image after the animation
            }
        });
        gsap.to(div, {
            display: "none", // Make the image visible (handled outside GSAP, as GSAP can't animate `display`)
            opacity: 0,
            ease: "power3.out", // Easing for smoothness
            transformOrigin: "center center", // Origin of transformation
            delay: 3.2, // Delay to wait for 6 seconds before hiding
        });

        let random = gsap.utils.random(1, 4,1);
        setTimeout(() => {
            switch (random){
                case 1:
                    goto("/");
                    break;
                case 2:
                    goto("/corps");
                    break;
                case 3:
                    goto("/apropos");
                    break;
                case 4:
                    goto("/credits");
                    break;
                default:
                    goto("/");
                    break;
            }
        }, 3200);
    }

    function moveLink(id){
        const element = document.getElementById(id);

        if (!element) {
            console.error(`Element with id "${id}" not found.`);
            return;
        }
        gsap.timeline()
            .to(element, { x: -20, duration: 0.1 }) // Move left
            .to(element, { x: 20, duration: 0.1 })  // Move right
            .to(element, { x: -20, duration: 0.1 }) // Move left
            .to(element, { x: 20, duration: 0.1 })  // Move right
            .to(element, { x: 0, duration: 0.1 });
    }
</script>