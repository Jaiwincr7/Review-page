const player=[
    {
        id:1,
        name:"Price Vegeta",
        job:"Drangon Ball",
        img:"img2.jpg",
        text:
        "Vegeta is the prince of an extraterrestrial warrior race known as the Saiyans.He is extremely arrogant, proud and hardworking; constantly referring to his heritage and royal status throughout the series."
    },
    {
        id:2,
        name:"Gon",
        job:"Hunter x Hunter",
        img:"img3.jpg",
        text:
        "Gon possesses incredible senses, being able to see in the dark, spot people from the top of a tall tree, smell when a storm is coming, taste something described as tasteless, can see people at a vast distance and his sense of smell can rival the sense of smell of a dog."
    },
    {
        id:3,
        name:"Asta",
        job:"Black Clover",
        img:"img4.jpg",
        text:
        "Asta is an orphan raised under the care of a church in Hage after his mother abandons him on the church's doorstep. After turning 15 years old, Asta receives a five-leaf clover grimoire with an Anti Magic devil inside."
    },
    {
        id:4,
        name:"Mob",
        job:"Mob Pyscho 100",
        img:"img5.jpg",
        text:
        "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble."
    },
    {
        id:5,
        name:"Son Goku",
        job:"Drangon Ball",
        img:"img1.jpg",
        text:
        "Goku is introduced as an eccentric, monkey-tailed boy who practices martial arts and possesses superhuman strength."
    }
];

const idname=document.querySelector(".name");

const idjob=document.querySelector(".job");

const idimg=document.querySelector("img");

const idtext=document.querySelector(".profile");

let prev=document.querySelector("#left");

let next=document.querySelector("#right");

const surprise=document.querySelector(".surpise");

let current=0;

window.addEventListener("DOMContentLoaded",hello());
function hello(){
    const item=player[current];
    idname.textContent=item.name;
    idjob.textContent=item.job;
    idimg.src=item.img;
    idtext.textContent=item.text;
}

prev.addEventListener("click",decrement);
function decrement(){
    if(current==0){
        current=4;
    }
    else{
    current--;
    }
    hello();
}

next.addEventListener("click",increment);
function increment(){
    if(current==4){
        current=0;
    }
    else{
    current++;
    }
    hello();
}

surprise.addEventListener("click",random)
function random(){
    var var1=current;
    current= Math.floor(Math.random()*5);
    var value=current;
    if(value==var1){
        if(current==0){
            current=4;
        }
        else if(current==4){
            current=0;
        }
        else{
        current++;
        }
    }
    console.log(current);
    hello();
}
