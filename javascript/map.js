const areaImages = {
  isle: "/images/isleLabelorg.png",
  tree: "/images/enderLabel.png",
  rivers: "/images/riversLabel.png",
  dragons: "/images/dragonsLabel.png",
  eden: "/images/edenLabel.png",
  waves: "/images/wavesLabel.png",
  calirum: "/images/calirumLabel.png",
  veremite: "/images/veremiteLabel.png",
};

const areaDesc = {
  isle: "The Isle of Small Folk sits in the sea of whimsy to the west. When the god Minilaus needed small hands and large minds to aide in his constant tinkering he assembled the first gnomes Righty Tighty and Lefty Lucy. These gnomes worked tirelessly to do small repairs for their master and spent their free time watching him as he worked. It wasn’t soon before the two were master mechanics that shared a home and a heart. When Minilaus heard word that the two were to be wed he gifted them the Isle of Small Folk under the promise that they fill it with the wildest inventions they could think up. The craziest of these creations turned out to be the future generations of gnomes that would go on to push the limits of magic and mechanics. The gnomes have turned the island into the most technologically advanced kingdom in the world and manufactures 90% of all magic items. The gnomes are all very intelligent free thinkers that love puzzles and working with their hands, they never turn away a visitor (though their homes may be amess with spare parts and half-finished products lying around), and they vary in personalities ranging from idiot savant to tactful evil genius. As the halflings wandered into life at rivers reach and spread themselves across the lands they found the gnomes to be their closest kin in attitude and likeness, so they have migrated and made themselves 43% of the islands population. The halflings are peaceful and welcoming folk that live their lives in eternal leisure never so much as frowning if they can help it. They find the gnomes amusing to watch hurry around and consider them their sister city. The gnomes, however, find the halflings lazy and a waste of half the island.",
  veremite:
    "The kingdom of Theramite was founded by three dwarven brothers called the Ironbeards. The Ironbeard brothers were the greatest miners the realm will ever see and made it their mission to dig through the impenetrable Purple Worm Mountains to solidify their legacy. The first brother named Hyde tried a pickaxe cast from the strongest metals from the deepest caverns in the world and it shattered against the mountain after one swing. The second brother Weeboy gathered all the most potent and sulfuric minerals from the dust of a dragons nest doused it in lamp oil and lit it with the heart of a fire elemental. From this attempt the mountain shook and the outer layer began to melt but refused to crumble. The third brother Solomon took note of his brothers efforts and especially their results. As the mountain melted from Weeboys explosion Solomon captured the magma in an iron cast and crafted a pickaxe of the mountains ore. The next day he handed the pickaxe to Hyde and instructed him to strike at the point of Weeboys explosion. Hyde did as he was told and the mountain split right down the middle. From that day the dwarves have been working together to build a city in the mountain while also mining the strongest metal the world has ever seen, mithril. To this day the kingdom follows in the steps of its founding brothers and follow in their credo, “Iron sharpens Iron”. Thermite is a kingdom of comradery, work ethic, and equality. The Kingdom encompasses; the intricate city in the mountain Ironspire, the volcanic forge of Mt. Union where metal workers craft goods, and the valley between them Midgard which houses many of Theramites foreigners and its humbler dwarven families. ",
  calirum:
    "The eastern kingdom of Calirum was founded by the elves and rests in a forested sect of land that caresses the shores of the sea of monsters. The elves are among the oldest creatures in the land it is said that elves were created by their god Theadin before light itself breached through the heavens. When the world was still young and Theadin, the god of order, was writing the laws of the universe the elves took advantage of the malleability of reality. They first offered to aid their god by erecting a wood of eternal oaks that will never fade in vibrancy to fill the land. Then they walked between realms and hid all manner of mystical creatures in the wood including a noble unicorn to guard over it. And finally, the elves mixed their blood with the sap of their eternal oaks so that they would age as slowly as dripping sap and live for thousands of years. All of this was done undenounced to Theadin and when reality snapped into place the elves were granted the eternal Emerald Woods as repayment for their help. Ever since then the woods have been home to many treetop villages hidden in the leaves all surrounding the newly erected Emerald Castel. The Emerald castle was assembled a mere 5,000 years ago to mark the creation of the country Calirum, the banner which flies over every elven house, and now every country of Varose. For millennia the elves were ruled by the royal Al’flora family and by the time Calirum had finally come to be the elves were only on their 5th ruler, Queen Antiquity Al’flora. Queen Al’flora ruled over the land much like her predecessors had, with an attention to order and a passion for her people. The elves are a very proud people that revel in nature and take its preservation extremely personally. They believe they are the epitome of perfection in everything from looks to intelligence and will let everyone know it. Civility, order, and nature are the most coveted ideals among the elven people and outsiders, while welcome, often cannot keep up with all of the social rules it takes to socialize with the elves. In the years since King Ga’leer has taken the crown a small city has been built surrounding the castle which he calls ‘Halos Reach’. This city is slowly turning into a sacred city for the new religion formed around Crusifus. ",
  dragons:
    "The human kingdom of Dragons Coast is nestled between the sandy dunes of the ‘Astorian Desert’ on the southern coast of Varose. When the Goddess P’lore desired followers of her own she rose her elegant crystal staff channeled the sunlight and carved a glass city into the dunes. Then she molded the sands into human beings and led them into the city. Ever since their creation the humans have proved themselves to be the most diverse and intriguing creatures in all of the realm. There are sects of humans dedicated to every religion in the world as surely as there are those humans dedicated to debauchery and crime. Human cities are very established and urbanized often muting elements of the desert rather than working with them in harmony. The ruler of the Dragon Coast Kingdom is queen Andromeda Claymore, she is the first female ruler in the kingdoms history and if stories hold true, the most fearsome. She is said to be a seven-foot-tall bundle of muscles that has never lost a challenge or a battle. This queen is so strong willed and proud that when she bent the knee to Ga’leer 50 years ago, she was the last to kneel and did so with such conceit that her knee never even touched the ground. Under Andromedas command the humans have expanded their kingdom to include not only the glass city of Crystal Cove, but also the coastal city of Wavesbreak and the desert oasis of Eden. These cities are neither welcoming nor offended by foreigners, they are simply overlooked. For this reason, many human settlements contain a variety of races and people.",
  rivers:
    "When the gods first roared into existence they flowed from the river of life and set up camp at its fork. For eons the gods plotted out the universe and dedicated their lives to creation nestled between those riverbeds. All of the gods intertwined themselves and let their power seep through the earth until the Ender Tree sprouted into existence to the rivers northern neck. Then they practiced their craft of creation in the meadows that lay to its east, it was here that halflings were born. The halflings are P’lores earliest attempts at human beings, she molded them from the rich dark soil of the rolling grass hills rich with moisture from the River of Life. She sculpted them just as he sculpted the humans and told them to sunbathe shortly to dry before a quick soak in the river to solidify. The still wet halflings laid themselves down in the sunniest grove they could find just as they were told, however after feeling the warmth and brightness of their first son their eyes began to shut. Then as their first blades of grass lightly brushed against their bodies their limbs began to relax. And as the first breeze from their first wind washed over them for the first time, they took their first slumber. When the halflings awoke, they were shocked to see they had shrunken so much that the tallest of them was but four feet tall. In a panic they rushed to the river and figured they would soak quickly as P’lore said as to do no further damage. However, once the first waters of their first river filled the cracks in their dry skin their first worries faded away. And when the first current from their first river traced their bodies, they let it carry them away. Hours later the halflings emerged from the river over enriched by the river of life and tripled their lifespans. To this day the realm regards the fork in the rivers as a holy site flowing with raw arcane power and magic. The most devout priests in all the lands converged on this place and under the blessing of the gods created a church state that respects and includes every religion in the land. They erected monuments and temples to every god under the sun, and the sun herself of course. To this day the kingdom is run by the divine council, a board of 11 priests and priestess (one for every god) that govern the lands fairly through prayer and divine guidance. Through it is true that the river lands overflow with holy folk it is equally as true that it overflows with vagrants. ",
  eden: "Adventure Awaits",
  tree: "Adventure Awaits",
  waves: "Adventire Awaits"
};

