app.controller('editController', function ($scope, $location, $routeParams, friendsFactory) {
	friendsFactory.show($routeParams.id, function(friend) {
		friend.birthday = new Date(friend.birthday)
		$scope.friend = friend;
		console.log('here')
	});

	$scope.update = function() {
		friendsFactory.update($scope.friend, function() {
			$location.url(`/edit/${$scope.friend._id}`);
		});
	};
})