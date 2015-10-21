console.log('wassup - sober app');

var app = angular.module('soberApp', []);

app.controller('sobExpCtrl', function($scope) {
    $scope.myIntro = true;
    $scope.toggle =function() {
    	$scope.myIntro = !$scope.myIntro;
    }
});

app.controller('sobExpCtrl', function($scope) {
    $scope.myIntro = true;
    $scope.toggle =function() {
    	$scope.myIntro = !$scope.myIntro;
    }
});

app.controller('weekOneCtrl', function($scope) {
 
});

app.controller('weekTwoCtrl', function($scope) {
 
});

app.controller('weekThreeCtrl', function($scope) {
 
});

app.controller('weekFourCtrl', function($scope) {
 
});