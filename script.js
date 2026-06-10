const data = [
  {
    "name": "Honda CBR 1000RR-R SP Fireblade",
    "description": "Honda's ultimate MotoGP-derived superbike, engineered for track dominance with cutting-edge aerodynamics and a screaming inline-four.",
    "specs": "1000cc, liquid-cooled inline-4; 217.5 hp; Öhlins semi-active suspension; Brembo Stylema R calipers; 6-axis IMU with cornering ABS and launch control.",
    "img_link": "https://i.pinimg.com/1200x/3a/87/6c/3a876c14ab3e517eec14a784bb79c4da.jpg"
  },
  {
    "name": "Aprilia RSV4 Factory",
    "description": "A championship-bred Italian superbike born from Aprilia's WSBK dominance, featuring a distinctive narrow-angle V4 and factory-spec electronics.",
    "specs": "1099cc, liquid-cooled 65° V4; 217 hp; Öhlins NIX30/TTX36 suspension; Brembo Stylema calipers; 6-axis IMU with full APRC electronics suite.",
    "img_link": ""
  },
  {
    "name": "Yamaha R1M",
    "description": "The pinnacle of Yamaha's R-series, combining the iconic CP4 crossplane engine with semi-active suspension and carbon fibre bodywork for serious track use.",
    "specs": "998cc, liquid-cooled inline-4; crossplane crankshaft; 200 hp; Öhlins Electronic Racing Suspension; 6-axis IMU with full electronics package.",
    "img_link": ""
  },
  {
    "name": "Triumph Daytona 675",
    "description": "A beloved British middleweight supersport celebrated for its characterful inline-triple engine, sharp handling, and unmistakable exhaust note.",
    "specs": "675cc, liquid-cooled inline-3; 128 hp; fully adjustable KYB USD forks; Nissin radial calipers; slipper clutch; traction control.",
    "img_link": ""
  },
  {
    "name": "Kawasaki Ninja H2",
    "description": "The world's first production supercharged motorcycle, delivering breathtaking performance through a Kawasaki-developed centrifugal supercharger.",
    "specs": "998cc, liquid-cooled inline-4 with centrifugal supercharger; 200 hp (210+ hp with ram air); Showa BFF suspension; Brembo M50 calipers; IMU-based electronics.",
    "img_link": ""
  },
  {
    "name": "Suzuki GSX-R1000R",
    "description": "The latest evolution of the legendary Gixxer, featuring MotoGP-derived variable valve timing and a finely honed chassis for track and road.",
    "specs": "999.8cc, liquid-cooled inline-4; SR-VVT variable valve timing; 202 hp; Showa BFF suspension; Brembo calipers; IMU-based traction control and cornering ABS.",
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
  {
    "name": "BMW R1200GS",
    "description": "The definitive adventure touring motorcycle, with a legendary boxer twin engine and go-anywhere capability that has set the benchmark for the segment.",
    "specs": "1170cc, air/liquid-cooled boxer twin; 125 hp; Dynamic ESA semi-active suspension; Brembo calipers; 6-axis IMU; cornering ABS Pro; multiple riding modes.",
    "img_link": ""
  }
];

const cardContainer = document.getElementById("cards-container");
let featured_indexes = [7,6,0];
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