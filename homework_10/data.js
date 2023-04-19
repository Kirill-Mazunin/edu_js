// 20230419153932
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

const dataInfo = `{
    "photos": [
      {
        "id": 102685,
        "sol": 1004,
        "camera": {
          "id": 20,
          "name": "FHAZ",
          "rover_id": 5,
          "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
          "id": 5,
          "name": "Curiosity",
          "landing_date": "2012-08-06",
          "launch_date": "2011-11-26",
          "status": "active"
        }
      },
      {
        "id": 102686,
        "sol": 1004,
        "camera": {
          "id": 20,
          "name": "FHAZ",
          "rover_id": 5,
          "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
          "id": 5,
          "name": "Curiosity",
          "landing_date": "2012-08-06",
          "launch_date": "2011-11-26",
          "status": "active"
        }
      },
      {
        "id": 102842,
        "sol": 1004,
        "camera": {
          "id": 21,
          "name": "RHAZ",
          "rover_id": 5,
          "full_name": "Rear Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
          "id": 5,
          "name": "Curiosity",
          "landing_date": "2012-08-06",
          "launch_date": "2011-11-26",
          "status": "active"
        }
      },
      {
        "id": 102843,
        "sol": 1004,
        "camera": {
          "id": 21,
          "name": "RHAZ",
          "rover_id": 5,
          "full_name": "Rear Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
          "id": 5,
          "name": "Curiosity",
          "landing_date": "2012-08-06",
          "launch_date": "2011-11-26",
          "status": "active"
        }
      }
    ]
  }`;

const marsImages = JSON.parse(dataInfo);

const divContent = document.querySelector(".content");

marsImages.photos.forEach((el) => {
  const divContentElement = document.createElement("div");
  divContentElement.classList.add("content-element");
  divContent.appendChild(divContentElement);
  const title = document.createElement("h1");
  title.classList.add("content-title");
  title.innerText = `Sol ${el.sol}: ${el.camera.full_name} (${el.camera.name})`;
  divContentElement.appendChild(title);
  const img = document.createElement("img");
  img.classList.add("content-img");
  img.src = `${el.img_src}`;
  divContentElement.appendChild(img);
  const paragraph = document.createElement("p");
  paragraph.classList.add("content-paragraph");
  paragraph.innerText = `This image was taken by ${el.camera.full_name} (${el.camera.name}) onboard NASA's Mars rover ${el.rover.name} on Sol ${el.sol} (${el.earth_date}).`;
  divContentElement.appendChild(paragraph);
});
