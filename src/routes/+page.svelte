<script>
    import background from "$lib/assets/parallax wall.jpg";
    import ChasseLogo from "$lib/components/chasse_logo.svelte";
</script>
<ChasseLogo />
<div class="HeaderRoot">
    <section id="about" class="HeaderSection">
        <h1 class="HeadingTitle">Welcome to Ocean World</h1>
        <p>
            Explore the depths of the ocean and its wonders. Learn about marine
            life, oceanography, and how to protect our seas.
        </p>
    </section>
</div>
<div id="content-descriptor">
<h2>About the Ocean</h2>
<p>
    The ocean covers over 70% of our planet and is home to an incredible
    diversity of life. Dive in to discover more!
</p>
</div>
<style>
    #content-descriptor{
        margin: 20px;
    }
    .HeaderRoot {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
        padding-top: 50px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }

    .HeaderSection {
        color: #ffffff;
        font-size: 20px;
        text-align: center;
    }
    .HeadingTitle {
        color: #ffffff;
        font-size: 70px;
        font-weight: 900;
        text-transform: none;
        line-height: 1em;
        letter-spacing: 4.7px;
        font-family: "DM Sans", serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
</style>
