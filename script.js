// function for list view
async function getAllRecords() {
    let groupResultElement = document.getElementById("mammals-info");
  
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer patKlwu7cTNyQ84au.3e995b4cb2ab3d98895192a15fd97e82c21b6c34b595c1808eeb2982757ee1f0`,
      },
    };
  
    // fetch the data 
    await fetch(
      `https://api.airtable.com/v0/app5U3j9UNdyvB7mu/Table%201`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
  
        groupResultElement.innerHTML = ""; 

        let newHtml = "";
     // show name and logo of support group on list view 
     for (let i = 0; i < data.records.length; i++) {
        // let className = data.records[i].fields["Class"];
        let name = data.records[i].fields["Name"];
        let diet = data.records[i].fields["Diet"];
        let habitat = data.records[i].fields["Habitat"];
        let image = data.records[i].fields["Image"];

        // create the cards for each animal with a name 
        
        newHtml += `
    
         <div class="col-xl-4 d-flex justify-content-center card-image-text">
  
          <div class="card decorated-border" style="width: 20rem; border-radius: 30px; height=300px;">
          <h2 class="card-title cherry-bomb-one-regular" style="margin-bottom: 3%; text-align: center;">${name}</h2>
        
        <img src="${image[0].url}" class="card-img card-img-top my-auto" alt="${name}" style="object-fit: contain; width: 310px; height: 270px;">

        
          <p class="card-title cherry-bomb-one-regular" style="margin-bottom: 2%; padding: 2%; "><strong>Diet:</strong> ${diet}</h3>
         <p class="card-title cherry-bomb-one-regular" style="margin-bottom: 2%; padding: 2%;"><strong>Habitat:</strong> ${habitat}</h3>

          </div>
          </div>`;
      }

      groupResultElement.innerHTML = newHtml;
    })}



let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  getOneRecord(idParams[1]); 
} else {
  getAllRecords(); 
};



// dark mode and light mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementsByClassName('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode() 

themeSwitch[0].addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
