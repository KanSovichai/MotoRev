const data = [
  {
    "name": "Honda CBR 1000RR-R SP Fireblade",
    "description": "Honda's ultimate MotoGP-derived superbike, engineered for track dominance with cutting-edge aerodynamics and a screaming inline-four.",
    "specs": "1000cc, liquid-cooled inline-4; 217.5 hp; Öhlins semi-active suspension; Brembo Stylema R calipers; 6-axis IMU with cornering ABS and launch control.",
    "img_link": "https://i.pinimg.com/1200x/3a/87/6c/3a876c14ab3e517eec14a784bb79c4da.jpg"
  },
  {
    "name": "Yamaha R1M",
    "description": "The pinnacle of Yamaha's R-series, combining the iconic CP4 crossplane engine with semi-active suspension and carbon fibre bodywork for serious track use.",
    "specs": "998cc, liquid-cooled inline-4; crossplane crankshaft; 200 hp; Öhlins Electronic Racing Suspension; 6-axis IMU with full electronics package.",
    "img_link": ""
  },
  
  {
    "name": "Honda CB650R",
    "description": "A sleek neo-sports café roadster blending everyday usability with genuine performance, wrapped in minimalist styling inspired by Honda's RC racers.",
    "specs": "649cc, liquid-cooled inline-4; 95 hp; Showa SDBV front fork; assist and slipper clutch; Honda Selectable Torque Control (HSTC).",
    "img_link": "https://frasermotorcycles.com.au/cdn/shop/files/2023-Honda-650R-Black_1600x.jpg?v=1708320830"
  },
  {
    "name": "BMW S1000RR",
    "description": "Germany's premier superbike, famed for its asymmetric styling, ruthless power delivery, and class-leading electronics package.",
    "specs": "999cc, liquid-cooled inline-4; ShiftCam VVT; 210 hp; Brembo radial calipers; optional DDC semi-active suspension; 6-axis IMU with full electronics suite.",
    "img_link": "https://i.pinimg.com/1200x/ed/09/1c/ed091cce8a98e5fef2a0ee839651a810.jpg"
  },
];

const cardContainer = document.getElementById("cards-container");
let featured_indexes = [3,2,0];
for (let i = 0; i < featured_indexes.length; i++) {
    cardContainer.innerHTML += `
    <div class="card">
    	<img src="${data[featured_indexes[i]].img_link}" alt="">
    	<div class="card-text-container">
    		<h1>${data[featured_indexes[i]].name}</h1>
    		<a href="">View</a>
    	</div>
    </div>
    `;
}