const request = require("request");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// console.log(request);

/*
Write the logic in breedFetcher.js to fetch the
Siberian data from the API endpoint using request.
*/

// request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.

//   // console.log("TYPE OF BODY:", typeof body);

//   // const data = JSON.parse(body);
//   // console.log(data);
//   // console.log(typeof data);
//   //date is being returned as a string, so deserialize it (parse to object)
//   // JSON.parse(body);
// });
//Allow the user to specify the breed name using command-line arguments.
//const catName = process.argv[2];  //to get user input for breed <-------- USE THIS VERSION

rl.question("What is the breed?", userBreedInput => {
  console.log(`Breed: ${userBreedInput}`);

  request(`https:/api.thecatapi.com/v1/breeds/search?q=${userBreedInput}`, (error, response, body) => {

    // console.log("ERROR", error);

    if (error) {
      console.log("This page doesn't exist");
      rl.close();
      return;
    } else {


      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      let parsedBody = JSON.parse(body);
      //if the parsedBody returns an empty array, display error message
      if (parsedBody.length === 0) {
        console.log('error:', 'This breed is not in our database'); // Print the error if one occurred
      } else {
        console.log(parsedBody[0].description); // Print the description for the breed
      }



      rl.close();
    }
  });


});







