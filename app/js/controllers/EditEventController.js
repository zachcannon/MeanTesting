'use strict';

eventsApp.controller('EditEventController', function($scope) {
    $scope.saveEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {   
            window.alert("Here: " + event.name); 
        }
    };
    
    $scope.cancelEdit = function() {
        window.location = "/index.html";
    };
});