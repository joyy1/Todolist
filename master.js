//form section//
    document.querySelector('form');
    var formone=document.querySelector('form');

    document.querySelector('#input');
    var inputfill = document.querySelector('#input');

    formone.addEventListener('submit', function(e){
      e.preventDefault();
      todomaker(inputfill.value);
      inputfill.value='';
    });

    document.querySelector('ul');
    var todaytodo = document.querySelector('ul');
var todomaker=function(text){

  var todo = document.createElement('li');

    todo.textContent=text;

    todaytodo.appendChild(todo);
  };

  //section for reset button//
  document.querySelector('ul');
  var todaytodo = document.querySelector('ul');

  document.getElementById('but');
  var resetbutton=document.getElementById('but');
  resetbutton.addEventListener('click',function(){
    while(todaytodo.firstChild){
    todaytodo.removeChild(todaytodo.firstChild);
  }
  });
