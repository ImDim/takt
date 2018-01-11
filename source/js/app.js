// hamburger

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});


$( document ).ready(function() {
    $('.sound').on('click', function(){
        $(this).toggleClass('sound--off');
    });

    //Добавляем колонки
    generateColumns();

});


// test

if( !Array.prototype.equals ) {

	Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;
        
    var count = 0;

    for (var i = 0, l=this.length; i < l; i++) {
        
        this[i] == array[i] ? (++count) : 0;
        
    }       
    return count;
  }

}




	let questions = [

    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1

	], link = '/assets/tracks/track', answers = [], trackId = 0, track, testStarted = false;
  
  //Трэк загрузился
  function trackLoaded() {
  
  	
  
  }
  
  //Трек проиграл
  function trackEnded(trackId) {
  
    console.info(`fn trackEnded: трек закончился ${link}-${trackId+1}.mp3`);
    console.info(`fn trackEnded: ждем ответа пользователя`);
  
  }
  
  //Грузим трэк
  function loadTrack(trackId) {
  
  	track = new Audio(`${link}-${trackId+1}.mp3`);
    
    track.addEventListener("loadeddata", function() {

      console.info(`fn loadTrack: воспроизводим трек ${link}-${trackId+1}.mp3`);

      trackLoaded();
      track.play();

    });

    track.addEventListener("ended", function() {

      trackEnded(trackId);

    });
    
    return track;
  
  }
  
  function result() {
  
    let percent = questions.equals(answers) * 10;
    alert(`Ваш результат: ${percent}%`);
    
    //Код отображения результата
    
  
  }

  //CallBack тест закончился
  function testEnded() {

    console.info(`fn testEnded: тест закончился`);

    //Выводим результат
    result();

  }
  
  //Воспроизводим трэк
  function play(trackId) {
    
    //Тест закончился
    if( trackId >= questions.length ) {

      testEnded();
      testStarted = false;

    //Продолжаем тест
    } else {

      let track = loadTrack(trackId);

    }

    
  
  }

  //Добавляем колонки
  function generateColumns() {

    let columns='';

    for(let i =0; i < questions.length; i++) {

      columns +=`<div class="controller__column" data-column="${i}">
      <div class="controller__column-track"></div>
      <div class="controller__column-choise controller__column-choise--true" data-answer="true"></div>
      <div class="controller__column-choise controller__column-choise--false" data-answer="false"></div>
    </div>`;

    }

    $(".controller__panel").append(columns);

    console.info(`fn generateColumns: генерируем колонки`);

  }

//Начинаем тест
function beginTest() {

  testStarted = true;

  play(trackId);
  console.info(`fn beginTest: начинаем тест`);
    
}

function getAnswer (answer) {

    answers.push(answer);
    console.info(`fn getAnswer: добавляем ответ ${answer}`);
    console.info(`fn getAnswer: массив ответов изменен на ${answers}`);
    console.info(`--------------------------------------------------`);
    play( ++trackId );
    
};



$(document).on('click', '.controller__column', function(e){

  
  let $this = $(this);
  let thisId = $this.data("column");

  if( thisId !== trackId || !testStarted ) return false;
  if( track ) track.pause();

  let $answer = $(e.target).closest('.controller__column-choise');

  //Отвечаем
  if( $answer.data("answer") === true ) {

    getAnswer(1);

  } else {

    getAnswer(0);

  }



  

  //Удаляем трек и все обработчики
  $(track).remove();

});



// participles

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 57,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });