const dormList = [
  {
    Name: "560 Lincoln St.",
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
    lat: 42.05298388,
    long: -87.67817516,
    Size: 49,
    Type: "Residence Hall",
    Area: "Southwest",
    AC: true,
    Dining: true,
    Suite: false,
    "All-gender": true,
  },
  {
    Name: "Jones Hall",
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
    lat: 42.051834777527965,
    long: -87.68119684609334,
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
    marker.bindPopup(`<p>${dormList[i].Name} </p>`).openPopup();
  }
})();

const allDorms = dormList.map(function (dorm) {
  return dorm.Name;
});
const allFilters = {};

//CAMPUS AREA

allFilters.north = dormList
  .filter(function (dorm) {
    return dorm.Area == "North";
  })
  .map(function (dorm) {
    return dorm.Name;
  });

allFilters.south = dormList
  .filter(function (dorm) {
    return dorm.Area == "South";
  })
  .map(function (dorm) {
    return dorm.Name;
  });

allFilters.northeast = dormList
  .filter(function (dorm) {
    return dorm.Area == "Northeast";
  })
  .map(function (dorm) {
    return dorm.Name;
  });

allFilters.southwest = dormList
  .filter(function (dorm) {
    return dorm.Area == "Southwest";
  })
  .map(function (dorm) {
    return dorm.Name;
  });

//DORM SIZE
allFilters.small = dormList
  .filter(function (dorm) {
    return dorm.Size < 100;
  })
  .map(function (dorm) {
    return dorm.Name;
  });
allFilters.medium = dormList
  .filter(function (dorm) {
    return dorm.Size > 100 && dorm.Size <= 200;
  })
  .map(function (dorm) {
    return dorm.Name;
  });
allFilters.large = dormList
  .filter(function (dorm) {
    return dorm.Size > 200;
  })
  .map(function (dorm) {
    return dorm.Name;
  });
//DORM TYPE

allFilters.hall = dormList
  .filter(function (dorm) {
    return dorm.Type == "Residence Hall";
  })
  .map(function (dorm) {
    return dorm.Name;
  });
allFilters.college = dormList
  .filter(function (dorm) {
    return dorm.Type == "Residential College";
  })
  .map(function (dorm) {
    return dorm.Name;
  });

//MISC PERKS
allFilters.AC = dormList
  .filter(function (dorm) {
    return dorm.AC == true;
  })
  .map(function (dorm) {
    return dorm.Name;
  });
allFilters.dining = dormList
  .filter(function (dorm) {
    return dorm.Dining == true;
  })
  .map(function (dorm) {
    return dorm.Name;
  });
allFilters.bathroom = dormList
  .filter(function (dorm) {
    return dorm.Suite == true;
  })
  .map(function (dorm) {
    return dorm.Name;
  });
allFilters.gender = dormList
  .filter(function (dorm) {
    return dorm["All-gender"] == true;
  })
  .map(function (dorm) {
    return dorm.Name;
  });

let checkboxValue = [];

document.getElementById("search").onclick = function () {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  //sets array of CheckBoxValues (user selections/filters) to the id of the inputs/checkboxes
  var numSelected = checkboxes.length;

  if (numSelected) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxValue[i] = checkboxes[i].id;
    }

    const nameObj = [];

    for (let i = 0; i < allDorms.length; i++) {
      nameObj[i] = { name: allDorms[i], matchCount: 0 };

      for (let i = 0; i < checkboxValue.length; i++) {
        if (allFilters[checkboxValue[i]].includes(name)) {
          nameObj[i].matchCount += 1;
        }
      }
    }
  }
};
