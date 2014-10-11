'use strict';

angular.module('pagesList', ['ngRoute', 'pageServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {	
	templateUrl: 'pagesList/pagesList.html',
	controller: 'pagesListCtrl'
  });
}])
	
.controller('pagesListCtrl', function($scope, Pages) {
	Pages.query().then(function(pages) {
		$scope.pages = pages;
	});
});