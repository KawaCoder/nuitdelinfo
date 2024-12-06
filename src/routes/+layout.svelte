<script>
    let { children } = $props();
    let showMenu = $state(false);
    import cross from "$lib/assets/cross.svg";
    import background from "$lib/assets/parallax wall.jpg";
    import roulette from "$lib/assets/roulette.png";

    // Vous pouvez ajouter des données dynamiques ici si nécessaire.
    import Menu from "$lib/components/menu.svelte";
    import Footer from "$lib/components/footer.svelte";
    import CookieCauchemar from "$lib/components/cookie_cauchemar.svelte";
</script>
<div id="div-roulette">
    <img src={roulette} id="roulette"/>
    <p id="p-roulette">La roulette choisit votre prochaine page</p>
</div>
<CookieCauchemar />
<div class="container">
    {#if showMenu}
        <div class="close-button" onclick={() => showMenu = !showMenu}><img src={cross} alt="fermer le menu" /></div>
        <Menu></Menu>
    {:else}
        <button class="hamburger-button" onclick={() => (showMenu = !showMenu)}>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </button>
    {/if}
    <div class="content" style="background-image: url({background});">
        <main>
            {@render children()}
        </main>
        <Footer></Footer>
    </div>
</div>

<style>
    .close-button {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 15;
    }
    .close-button img {
        width: 100%;
        height: auto;
    }

    /* Bouton hamburger */
    .hamburger-button {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    /* Lignes du menu */
    .hamburger-button .line {
        width: 100%;
        height: 5px;
        background-color: #ffffff;
        border-radius: 2px;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .container {
        display: flex;
        height: 100%;
    }

    /* Main content styles */
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
        padding-left: 10%;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    h2 {
        color: #004d40;
        margin-top: 30px;
    }

    p {
        margin: 10px 0;
    }
</style>
