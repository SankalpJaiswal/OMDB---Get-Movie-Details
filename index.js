

async function getMovie(){

    try{
        let movie = document.getElementById("movie").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=a98ff007&t=${movie}`)

        let data = await res.json();

        console.log('data:', data)

        appendData(data);

    }

    catch(err){
        console.log('err:', err)
    }
    
}

function appendData(elem){

    document.querySelector("#container").innerHTML="";

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.Poster;

    let title = document.createElement("h3");
    title.innerText = elem.Title;

    let year = document.createElement("h5");
    year.innerText = elem.Year;

    let type = document.createElement("p");
    type.innerText = elem.Type;

    div.append(img,title,year,type);
    document.querySelector("#container").append(div);
    
}


