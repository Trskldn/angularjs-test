'use strict';

angular.module('viewPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/page/:pageId', {
	templateUrl: 'viewPage/viewPage.html',
	controller: 'viewPageCtrl'
  });
}])

.controller('viewPageCtrl', function($scope, $location, $routeParams, Pages) {
	var pageId = $routeParams.pageId;

	Pages.get(pageId).then(function(page) {
		if (page) $scope.page = page;
		else $location.path('/');
	});

	$scope.deletePage = function() {
		Pages.remove(pageId).then(function() {
			$location.path('/');
		});
	}
});