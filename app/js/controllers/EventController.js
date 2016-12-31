'use strict';

eventsApp.controller('EventController', function($scope) {
    
    $scope.snippet = '<span style="color:red">Hi there</span>';
    $scope.boolValue = true;
    $scope.mystyle = {color:'red'};
    $scope.sortorder = "name";
    $scope.event = {
        name: "Learning Angular",
        date: "1/1/2017",
        time: "9:30 pm",
        location: {
            address: "Google HQ",
            city: "Mountian View",
            state: "CA"
        },
        imageUrl: "img/angularjs-logo.png",
        sessions: [
            {
                name:"Directives Masterclass",
                creator:"Zbob",
                duration:1,
                difficulity: "Advanced",
                abstract:"Learn about directives",
                upVoteCount: 0
            },
            {
                name:"Controller fun times",
                creator:"Homos",
                duration:2,
                difficulity: "Intermediate",
                abstract:"Learn about Controllers",
                upVoteCount: 0
            },
            {
                name:"Scopes for fun or profit",
                creator:"Joseee",
                duration:4,
                difficulity: "Introductory",
                abstract:"Learn about scope",
                upVoteCount: 0
            }
        ]
    }
    
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };
});