
/* Referencias */

const id1 = document.getElementById("id-1")
const first1 = document.getElementById("first-1")
const last1 = document.getElementById("last-1")
const email1 = document.getElementById("email-1")
const avatar1 = document.getElementById("avatar-1")

const id2 = document.getElementById("id-2")
const first2 = document.getElementById("first-2")
const last2 = document.getElementById("last-2")
const email2 = document.getElementById("email-2")
const avatar2 = document.getElementById("avatar-2")

const id3 = document.getElementById("id-3")
const first3 = document.getElementById("first-3")
const last3 = document.getElementById("last-3")
const email3 = document.getElementById("email-3")
const avatar3 = document.getElementById("avatar-3")

const id4 = document.getElementById("id-4")
const first4 = document.getElementById("first-4")
const last4 = document.getElementById("last-4")
const email4 = document.getElementById("email-4")
const avatar4 = document.getElementById("avatar-4")

const id5 = document.getElementById("id-5")
const first5 = document.getElementById("first-5")
const last5 = document.getElementById("last-5")
const email5 = document.getElementById("email-5")
const avatar5 = document.getElementById("avatar-5")

const id6 = document.getElementById("id-6")
const first6 = document.getElementById("first-6")
const last6 = document.getElementById("last-6")
const email6 = document.getElementById("email-6")
const avatar6 = document.getElementById("avatar-6")


const url = "https://reqres.in/api/users?delay=3";

const getData = () => {
  const tarjetas = JSON.parse(localStorage.getItem('tarjetas')); //Buscamos en localStorage si existe  la solicitud: "tarjetas"    
                                                                 //si existe el objeto en el localStrage
                                                                 // lo convertimos de JSON => Objeto con el método JSON.parse(), 
                                                                 //para ser leído por JS
                                                                 // para manipularlo lo asignamos a una variable   
                                                                 //si existe accedemos desde aquí para nuestra solicitud

  if (tarjetas) {
    id1.textContent = tarjetas.data[0].id;
    email1.textContent = tarjetas.data[0].email;
    first1.textContent = tarjetas.data[0].first_name;
    last1.textContent = tarjetas.data[0].last_name;
    avatar1.src = tarjetas.data[0].avatar;
     
    id2.textContent = tarjetas.data[1].id;
    email2.textContent = tarjetas.data[1].email;
    first2.textContent = tarjetas.data[1].first_name;
    last2.textContent = tarjetas.data[1].last_name;
    avatar2.src = tarjetas.data[1].avatar;
    
    id3.textContent = tarjetas.data[2].id;
    email3.textContent = tarjetas.data[2].email;
    first3.textContent = tarjetas.data[2].first_name;
    last3.textContent = tarjetas.data[2].last_name;
    avatar3.src = tarjetas.data[2].avatar;
    
    id4.textContent = tarjetas.data[3].id;
    email4.textContent = tarjetas.data[3].email;
    first4.textContent = tarjetas.data[3].first_name;
    last4.textContent = tarjetas.data[3].last_name;
    avatar4.src = tarjetas.data[3].avatar;
   
    id5.textContent = tarjetas.data[4].id;
    email5.textContent = tarjetas.data[4].email;
    first5.textContent = tarjetas.data[4].first_name;
    last5.textContent = tarjetas.data[4].last_name;
    avatar5.src = tarjetas.data[4].avatar;
   
    id6.textContent = tarjetas.data[5].id;
    email6.textContent = tarjetas.data[5].email;
    first6.textContent = tarjetas.data[5].first_name;
    last6.textContent = tarjetas.data[5].last_name;
    avatar6.src = tarjetas.data[5].avatar;

  } else {
                                                // Si no hay datos en localStorage,
                                                // hacemos una solicitud  GET a la API Fetch
    fetch(url)
      .then(response => {
          return response.json()})
        
      .then(object => {
        id1.textContent = object.data[0].id;
        email1.textContent =object.data[0].email;
        first1.textContent = object.data[0].first_name;
        last1.textContent = object.data[0].last_name;
        avatar1.src = object.data[0].avatar;
 
        id2.textContent = object.data[1].id;
        email2.textContent = object.data[1].email;
        first2.textContent = object.data[1].first_name;
        last2.textContent = object.data[1].last_name;
        avatar2.src = object.data[1].avatar;
        
        id3.textContent = object.data[2].id;
        email3.textContent = object.data[2].email;
        first3.textContent = object.data[2].first_name;
        last3.textContent = object.data[2].last_name;
        avatar3.src = object.data[2].avatar;
        
        id4.textContent = object.data[3].id;
        email4.textContent = object.data[3].email;
        first4.textContent = object.data[3].first_name;
        last4.textContent = object.data[3].last_name;
        avatar4.src = object.data[3].avatar;
       
        id5.textContent = object.data[4].id;
        email5.textContent = object.data[4].email;
        first5.textContent = object.data[4].first_name;
        last5.textContent = object.data[4].last_name;
        avatar5.src = object.data[4].avatar;
       
        id6.textContent = object.data[5].id;
        email6.textContent = object.data[5].email;
        first6.textContent = object.data[5].first_name;
        last6.textContent = object.data[5].last_name;
        avatar6.src = object.data[5].avatar;
        
        localStorage.setItem('tarjetas', JSON.stringify(object));         // Almacenar los datos en localStorage
                                                                          // usamos el método JSON.stringify() 
                                                                          // para convertir un objeto JS => JSON

      })
      .catch(error => console.error(error));
  }
};

getData();


setTimeout(() => {                                 //seTimeout es un metodo predefinido en JS  
                                                    //sintaxis: setTimeout(función, tiempo);
                                                    // este método nos permite programar la ejecución 
                                                    //de una función en una determinada cantidad de tiempo
    localStorage.removeItem('tarjetas');
  }, 15000);        //  30 segundos de vida en el localStorage
setTimeout();