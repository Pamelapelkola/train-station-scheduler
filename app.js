    var config = {
        apiKey: "AIzaSyAt4d3l20BNVVLD26aADUVWZGMzEo6p0EY",
        authDomain: "train-scheduler-bdd78.firebaseapp.com",
        databaseURL: "https://train-scheduler-bdd78.firebaseio.com",
        projectId: "train-scheduler-bdd78",
        storageBucket: "",
        messagingSenderId: "1056839389134"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
      
      //on click event
      $("#add-train-button").on("click", function(event) {
        event.preventDefault();
        

        // Grabs user input
        var trainName = $("#train-input").val().trim();
        var trainDestination = $("#train-destination").val().trim();
        var firstTrain = $("#first-train").val().trim(); 
        var trainFrequency = $("#train-frequency").val().trim();
        
        // Creates object for holding train data
        var newTrain = {
          name: trainName,
          destination: trainDestination,
          first: firstTrain,
          frequency: trainFrequency
        };
        
        // Uploads employee data to the database
        database.ref().push(newTrain);
        
        // Logs everything to console
        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.first);
        console.log(newTrain.frequency);
    })
      
//         // Clears all of the text-boxes
         $("#train-input").val("");
         $("#train-destination").val("");
         $("#first-train").val("");
         $("#train-frequency").val("");
       
       
//       // 3. Create Firebase event for adding train to a row in the html panel when a user adds an entry
       database.ref().on("child_added", function(childSnapshot, prevChildKey) {
      
        console.log(childSnapshot.val());
       })
      
//         // Store everything into a variable.
         var trnName = childSnapshot.val().role;
         var trnDestination = childSnapshot.val().start;
         var trnFirst = childSnapshot.val().rate;
         var trnFrequency = childSnapshot.val().rate;
         
//         // Employee Info
         console.log(trnName)
         console.log(trnDestination);
         console.log(trnFirst);
         console.log(trnFrequency);
      
//         // Prettify the employee start
//         var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
      
//         // Calculate the months worked using hardcore math
//         // To calculate the months worked
//         var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
//         console.log(empMonths);
      
//         // Calculate the total billed rate
//         var empBilled = empMonths * empRate;
//         console.log(empBilled);
      
//         // Add each train's data into the table
//         $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
//         empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
//       });
      
      
// })   