const areaNames = {
  isle: "The Isle of Small Folk",
  calirum: "The Kingdom of Calirum",
  veremite: "The Kingdom of Theramite",
  dragons: "Dragon's Coast Kingdom",
  rivers: "The Kingdom of Rivers Reach",
  eden: "Eden",
  tree: "Ender Tree",
  waves: "Wavesbreak"
};



//scale the map
$(document).ready(function () {
  $("map").imageMapResize();
});

//pop up labels
$(document).ready(function () {
  const popupImg = $("<img>", {
    id: "popup-img",
    css: {
      position: "absolute",
      display: "none",
      zIndex: 1000,
      pointerEvents: "none",
      maxHeight: "5.5vh",
    },
  }).appendTo("body");

  $("area").on("mouseover", function (e) {
    const title = $(this).attr("title");
    const imgSrc = areaImages[title];
    if (imgSrc) {
      popupImg.attr("src", imgSrc).css({
        top: e.pageY + 10,
        left: e.pageX + 10,
        display: "block",
      });
    }
  });

  $("area").on("mousemove", function (e) {
    popupImg.css({
      top: e.pageY + 10,
      left: e.pageX + 10,
    });
  });

  $("area").on("mouseout", function () {
    popupImg.css("display", "none");
  });
});

//pop up overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

$(function () {
  $("area").on("click", function (e) {
    e.preventDefault(); // prevents area navigation
    on();
  });

  $("#overlay").on("click", function (e) {
    if (e.target.id === "overlay") {
      off();
    }
  });
});


$(document).ready(function () {
$("area").on("click", function (e) {
    const name = document.getElementById("name");
    const desc = document.getElementById("desc");
    const title = $(this).attr("title");
    name.innerHTML = areaNames[title];
    desc.innerHTML = areaDesc[title];
});
})

//Google sheet 
const sheetId = "1uRJSpoNwgT_Gpx6Nq3MNpkBvp4cobZFQlmlW8F0bs6o";
const sheetName = encodeURIComponent("Sheet3");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;


//google sheets
/*
$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    //var data = $.csv.toArrays(response);
    var data = $.csv.toObjects(response);
    console.log(data);
    // 'data' is an Array of Objects

    //add their name to sidebar list
    for (const person of data) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(person.Name);
      node.appendChild(textnode);
      node.onclick = function UpdateInfo() {
        nameDisplay.innerHTML = person.Name;
        age.innerHTML = "Age: " + person.Age;
        race.innerHTML = "Race: " + person.Race;
        clas.innerHTML = "Class: " + person.Class;
        relations.innerHTML = "Relations: " + person.Relations;
        desc.innerHTML = person.Description;
      };
      list.appendChild(node);
    }




    console.log(data[0].Name)

  }
});
*/
