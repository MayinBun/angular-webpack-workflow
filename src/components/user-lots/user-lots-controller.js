import angular from 'angular';
export default class UserLotsController {
    constructor($scope, $filter, userLots) {
        this.$scope = $scope;
        this.$filter = $filter;
        this.userLots = userLots;

        this.$scope.userLots = {
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

        this.$scope.$watch('userLots', function () {
            angular.forEach($scope.userLots, function (value, key) {
                value.lots = $filter('filter')(userLots, value.options);
            })
        })

        this.toggle = {
            overbid: true,
            highestBidder: true,
            notBidded: true
        }

        this.$scope.BIDDED = "";
        this.$scope.HIGHESTBIDDER = "";
        this.$scope.NOTBIDDED = "";
    }
    custom(item) {
        if (this.$scope.toggle.overbid) {
                if (item.bidded && item.highestBidder || !item.bidded) {
                    return item;
                }
            }
            else {
                return item;
            }
    }
    highestBidFilter(value) {
        if (value) {
            if (this.toggle.notBidded) {
                this.$scope.BIDDED = "";
            }

            this.$scope.HIGHESTBIDDER = "";
        }
        else {
            this.$scope.HIGHESTBIDDER = value;
        }
    }
    notBidFilter(value) {
        if (value) {
            this.$scope.BIDDED = "";

        } else {
            this.$scope.BIDDED = true;
            if (this.toggle.highestBidder) {
                this.$scope.HIGHESTBIDDER = "";
            }
        }
    }
}
UserLotsController.$inject = ['$scope', '$filter', 'userLots'];