const tubelight = () =>{

let btext = document.getElementById('bulbdata');

let btext1 = document.body;
console.log(btext1);



    for(x=1;x<6;x++){
        let bid = document.getElementById('lightId'.concat(x));
    
    if(bid.src.match('lighton')){
        bid.src="lightoff.png";
        btext.innerHTML = "Light OFF";
        btext.style.color = "black";
        btext1.style.background = "red";

    }else{
        bid.src="lighton.png";
        btext.innerHTML = "Light ON";
        btext.style.color = "red";
        btext1.style.background = "black";
    } 
    }




   
}