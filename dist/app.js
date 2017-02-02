const app = angular.module('honeyBookContacts', []);

app.controller('mainController', function($scope,$http) {
  
  $scope.message = 'Everyone come and see how good I look!';
  
  $scope.contacts = 'Loading...';
  
  $scope.mailLink = "mailto:" + $scope.email
  
  $http({
    method: 'GET',
    url: 'https://candidate-test.herokuapp.com/contacts'
  }).then(function successCallback(response) {
      console.log(response);
      $scope.contacts = response.data;
    }, function errorCallback(response) {
      // $scope.contacts = response;
    });
});

app.directive('contactCard', function() {
  return {
      restrict: 'E',
      scope: {
        companyName: '@',
        email: '@',
        icon: '@',
        job: '@',
        name: '@',
        phone: '@',
        profileImage: '@'
      },
      templateUrl: 'templates/contact-card.html'
  };
});
