<script>
    import { organes } from "$lib/data/corps.js";
    import human_body from "$lib/assets/Human_With_All_Organs.png";
    let curr = "inconnu";
    let currOrganes = $state(organes[0]);

    function handleClick(event) {
        // Obtenez les dimensions de l'image
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left; // Position X relative à l'image
        const y = event.clientY - rect.top; // Position Y relative à l'image
        // zone du clique
        if (x > 170 && x < 200 && y > 150 && y < 210) {
            curr = "coeur";
        } else if (x > 270 && x < 350 && y > 360 && y < 500) {
            curr = "rate";
        } else if (x > 150 && x < 270 && y > 0 && y < 100) {
            curr = "cerveau";
        } else if (x > 100 && x < 290 && y > 100 && y < 235) {
            curr = "poumons";
        } else if (x > 115 && x < 200 && y > 235 && y < 300) {
            curr = "foie";
        } else {
            curr = "inconnu"; // Si le clic est en dehors des zones définies
        }
        currOrganes = organes.find((organe) => organe.id === curr);
    }
</script>
<h1>Cliquer sur l'image pour identifier une partie</h1>
<div class="body-wrapper">
    <img
        src={human_body}
        alt="Image anatomique"
        on:click={handleClick}
        style="width: 400px; height: auto"
    />

    <div class="OrganeText">
        <div class="OrganeTitle">
            <img src={currOrganes.image} alt={currOrganes.id} style="max-height: 100px"/>
        <h1 style="flex-grow: 1;">{currOrganes.title}</h1>
        </div>
        <div style="flex-grow: 1;">{@html currOrganes.content}</div>
    </div>
</div>

<style>
    .body-wrapper {
        display: flex;
        gap: 100px;
        align-items: center;
        margin: 10px 10%;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
    }
    .OrganeText {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centre verticalement */
    flex-grow: 1; /* Permet de s'étendre si nécessaire */
    gap: 20px; /* Ajoute un espace entre les enfants */
}
    .OrganeTitle {
        display: flex;
        align-items: center;
    }
    h1 {
        text-align: center;
    }
</style>
