'use strict';

angular.module('pageServices', [])


.factory('Pages', ['$http', '$q', function($http, $q) {
	var _data,
		_idAttr = "total_shares",
		dataLoaded = $http.get("popular.json", {cache:true})
						.success(function(data) {
							_data = data;
							return data;
						});		

	return {
		remove: function(id) {
			return $q.when(dataLoaded, function() {
				return _.remove(_data, function(item) { return item[_idAttr] == id; });
			});
		},

		save: function(item) {

		},

		'get': function(id) {
			return $q.when(dataLoaded, function() {
				return _.filter(_data, function(item) {
					return item[_idAttr] == id;
				})[0];
			});
		},	

		query: function() {
			return $q.when(dataLoaded, function() {
					return _data;
				});
		}
	};
}]);
