const dormList = [
  {
    Name: "560 Lincoln St.",
    Class: "560lincoln",
    lat: 42.06146145,
    long: -87.6756815,
    Size: 422,
    Type: "Residence Hall",
    Area: "North",
    AC: true,
    Dining: false,
    Suite: true,
    "All-gender": true,
  },
  {
    Name: "1838 Chicago Ave.",
    Class: "1838",
    lat: 42.05110501,
    long: -87.67816606,
    Size: 120,
    Type: "Residence Hall",
    Area: "South",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "2303 Sheridan Rd. (GREEN House)",
    Class: "greenhouse",
    lat: 42.05949702,
    long: -87.6765947,
    Size: 40,
    Type: "Residence Hall",
    Area: "Northeast",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "2349 Sheridan Rd.",
    Class: "2349",
    lat: 42.06130671,
    long: -87.6761558,
    Size: 90,
    Type: "Residence Hall",
    Area: "North",
    AC: false,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Allison Hall",
    Class: "allison",
    lat: 42.05060418,
    long: -87.6782444,
    Size: 363,
    Type: "Residence Hall",
    Area: "South",
    AC: true,
    Dining: true,
    Suite: false,
    "All-gender": true,
  },
  {
    Name: "Elder Hall",
    Class: "elder",
    lat: 42.06103289,
    long: -87.67728019,
    Size: 345,
    Type: "Residence Hall",
    Area: "North",
    AC: true,
    Dining: true,
    Suite: false,
    "All-gender": true,
  },
  {
    Name: "Bobb-McCulloch Hall",
    Class: "bobb",
    lat: 42.05996322,
    long: -87.67542938,
    Size: 496,
    Type: "Residence Hall",
    Area: "Northeast",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Foster-Walker Complex",
    Class: "plex",
    lat: 42.05298388,
    long: -87.67817516,
    Size: 582,
    Type: "Residence Hall",
    Area: "Southwest",
    AC: true,
    Dining: true,
    Suite: false,
    "All-gender": true,
  },
  {
    Name: "Jones Hall",
    Class: "jones",
    lat: 42.04951668,
    long: -87.67431117,
    Size: 121,
    Type: "Residence Hall",
    Area: "South",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Kemper Hall",
    Class: "kemper",
    lat: 42.06117345,
    long: -87.67423103,
    Size: 165,
    Type: "Residence Hall",
    Area: "North",
    AC: true,
    Dining: false,
    Suite: true,
    "All-gender": true,
  },
  {
    Name: "Lindgren House",
    Class: "lindgren",
    lat: 42.05968626,
    long: -87.67619105,
    Size: 37,
    Type: "Residence Hall",
    Area: "Northeast",
    AC: false,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Rogers House",
    Class: "rogers",
    lat: 42.05154068,
    long: -87.67853493,
    Size: 49,
    Type: "Residence Hall",
    Area: "South",
    AC: false,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Sargent Hall",
    Class: "sargent",
    lat: 42.0588595,
    long: -87.67524432,
    Size: 157,
    Type: "Residence Hall",
    Area: "Northeast",
    AC: false,
    Dining: true,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Shepard Hall",
    Class: "shepard",
    lat: 42.05108938,
    long: -87.67829267,
    Size: 153,
    Type: "Residence Hall",
    Area: "South",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Ayers Hall",
    Class: "ayers",
    lat: 42.06055079,
    long: -87.67463706,
    Size: 170,
    Type: "Residential College",
    Area: "Northeast",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Chapin Hall ",
    Class: "chapin",
    lat: 42.05126465,
    long: -87.68045051,
    Size: 72,
    Type: "Residential College",
    Area: "Southwest",
    AC: false,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "2303 Sheridan Rd. ",
    Class: "2303",
    lat: 42.05949702,
    long: -87.6765947,
    Size: 40,
    Type: "Residential College",
    Area: "Northeast",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "East Fairchild",
    Class: "efc",
    lat: 42.05078145,
    long: -87.67427763,
    Size: 109,
    Type: "Residential College",
    Area: "South",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Hobart House ",
    Class: "hobart",
    lat: 42.05190354,
    long: -87.67850153,
    Size: 50,
    Type: "Residential College",
    Area: "South",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "North Mid-Quads",
    Class: "nmq",
    lat: 42.05192888,
    long: -87.67953558,
    Size: 88,
    Type: "Residential College",
    Area: "Southwest",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "South Mid-Quads ",
    Class: "smq",
    lat: 42.05150168,
    long: -87.67895784,
    Size: 88,
    Type: "Residential College",
    Area: "Southwest",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Slivka Hall",
    Class: "slivka",
    lat: 42.06062123,
    long: -87.67531556,
    Size: 140,
    Type: "Residential College",
    Area: "Northeast",
    AC: true,
    Dining: false,
    Suite: true,
    "All-gender": false,
  },
  {
    Name: "West Fairchild",
    Class: "wfc",
    lat: 42.05116568,
    long: -87.67539924,
    Size: 106,
    Type: "Residential College",
    Area: "South",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
  {
    Name: "Willard Hall ",
    Class: "willard",
    lat: 42.05183478,
    long: -87.68119685,
    Size: 261,
    Type: "Residential College",
    Area: "Southwest",
    AC: true,
    Dining: false,
    Suite: false,
    "All-gender": false,
  },
];

var purpleIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var grayIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var mymap = L.map("mapid").setView([42.055984, -87.675171], 15);

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
).addTo(mymap);

