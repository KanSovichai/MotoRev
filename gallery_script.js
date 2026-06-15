const sportbikes = [
  {
    "name": "Yamaha R1M",
    "img_link": "https://i.pinimg.com/736x/ab/ed/40/abed403d70efebb6cd3069bf5e64cf69.jpg",
  },
  {
    "name": "Honda CBR1000RR-R SP Fireblade",
    "img_link": "https://i.pinimg.com/1200x/63/58/ab/6358abb9057010912b05f1a4d652f33f.jpg",
  },
  {
    "name": "BMW S1000RR",
    "img_link": "https://i.pinimg.com/736x/f2/58/53/f258536d34b23dbbf926d4ce6a93817b.jpg"
  },
  {
    "name": "Suzuki GSX-R1000R",
    "img_link": "https://i.pinimg.com/1200x/da/fa/f8/dafaf874477dc3f294fc87bef8deaa90.jpg",
  },
  {
    "name": "Ducati V4s",
    "img_link": "https://i.pinimg.com/1200x/9d/eb/60/9deb604b373aa893d48fc2d664283cdc.jpg",
  },
  {
    "name": "Kawasaki Zx-10R",
    "img_link": "https://i.pinimg.com/736x/f2/4c/49/f24c49600c48cd09e8d4735c3a67410f.jpg",
  },
];

const nakedbikes = [
  {
    "name": "Yamaha MT-09",
    "img_link": "https://i.pinimg.com/736x/ac/51/48/ac5148beaadbef1465b11523889a7997.jpg",
  },
  {
    "name": "Honda CB650R",
    "img_link": "https://i.pinimg.com/736x/f7/6b/ce/f76bce54d6461f4739b0ba1f3162d007.jpg",
  },
  {
    "name": "Ducati Streetfighter v4",
    "img_link": "https://i.pinimg.com/1200x/b4/a3/65/b4a3652a13a95d71cfe8b2bb6d6a7b80.jpg"
  },
  {
    "name": "Aprilia Tuono v4",
    "img_link": "https://i.pinimg.com/1200x/72/66/ba/7266ba3ca025851aab434a718e09c9fd.jpg",
  },
  {
    "name": "KTM Super duke 1290 R",
    "img_link": "https://i.pinimg.com/736x/dc/19/eb/dc19eba2788fdfc06e180c63cdd0232e.jpg",
  },
  {
    "name": "Kawasaki Z1000",
    "img_link": "https://i.pinimg.com/1200x/de/34/29/de3429bba6c7eca9a2c66783758e04f8.jpg",
  },
];

const adventurebikes = [
  {
    "name": "BMW R1250GS",
    "img_link": "https://i.pinimg.com/736x/94/24/87/9424871c0702b96109bff20459507a8e.jpg",
  },
  {
    "name": "Honda Africa Twin",
    "img_link": "https://i.pinimg.com/1200x/3e/e1/91/3ee1917dd484400b387f5597d3bee39e.jpg",
  },
  {
    "name": "Ducati Hypermotard",
    "img_link": "https://i.pinimg.com/1200x/ea/16/d1/ea16d1c0594814da1a0bdfe337e7a93f.jpg"
  },
  {
    "name": "Yamaha Tracer 9",
    "img_link": "https://i.pinimg.com/736x/db/71/b7/db71b7779619b026c25ed5eaeb11f611.jpg",
  },
  {
    "name": "Ducati DesertX",
    "img_link": "https://i.pinimg.com/736x/cf/21/36/cf2136c24da9cd055772dc3783506e37.jpg",
  },
  {
    "name": "KTM 890 Adventure R",
    "img_link": "https://i.pinimg.com/736x/ea/58/a7/ea58a724f13e61499ae96a33eb7c9f17.jpg",
  },
];




const galleryCardsContainer = document.getElementById("gallery_cards_container");

for (let i = 0; i < 3; i++) {
  galleryCardsContainer.innerHTML += `
    <div class="gallery_card">
			<img src="${sportbikes[i].img_link}" alt="" />
			<div class="card-text-container">
				<h1>${sportbikes[i].name}</h1>
				<a href="">VIEW</a>
			</div>
		</div>
  `;
}
const galleryCardsContainer2 = document.getElementById("gallery_cards_container2");
for (let i = 3; i < 6; i++) {
  galleryCardsContainer2.innerHTML += `
    <div class="gallery_card">
			<img src="${sportbikes[i].img_link}" alt="" />
			<div class="card-text-container">
				<h1>${sportbikes[i].name}</h1>
				<a href="">VIEW</a>
			</div>
		</div>
  `;
}

const galleryCardsContainer3 = document.getElementById("gallery_cards_container3");
for (let i = 0; i < 3; i++) {
  galleryCardsContainer3.innerHTML += `
    <div class="gallery_card">
			<img src="${nakedbikes[i].img_link}" alt="" />
			<div class="card-text-container">
				<h1>${nakedbikes[i].name}</h1>
				<a href="">VIEW</a>
			</div>
		</div>
  `;
}

const galleryCardsContainer4 = document.getElementById("gallery_cards_container4");
for (let i = 3; i < 6; i++) {
  galleryCardsContainer4.innerHTML += `
    <div class="gallery_card">
			<img src="${nakedbikes[i].img_link}" alt="" />
			<div class="card-text-container">
				<h1>${nakedbikes[i].name}</h1>
				<a href="">VIEW</a>
			</div>
		</div>
  `;
}

const galleryCardsContainer5 = document.getElementById("gallery_cards_container5");
for (let i = 0; i < 3; i++) {
  galleryCardsContainer5.innerHTML += `
    <div class="gallery_card">
			<img src="${adventurebikes[i].img_link}" alt="" />
			<div class="card-text-container">
				<h1>${adventurebikes[i].name}</h1>
				<a href="">VIEW</a>
			</div>
		</div>
  `;
}

const galleryCardsContainer6 = document.getElementById("gallery_cards_container6");
for (let i = 3; i < 6; i++) {
  galleryCardsContainer6.innerHTML += `
    <div class="gallery_card">
			<img src="${adventurebikes[i].img_link}" alt="" />
			<div class="card-text-container">
				<h1>${adventurebikes[i].name}</h1>
				<a href="">VIEW</a>
			</div>
		</div>
  `;
}