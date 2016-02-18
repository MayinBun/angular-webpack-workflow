import angular from 'angular';
export default function UserLotsController($scope,$filter,userLots){       
            $scope.userLots = {
                all: {
                    options: {
                        open: true
                    },
                    lots: {}
                },
                overbid: {
                    options: {
                        open: true,
                        highestBidder: false,
                        bidded: true
                    },
                    lots: {}
                },
                highestbidder: {
                    options: {
                        open: true,
                        highestBidder: true
                    },
                    lots: {}
                },
                notbidded: {
                    options: {
                        open: true,
                        bidded: false
                    },
                    lots: {}
                }
            }

            $scope.$watch('userLots', function () {
                angular.forEach($scope.userLots, function (value, key) {
                    value.lots = $filter('filter')(userLots, value.options);
                })
            });

            $scope.toggle = {
                overbid: true,
                highestBidder: true,
                notBidded: true
            }

            $scope.showOverbid = true;
            $scope.showHighest = true;
            $scope.showNotBidded = true;

            $scope.BIDDED = "";
            $scope.HIGHESTBIDDER = "";
            $scope.NOTBIDDED = "";



            $scope.custom = function (item) {
                if (!$scope.toggle.overbid) {
                    if (item.bidded && item.highestBidder || !item.bidded) {
                        return item;
                    }
                }
                else {
                    return item;
                }
            }
        
            //works
            $scope.highestBidFilter = function (value) {
                //console.log(value);
                if (value) {
                    if ($scope.toggle.notBidded) {
                        $scope.BIDDED = "";
                    }
                    
                    $scope.HIGHESTBIDDER = "";
                }
                else {
                    $scope.HIGHESTBIDDER = value;
                }
            }
            
            //works
            $scope.notBidFilter = function (value) {
                //console.log(value);
                if (value) {
                    $scope.BIDDED = "";

                } else {
                    $scope.BIDDED = true;
                    if ($scope.toggle.highestBidder) {
                        $scope.HIGHESTBIDDER = "";
                    }
                }
            }
        }
        UserLotsController.$inject = ['$scope','$filter','userLots'];