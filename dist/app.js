const app = angular.module('honeyBookContacts', []);

app.controller('mainController', function($scope,$http) {
  
  $scope.pageData = 'Loading...';
  
  $http({
    method: 'GET',
    url: 'https://candidate-test.herokuapp.com/contacts'
  }).then(function successCallback(response) {
      $scope.contacts = response.data;
    }, function errorCallback(response) {
      $scope.pageData = "Oopsy Daisy! No response."
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
