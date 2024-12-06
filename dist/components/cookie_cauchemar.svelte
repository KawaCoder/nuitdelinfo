<script>
    import logorace from "../assets/logo race water.jpg"
    import cookie from "../assets/cookie.jpg"
    import { gsap } from 'gsap';
    let showPopUp = $state(true);
    let ChainPopUp = $state(0);
    let counter = $state(0);

    function increase() {
  counter += 1;
  if (counter >= 100) {
    gsap.to('#consentBox', { opacity: 0, duration: 0.5, ease: 'power2.in' });
  }
}
</script>
{#if showPopUp}
    
<div id="consentBox">
    <img src={logorace} alt="Logo" />
    <div id="consentContent">
        <header id="consentHeader">
            Votre confidentialité, notre priorité.
        </header>
        <p id="cookie_para">
            {#if ChainPopUp === 0}
            Nous utilisons les cookies pour vous offrir une expérience optimale.
            <br />Nous utilisons les cookies à des fins légitimes de marketing,
            <br />grâce à nos <u>1017 partenaires</u>.
            {:else if ChainPopUp === 1}
            Les cookies sont des petits fichiers texte qui sont placés sur votre ordinateur par un site web que vous visitez. Ils permettent au site web de stocker des informations telles que vos préférences de navigation, votre langue préférée, vos informations de connexion, et bien plus encore. En fait, les cookies jouent un rôle crucial dans l'amélioration de votre expérience utilisateur en retenant vos préférences personnelles et en vous évitant de devoir les ressaisir à chaque visite sur le site. De plus, nous utilisons les cookies pour des stratégies de marketing sophistiquées, vous présentant des publicités qui sont non seulement ciblées mais aussi adaptées à vos intérêts et habitudes de navigation. En matière de sécurité, les cookies sont également essentiels pour garantir la protection de votre compte, en empêchant par exemple une connexion multiple avec le même compte utilisateur. Par ailleurs, ils nous aident à analyser les comportements de navigation des utilisateurs, ce qui nous permet de raffiner et d'optimiser continuellement votre expérience sur notre plateforme. Actuellement, nous collaborons avec un réseau étendu de <u>1017 partenaires</u> pour une gestion efficace et sécurisée des cookies sur notre site web. À travers cette infrastructure, nous nous engageons à respecter votre vie privée tout en vous offrant une expérience en ligne enrichissante et sans friction.
            {:else}
            <span style="color:red;">Pour garantir votre sécurité et améliorer votre expérience, nous vous demandons de <strong>cliquer 100 fois sur le cookie</strong>. Ce processus assure que vous soyez sûr(e) de refuser les avantages que vous apportent les cookies.</span>
            <br>
            <img src={cookie} onclick={increase}/>
            <br> {counter}
            {/if}
        </p>
        <div class="buttons">
          <button class={ChainPopUp === 1 ? "consentButton red" : "consentButton"} 
            onclick={() => {
              gsap.to('#consentBox', { opacity: 0, duration: 0.5, ease: 'power2.in' });
              setTimeout(() => {
               showPopUp = false;
              }, 500);
            }}>
            Accepter
          </button>


          <button class="rejectButton" onclick={() => ChainPopUp += 1} style={ChainPopUp > 1 ? "display: none":""}>
                {#if ChainPopUp === 0}
                    En savoir plus
                {:else if ChainPopUp === 1}
                   Refuser les cookies
                {/if}
            </button>
        </div>
    </div>
</div>
{/if}

<style>
    #consentBox {
  background: #fff;
  padding: 20px;
  max-width: 30%;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.consentButton.red {
  background-color: red;
}

#consentBox.hide {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

::selection {
  color: #fff;
  background: #5ac0f1;
}

#consentContent p {
  color: #858585;
  margin: 10px 0 20px 0;
}

#consentContent .buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.consentButton,
.rejectButton {
  padding: 12px 30px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consentButton {
  background: #5ac0f1;
  margin-right: 10px;
}

.rejectButton {
  color: #111211;
  background: transparent;
  border: 2px solid #5ac0f1;
  text-decoration: none;
}

#consentBox img {
  max-width: 90px;
}

#consentHeader {
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
}

</style>