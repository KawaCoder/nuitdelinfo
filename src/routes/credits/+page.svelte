<script>
    function loadSvelte(){
        const div = document.getElementById("prev-svelte");

        if(!div){
            return
        }
        if(div.innerHTML !== "")
            div.innerHTML = "";
        else
            div.innerHTML = "<iframe src=\"https://svelte.dev\" title=\"Svelte Website Preview\" frameborder=\"0\" width=\"" + window.innerWidth * 0.8 + "\" height=\"" + window.innerHeight * 0.9 + "\"></iframe>";
    }
</script>

<div class="remerciements">
    <p>Ce Site a été développé avec la technologie <a id="btn-svelte" onclick={() => loadSvelte()}>Svelte</a>(Cliquez dessus pour prévisualiser)</p>
    <div id="prev-svelte"></div>
    <p>Le code source de ce projet se trouve en libre accès sur <a href="https://github.com/Sinistouille/nuitdelinfo/">Github</a></p>
</div>

<style>
    p {
        color: white;
        font-weight: bold;
        margin: 20px;
    }
    a {
        color: #162751;
        text-decoration: underline;
    }
    #prev-svelte{
        position: fixed;
    }
</style>