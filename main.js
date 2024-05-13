const descriptionEl = document.getElementById('one1hover');
const mapImg = document.querySelector('.mapImg');
const mapImgSrc = mapImg.src;
const currentDay = mapImgSrc.substring(mapImgSrc.lastIndexOf('/') + 1, mapImgSrc.lastIndexOf('map'));

console.log(currentDay)
const allDots = []

for (let i = 1; i <= 8; i++) {
    const currentDot = document.getElementById('one' + i);
    if (currentDot) {
        allDots.push(currentDot)
    } else {
        break
    }
}

fetch('./infractions.json')
    .then(response => response.json())
    .then(data => {
        makePageInteractive(data)
    })

function makePageInteractive (infractions) {
    console.log(infractions[currentDay])
    allDots.forEach((el) => {
        el.addEventListener('click', () => {
            const currentNumber = el.id.match(/\d+/); 
            const chosenData = infractions[currentDay][currentNumber]
            descriptionEl.classList.add('active')
            descriptionEl.innerHTML = `
            PRECINCT : ${chosenData['precinct']} <br> 
            AGE : ${chosenData['age']} <br> 
            SEX : ${chosenData['sex']} <br> 
            RACE : ${chosenData['race']}
            `
            console.log(chosenData)
        } )
    })    
}



