const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result= document.getElementById("result");
const btn = document.getElementById("search-btn");


btn.addEventListener("click", () => {
    let inpword = document.getElementById("inpt-word").value;
    console.log(inpword);

    fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data);
        document.getElementById("word").innerHTML =`${inpword}`;
        document.getElementById("noun").innerHTML =`${data[0].meanings[0].partOfSpeech}`;
        document.getElementById("exp").innerHTML = `${data[0].meanings[0].definitions[0].definition}`;
        document.getElementById("sen").innerHTML = `${data[0].meanings[0].definitions[0].example}`; 
    }).catch((error) => {
        document.getElementById("result").innerHTML = `<p class="ms-5 mt-3 fs-1 fw-bold">Word Not Found</p>`;
    })
});