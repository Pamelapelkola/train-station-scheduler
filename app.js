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
    $("#add-train-button").on("click", function (event) {
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

      // Uploads train data to the database
      database.ref().push(newTrain);

      // Logs everything to console
      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.first);
      console.log(newTrain.frequency);
    })

    // Clears all of the text-boxes
    $("#train-input").val("");
    $("#train-destination").val("");
    $("#first-train").val("");
    $("#train-frequency").val("");


    // 3. Create Firebase event for adding train to a row in the html panel when a user adds an entry
    database.ref().on("child_added", function (childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      // Store everything into a variable.
      var trnName = childSnapshot.val().name;
      var trnDestination = childSnapshot.val().destination;
      var trnFirst = childSnapshot.val().first;
      var trnFrequency = childSnapshot.val().frequency;

      //         // Employee Info
      console.log(trnName)
      console.log(trnDestination);
      console.log(trnFirst);
      console.log(trnFrequency);
    })

    $("#table").append("<div class='table'><span class='train-name'> " + val().trnName +
    " </span><span class='train-name'> " + val().trnDestination +
    " </span><span class='first-train'> " + val().trnFirst +
    " </span><span class='next-arrival'> " + val().trnFrequency);
    


    // Assumptions
    // var tFrequency = 3;

    // // Time is 3:30 AM
    // var firstTime = "03:30";


    // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));