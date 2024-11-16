daynightTheme = () =>{
let date = new Date();
let hour = date.getHours();

if(hour>7 && hour<20){
    document.body.style.background = "white";
    document.body.style.color = "black";
}else{
    document.body.style.background = "black";
    document.body.style.color = "white";
}
}

window.addEventListener('load',daynightTheme);


document.querySelector('#input').addEventListener('keydown',(event)=>{
    if(event.key == 'Enter') apiRequest();
});

document.querySelector('#search').addEventListener('click',(event)=>{
    apiRequest();
});

apiRequest= () =>{
    document.querySelector("#grid").textContent = "";

    const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=B3PEYFRJBAO85HzrT8ZpUPml7Nrz88UltgVkQWuojmI';
    
    
    fetch(url).then(response =>{
        if(!response.ok)throw Error(response.statusText);
        return response.json();
    }).then(data=>{loadImages(data);
    }).catch(err=>console.log(err));
}

loadImages = (data) =>{
    for(let i=0; i < data.results.length;i++){
        console.log(data);

        let image = document.createElement('div');
        image.className='img';
        image.style.backgroundImage = "url(" + data.results[i].urls.raw+"&w=1366&h=768" + ")";
        image.addEventListener('dblclick',function(){
            window.open(data.results[i].links.download,'_blank');
        })
        document.querySelector('#grid').appendChild(image);
        }
}