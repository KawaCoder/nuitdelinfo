import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { S as pop, Q as push } from "../../../chunks/index.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const coeur = "data:image/png;base64,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";
const poumons = "/sveltekit-github-pages/_app/immutable/assets/poumons.DP0Kkf3K.jpg";
const foie = "/sveltekit-github-pages/_app/immutable/assets/foie.BTAZ5Jch.jpg";
const organes = [
  {
    id: "coeur",
    title: "Le Cœur",
    image: coeur,
    content: `<p>La base de l'humanité, le symbole de la passion. Le cœur humain pompe avec ardeur, nourrit le corps tout entier, et on retrouve la même ardeur, bien que moins visible. L’océan, aussi vaste et abyssal soit-il, tourne et se renouvelle à la manière d’un sang azur grâce à la circulation thermohaline, ou on peut également parler de circulation méridienne de retournement, et ce système si technique façonné par Mère Nature ne doit être détraqué.</p>
			<p>Malheureusement, cette sagesse n’a pas forcément été instruite, ou peut-être oubliée, et son bon fonctionnement en a fini déséquilibré. Le ralentissement de la circulation méridienne de retournement, selon de nombreux experts, s’accompagne de conséquences désastreuses comme des saisons plus marquées, des tempêtes plus fréquentes et une augmentation du niveau des mers. Ces symptômes sont ceux d’un cœur de la mer malade, assurément, tout comme un cœur humain malade se ferait sentir par des affaiblissements, des malaises, et d'autres symptômes.</p>
			<p>Tout comme l’homme doit prendre soin de son organe le plus important, il faut faire attention à ne pas perturber le flux de la circulation thermohaline en mer, et ça passe par de la prévention (comme on le fait maintenant) et de l’action (de vous principalement !)</p>
   			<p>En résumé, on peut assimiler les courants marins au système sanguin, y voir un lien inextricable de l’un à l’autre, une similitude de l’évolution ou un synonyme du destin, on ne saurait le dire, mais assurément, il ne peut s’agir d’une coïncidence.</p>
      			<p>Source : <a href=https://fr.wikipedia.org/wiki/Circulation_thermohaline>Wikipedia</a></p>
	 		<p>Source : <a href=https://www.ipsl.fr/decouvrir/voir-et-faire/un-phenomene-une-manip/la-circulation-thermohaline/#:~:text=On%20parle%20de%20la%20circulation,salinit%C3%A9%2C%20%C2%AB%20halin%20%C2%BB)>ipsl </a>.</p>
			`
  },
  {
    id: "rate",
    title: "La Rate",
    content: `<p>La rate, cet organe discret et souvent méconnu, joue pourtant un rôle essentiel dans le fonctionnement du corps humain. Elle filtre le sang, recycle les globules rouges usés et aide à défendre l’organisme contre les infections. Dans le cadre d’un parallèle, on pourrait comparer la rate à l’océan dans son rôle de “filtre planétaire”.</p>
			<p>Tout comme la rate purifie le sang et maintient l’équilibre interne du corps, l’océan filtre l’atmosphère, absorbe le dioxyde de carbone et régule le climat mondial. La rate recycle les éléments nécessaires pour le fonctionnement du corps, tandis que l’océan redistribue les nutriments essentiels à travers ses courants, permettant la vie marine de prospérer.</p>
    			<p>Si la rate est silencieuse dans son action, l’océan, bien que plus visible, agit souvent de manière tout aussi discrète pour maintenir les équilibres globaux. En perdant l’un ou l’autre, c’est tout un système vital qui serait menacé. La rate et l’océan, dans leur fonction de gardiens invisibles, sont des piliers essentiels de la santé, qu’elle soit individuelle ou planétaire.</p>
			`
  },
  {
    id: "Intestin",
    title: "Les Intestins",
    content: `<p>L’intestin est l’organe central du système digestif du corps humain. Il est particulièrement multitâche : les aliments arrivent bruts, et l’intestin les décompose en éléments plus simples et absorbables par le sang. Il laisse au contraire les éléments inutiles et toxiques être évacués du corps humain.</p>
   			<p>L’océan joue un rôle équivalent à l’échelle de la planète, traitant et redistribuant les éléments vitaux pour les écosystèmes terrestres et marins. Par l’action du phytoplancton, des nutriments (comme l’azote, le carbone et le phosphore) sont transformés en biomasse, qui devient la base des chaînes alimentaires. Les courants marins distribuent ensuite les nutriments des profondeurs marines vers la surface.</p>
			`
  },
  {
    id: "cerveau",
    title: "Le Cerveau",
    content: `<p>Le cerveau est le centre de contrôle du corps humain, traitant l'information et envoyant des signaux pour coordonner les fonctions des organes et des systèmes. Il utilise des réseaux de neurones pour transmettre des signaux électriques, garantissant une communication efficace dans tout le corps.</p>
   			<p>Si le cerveau ne fonctionne plus correctement, tout le corps est désorganisé et les conséquences en chaîne sont infinies. Toutes sortes de troubles mentaux et physiques apparaissent.</p>
      			<p>Les courants océaniques agissent comme le "système de contrôle" du climat terrestre et des écosystèmes marins, en distribuant chaleur, nutriments et oxygène sur de vastes distances. Ces courants relient les océans et régulent le climat mondial, tout comme le cerveau régule le corps.</p>
	 		<p>Malheureusement, le réchauffement climatique dérègle les courants, causant une augmentation du nombre de catastrophes naturelles : tempêtes, tsunamis… Ce dérèglement chamboule également l’écosystème et peut être responsable de l’effondrement de la biodiversité dans une région aquatique.</p>
    			`
  },
  {
    id: "poumons",
    title: "Les Poumons",
    image: poumons,
    content: `<p>Le besoin le plus vital du corps humain est l’oxygène. En tant que tel, notre corps nécessite plus que tout d’être oxygéné au travers du sang, tout comme la circulation thermohaline fait traverser les eaux, et un fléau qui frappe tout autant les océans que nos corps peut être la désoxygénation. Et si votre cerveau ne recevait plus d’oxygène hein ? Vous le savez clairement, ça entraînerait de graves conséquences, court ou long terme.</p>
			<p>Et il faut bien s’imaginer que c’est quelque chose qui arrive très fréquemment pour notre océan, l’accumulation de dioxyde de carbone crée des zones de désoxygénation graves, qui entraînent le réchauffement climatique (c’en est une cause reconnue) et aussi l’eutrophisation. L’eutrophisation, il s’agit de zones ultra concentrées en nutriments, qui sont dangereuses car ça sature et empêche la propagation de ces nutriments. Imaginez que votre corps soit saturé de nutriments en un seul endroit, laissant le reste affamé, c’est ce qui se passe.</p>
   			<p>Au bout du compte, ces processus si vitaux n’ont aucun droit d’être arrêtés, voler l’oxygène amène à la mort, quel que soit l’organisme. Réfléchissez-y à deux fois avant de dérober l’oxygène de l’océan, qui vous maintient en vie.</p>
      			<p>Source : <a href=https://ocean-climate.org/la-desoxygenation-de-locean/>ocean climate.org</a></p>
      			`
  },
  {
    id: "reinsfoie",
    title: "Les Reins et Le Foie",
    image: foie,
    content: `<p>Notre corps est bien fait : il est équipé de ses propres usines de purification : les reins et le foie.</p>
			<p>D’abord, le foie transforme les substances toxiques (alcool, médicaments, produits chimiques) en composés moins nocifs pour être éliminés via les reins ou les intestins. Le foie produit aussi de la bile, un liquide qui aide à éliminer les déchets liposolubles (cholestérol, toxines). De leur côté, les reins filtrent le sang pour en éliminer les déchets. Le sang arrive dans les reins et passe à travers les glomérules, où l'eau, les sels, les déchets (comme l'urée), et d'autres petites molécules sont filtrés. Les déchets et substances inutiles sont ensuite acheminés vers la vessie sous forme d’urine. Les bonnes substances (glucose, acides aminés…) sont ensuite réabsorbées par le sang.</p>
			<p>En cas de dysfonctionnement de ce système, c’est la catastrophe : les toxines s’accumulent dans le corps, entraînant un jaunissement de la peau et une diminution de la capacité immunitaire.</p>
			<p>De la même façon, l’océan a ses mécanismes de nettoyage intégrés. Les océans sont vastes et en constante agitation grâce aux courants marins, aux vagues et aux marées. Ces mouvements permettent de diluer les polluants, réduisant leur concentration locale. Ensuite, des micro-organismes marins jouent un rôle clé en dégradant certains polluants organiques, tels que les hydrocarbures. Ces organismes transforment les substances toxiques en composés moins nocifs ou inoffensifs.</p>
			<p>Malheureusement, cette mécanique bien réglée est mise à mal par le changement climatique qui, en augmentant la température de l’eau, augmente son absorption de CO2. Cela cause une acidification des océans qui est nocive pour les organismes marins, dont ceux qui sont essentiels à la régulation des polluants ! Et là, l’océan tombe malade…</p>`
  },
  {
    id: "estomac",
    title: "L'Estomac",
    image: foie,
    content: `<p>Notre corps est bien fait : il est équipé de ses propres usines de purification : les reins et le foie.</p>
			<p>D’abord, le foie transforme les substances toxiques (alcool, médicaments, produits chimiques) en composés moins nocifs pour être éliminés via les reins ou les intestins. Le foie produit aussi de la bile, un liquide qui aide à éliminer les déchets liposolubles (cholestérol, toxines). De leur côté, les reins filtrent le sang pour en éliminer les déchets. Le sang arrive dans les reins et passe à travers les glomérules, où l'eau, les sels, les déchets (comme l'urée), et d'autres petites molécules sont filtrés. Les déchets et substances inutiles sont ensuite acheminés vers la vessie sous forme d’urine. Les bonnes substances (glucose, acides aminés…) sont ensuite réabsorbées par le sang.</p>
			<p>En cas de dysfonctionnement de ce système, c’est la catastrophe : les toxines s’accumulent dans le corps, entraînant un jaunissement de la peau et une diminution de la capacité immunitaire.</p>
			<p>De la même façon, l’océan a ses mécanismes de nettoyage intégrés. Les océans sont vastes et en constante agitation grâce aux courants marins, aux vagues et aux marées. Ces mouvements permettent de diluer les polluants, réduisant leur concentration locale. Ensuite, des micro-organismes marins jouent un rôle clé en dégradant certains polluants organiques, tels que les hydrocarbures. Ces organismes transforment les substances toxiques en composés moins nocifs ou inoffensifs.</p>
			<p>Malheureusement, cette mécanique bien réglée est mise à mal par le changement climatique qui, en augmentant la température de l’eau, augmente son absorption de CO2. Cela cause une acidification des océans qui est nocive pour les organismes marins, dont ceux qui sont essentiels à la régulation des polluants ! Et là, l’océan tombe malade…</p>`
  },
  {
    id: "inconnu",
    title: "Choisissez un organe",
    content: "Cliquez sur un organe ogheuogheaurogheuoeghzioghizoghzeioghiozghzioghzioghzioue"
  }
];
const human_body = "/sveltekit-github-pages/_app/immutable/assets/Human_With_All_Organs.BZujY2Kl.png";
function _page($$payload, $$props) {
  push();
  let currOrganes = organes[0];
  $$payload.out += `<h1 class="svelte-1gs40vr">Cliquer sur l'image pour identifier une partie</h1> <div class="body-wrapper svelte-1gs40vr"><img${attr("src", human_body)} alt="Image anatomique" style="width: 400px; height: auto"> <div class="OrganeText svelte-1gs40vr"><div class="OrganeTitle svelte-1gs40vr"><img${attr("src", currOrganes.image)}${attr("alt", currOrganes.id)} style="max-height: 100px"> <h1 style="flex-grow: 1;" class="svelte-1gs40vr">${escape_html(currOrganes.title)}</h1></div> <div style="flex-grow: 1;">${html(currOrganes.content)}</div></div></div>`;
  pop();
}
export {
  _page as default
};
