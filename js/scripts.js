// Business logic for destination """"database"""
function TravelBook() {
  this.destinations = {};
  this.currentId = 0;
}

TravelBook.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

TravelBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelBook.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
}

// Business Logic for destinations ------------------
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let hawaii = new Destination("Hawaii", "Volcanoes", "Summer", "Fun but crowded");

let paris = new Destination("Paris", "Eifel Tower", "Fall", "Dirty, and people are not very warm");

let ireland = new Destination("Ireland", "Blarney Castle", "Summer", "Lots of green, good beer, and friendly people");

let seattle = new Destination("Seattle", "Space Needle", "Spring", "Busy city, great coffee and I loved the Pike Street Market.");

// User Interface Logic
$(document).ready(function() {
  $("button#hawaii").click(function() {
    $("#output").show();
    $("#location").text(hawaii.location);
    $("#landmarks").text(hawaii.landmarks);
    $("#timeOfYear").text(hawaii.timeOfYear);
    $("#notes").text(hawaii.notes);
  });
  $("button#paris").click(function() {
    $("#output").show();
    $("#location").text(paris.location);
    $("#landmarks").text(paris.landmarks);
    $("#timeOfYear").text(paris.timeOfYear);
    $("#notes").text(paris.notes);
  });
  $("button#ireland").click(function() {
    $("#output").show();
    $("#location").text(ireland.location);
    $("#landmarks").text(ireland.landmarks);
    $("#timeOfYear").text(ireland.timeOfYear);
    $("#notes").text(ireland.notes);
  });
  $("button#seattle").click(function() {
    $("#output").show();
    $("#location").text(seattle.location);
    $("#landmarks").text(seattle.landmarks);
    $("#timeOfYear").text(seattle.timeOfYear);
    $("#notes").text(seattle.notes);
  });
});