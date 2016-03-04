export default function NewsController($scope, $state, $stateParams) {
    let id = $stateParams.id;
    $scope.content = [];
   
}

NewsController.$inject = ['$scope','$state','$stateParams'];