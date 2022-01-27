function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}




const coin = document.querySelector('#coin');
const mario = document.querySelector('#avatar');

// It fixed my problem
mario.style.left = 100 +'px';
mario.style.top =  100 + 'px';



let score = 0; 

function calcScore()
{
//insert score on the screen

const scoreCountEl = document.querySelector('#score')
scoreCountEl.innerHTML = `Total score : ${score}`;
document.body.insertBefore(scoreCountEl,coin);
score+= 1;
}
moveCoin();
calcScore();

function moveCoin()
{

  let radomPlaceX = Math.floor(Math.random() *1000);
  let radomPlaceY = Math.floor(Math.random() *800);

 
  coin.style.left = radomPlaceX +'px';
  coin.style.top =  radomPlaceY + 'px';
}

//function that moves mario

const moveJump = 50;

document.addEventListener("keydown", moveImage,false);

function moveImage(e) {
    let kc = e.keyCode;
    
    var top = parseInt(mario.style.top.substr(0,mario.style.top.length - 2 ));
    //Gets the current "left" value minus the "px" as an int.
    var left = parseInt(mario.style.left.substr(0, mario.style.left.length - 2));

    

    switch (kc) {
        case 37:
            //Pressed left.
            if ((left - moveJump) > 0)
            mario.style.left = (left - moveJump) +'px';
            
            break;
        case 38:
            //Pressed up.
            if ((top - moveJump) > 0)
            mario.style.top = (top - moveJump)  + 'px';
            break;
        case 39:
            //Pressed right.
            mario.style.left = (left + moveJump) + 'px';
            break;
        case 40:
            //Pressed down.
            mario.style.top = (top + moveJump) + 'px';
            break;
    }
  //check if mario got the coin
   if (isTouching(mario,coin) ==true)
   {
     console.log(score);
     moveCoin();
     calcScore();
     
   }
   
    
}




