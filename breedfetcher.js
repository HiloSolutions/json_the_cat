const request = require('request');

const dynamicBreedRequest = (search) => {
  if (search === '') {
    console.log("Error: Breed cannot be empty");
    return;
  }
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + search;

  request(url, function(error, response, body) {
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      console.log("Error: Breed not found.");
      return;
    }

    if (error) {
      console.log('statusCode:', response && response.statusCode);
      console.error('error:', error);
    }
    
    console.log('body:', data[0].description);
  });
};


// let promise = new Promise((resolve,reject) => {
//   const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
//   //run code to request info
//   request(url, function(error, response, body) {
//     const data = JSON.parse(body);
//     //console.error('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body:', data[0].description);
//     console.log('typeof body:', typeof data);
//   });

//   if (request) {
//     resolve("It worked!");
//   } else {
//     reject("It worked!");
//   }

// });

// promise
//   .then((result) => {

//   })
//   .catch((result) => {
//     console.log(error);
//   });


const breed = process.argv.splice(2).toString().toLowerCase();
dynamicBreedRequest(breed);
// promise(breed);