var markers = {};

(function makeMarkers() {
  for (var i in dormList) {
    var marker = L.marker([dormList[i].lat, dormList[i].long]).setIcon(
      grayIcon
    );
    marker.addTo(mymap);
    marker.bindPopup(dormList[i].short_name);
    marker.on("mouseover", function (e) {
      this.openPopup();
      this.setIcon(purpleIcon);
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
      this.setIcon(grayIcon);
    });

    markers[i] = marker;
    marker.bindPopup(`<p>${dormList[i].Name} </p>`);
  }
})();

let filterList = [];

document.getElementById("search").onclick = function () {
  for (let tag of document.getElementsByTagName("tr")) {
    tag.style.backgroundColor = "transparent";
  }

  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  filterList = [];
  for (let check of checkboxes) {
    switch (check.id) {
      case "north":
        filterList.push("North");
        break;
      case "south":
        filterList.push("South");
        break;
      case "southwest":
        filterList.push("Southwest");
        break;
      case "northeast":
        filterList.push("Northeast");
        break;
      case "small":
        filterList.push("Small");
        break;
      case "medium":
        filterList.push("Medium");
        break;
      case "large":
        filterList.push("Large");
        break;
      case "hall":
        filterList.push("Residence Hall");
        break;
      case "college":
        filterList.push("Residential College");
        break;
      case "dining":
        filterList.push("Dining");
        break;
      case "AC":
        filterList.push("AC");
        break;
      case "bathroom":
        filterList.push("Suite");
        break;
      case "gender":
        filterList.push("All-gender");
        break;
    }
  }
  let filteredDorms = dormList.filter((dorm) => checkFilters(dorm, filterList));

  if (!filteredDorms.length) {
    document.getElementById("notice").innerHTML =
      "<h3> NO MATCHES FOUND :^( Try lowering your standards & removing a few filters!</h3>";
  } else {
    document.getElementById("notice").innerHTML = "";
  }
  for (let i = 0; i < filteredDorms.length; i++) {
    console.log(filteredDorms[i].Class);
    let dormRow = document.getElementById(filteredDorms[i].Class);
    dormRow.style.backgroundColor = "lightgreen";
  }
};

const checkFilters = (object, filters) => {
  let locationsCheck = filters.filter(
    (i) => i == "North" || i == "South" || i == "Southwest" || i == "Northeast"
  );
  let sizeCheck = filters.filter(
    (i) => i == "Small" || i == "Medium" || i == "Large"
  );
  let typeCheck = filters.filter(
    (i) => i == "Residence Hall" || i == "Residential College"
  );
  let dormArea = object.Area;
  let dormPop = object.Size;
  let dormSize;
  if (dormPop < 100) {
    dormSize = "Small";
  } else if (dormPop > 100 && dormPop <= 200) {
    dormSize = "Medium";
  } else {
    dormSize = "Large";
  }
  let areaMatch = true;
  let sizeMatch = true;
  let typeMatch = true;
  let diningMatch = true;
  let acMatch = true;
  let suiteMatch = true;
  let genderMatch = true;
  if (locationsCheck.length > 0) {
    if (locationsCheck.includes(dormArea) == false) {
      areaMatch = false;
    }
  }
  if (sizeCheck.length > 0) {
    if (sizeCheck.includes(dormSize) == false) {
      sizeMatch = false;
    }
  }
  if (typeCheck.length > 0) {
    if (typeCheck.includes(object.Type) == false) {
      typeMatch = false;
    }
  }
  if (filters.includes("Dining")) {
    if (object.Dining == false) {
      diningMatch = false;
    }
  }
  if (filters.includes("AC")) {
    if (object.AC == false) {
      acMatch = false;
    }
  }
  if (filters.includes("Suite")) {
    if (object.Suite == false) {
      suiteMatch = false;
    }
  }
  if (filters.includes("All-gender")) {
    if (object["All-gender"] == false) {
      genderMatch = false;
    }
  }
  if (
    areaMatch &&
    sizeMatch &&
    typeMatch &&
    diningMatch &&
    acMatch &&
    suiteMatch &&
    genderMatch
  ) {
    return true;
  } else {
    return false;
  }
};
