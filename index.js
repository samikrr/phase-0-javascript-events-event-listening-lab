//create a function addingEventlistener and add addEventlistener inside then call the outer function
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click',function(){
      alert ('I was clicked!');
    });
  }
  addingEventListener();

