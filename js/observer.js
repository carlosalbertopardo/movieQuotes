
/* Create the observer list */
function ObserverList(){
  this.observerList = [];
}
 
/* Add the observer methods */
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
 
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
 
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
 
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};

ObserverList.prototype.getList = function () {
  return this.observerList;
}

ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};


/* Create subject */
function Subject(){
  this.observers = new ObserverList();

  console.log(this);
  console.log(this.observers );
}
 
Subject.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};
 
Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
 
Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

// The Observer
function Observer(){
  this.update = function(){
    // ...
  };
}

// Extend an object with an extension
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

var pepe = new Subject();



// References to our DOM elements
 
var controlCheckbox = document.getElementById( "mainCheckbox" ),
  addBtn = document.getElementById( "addNewObserver" ),
  container = document.getElementById( "observersContainer" );
 
 
// Concrete Subject
 
// Extend the controlling checkbox with the Subject class
extend( controlCheckbox, new Subject() );
 
// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function(){
  controlCheckbox.notify( controlCheckbox.checked );
};
 
addBtn.onclick = addNewObserver;
 


// Concrete Observer
 
function addNewObserver(){
 
  // Create a new checkbox to be added
  var check = document.createElement( "input" );
  check.type = "checkbox";
 
  // Extend the checkbox with the Observer class
  extend( check, new Observer() );
 
  // Override with custom update behaviour
  check.update = function( value ){
    this.checked = value;
  };
 
  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver( check );
 
  // Append the item to the container
  container.appendChild( check );
}


/* Tengo un subject y muchos observers que lo miran. Cuando el subject CAMBIA los observers va a queresr hacer algo.
CAda observer va a tener un metodo UPDATE con su propia implementacion.

1) cuando el subject cambie su estado va a invocar al metodo NOTIFY.
2) Al hacer Notify() en el subject, por cada unos de los observers, ejecutas el metodo update de cada uno.



    /*
    $('body').keyup(function (event) {

      //jquery's map is different?

      var elements =  $('span[data-attr="' + event.key.toUpperCase() + '"');

      if(elements.length !== 0) {

        $('span[data-attr="' + event.key.toUpperCase() + '"').map(function (index, element) {

          showletter(element);
          updateLetterObject(event.key.toUpperCase());
          
          if (checkWin()) {
            alert('You won!!!');
          };

        });

      } else {
        
        currentErrors++;

        if (currentErrors >= 3) {

          alert('looooserrr');

        }

      }

    });*/

      //Generates a random id
  /*
  function generatId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }*/