console.log("Test Linking VS Code to Github");

var prompt = require('prompt');

//starting the prompt
prompt.start();

prompt.get(['firstName' , 'lastName'], function(err, result){

    //alert method did not work
    //using prompt package
    console.log("User Input Received: ");
    console.log("First Name: " + result.firstName);
    console.log("Last Name: " + result.lastName);

    console.log("IT Worked. \nThe First Step is Always Worth the Time!!!");
});



