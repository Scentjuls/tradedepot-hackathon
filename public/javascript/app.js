function autocomplete(input,latInput,lngInput){

    if(!input){ //if no input, prevent the function from running
      return;
    }
  
  //initialize the google maps javascript autocomplete
    const dropdown = new google.maps.places.Autocomplete(input);
  
  //listen for when an location has been selected
    dropdown.addListener('place_changed',()=>{
      const place = dropdown.getPlace();
  
      //populate both lat and lng inputs
      latInput.value =  place.geometry.location.lat();
      lngInput.value = place.geometry.location.lng();
    }) 
  
  //if someone hits enter on the address field, dont submit the form.
    input.on('keydown',(e)=>{
      if(e.keyCode === 13){
        e.preventDefault();
      }
    })
  
  }
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  
  Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
  };
  
  NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line
  
  NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach((elem) => {
      elem.on(name, fn);
    });
  };
  

autocomplete($('#address'),$('#lat'),$('#long'));