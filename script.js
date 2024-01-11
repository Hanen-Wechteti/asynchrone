
let btnLoadJson = document.getElementById('loadJSON')
function loadJson() {
    // Replace 'your-json-file.json' with the actual path to your JSON file
    let ul = document.getElementById('jsonList');
    fetch('tableau1.json')
      .then(response => response.json())
      .then((tableau) => {
            for (let element of tableau){
                let li = document.createElement('li')
                li.innerHTML = element;
                ul.append(li)
            }
;      })
      .catch(error => console.error('Error fetching JSON:', error));
  }
  
    btnLoadJson.addEventListener(('click'), loadJson);
