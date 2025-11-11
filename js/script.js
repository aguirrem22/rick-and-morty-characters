let currentPage = 1;

const previospag = document.getElementById("prev-page");
const nextpag = document.getElementById('next-page');
const lista = document.getElementById("character-list");


fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.forEach(character => {
            
            const listItem = document.createElement('li');
            const characterImage = document.createElement('img');
            characterImage.src = character.image;
            listItem.appendChild(characterImage);
            const nameitem= document.createElement('p');
            const speciesitem = document.createElement('p');
            nameitem.textContent= 'Name:' + character.name;
            speciesitem.textContent= 'Species:' + character.species;
            listItem.appendChild(nameitem);
            listItem.appendChild(speciesitem);
            lista.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function addpage() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.results.forEach(character => {                       
                const listItem = document.createElement('li');
                const nameitem= document.createElement('p');
                const speciesitem = document.createElement('p');
                nameitem.textContent= 'Name:' + character.name;
                speciesitem.textContent= 'Species:' + character.species;
                const characterImage = document.createElement('img');
                characterImage.src = character.image;
                listItem.appendChild(characterImage);
                listItem.appendChild(nameitem);
                listItem.appendChild(speciesitem);
                lista.appendChild(listItem);

            });
        })
       
        .catch(error => console.error('Error fetching data:', error));
}
nextpag.addEventListener('click', () => {
    currentPage++;
    lista.innerHTML = '';
    addpage();
});
previospag.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        lista.innerHTML = '';
        addpage();
    }
});




