import angular from 'angular';
export default function UserLotsController($scope,$filter,userLots){       
            $scope.userLots = userLots;

            $scope.toggle = {
                overbid: true,
                highestBidder: true,
                notBidded: true
            }

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