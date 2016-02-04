import moment from 'moment';
timerDirective.$inject = ['$interval'];
   export default function timerDirective ($interval) {
    var directive;
        
    function link(scope, element) {
      var endDate = moment(scope.endDateAttr),
      startDate = moment(scope.startDateAttr),
        intervalPromise,
        update = function () {
          var now = moment(),
            secondsEnd = calculateSeconds(endDate),
            percentage = calculatePercentage(secondsEnd),
            timeString = calculateTimeUnits(secondsEnd);
      
          scope.dateIsBeforeNow = endDate < now;
          scope.dateIsAfterNow = startDate > now;
          scope.timestamp = timeString;
          scope.percentage = percentage;
          scope.secondsEnd = secondsEnd;
          scope.secondsEnd === 0 && $interval.cancel(intervalPromise) && scope.$eval(scope.finishCallback);
        }
      update();
      intervalPromise = $interval(update, 1000); 
    }

    function calculateSeconds(endDate) {
      var now = moment();
      if (endDate > now) {
        return Math.round(endDate.diff(now) / 1000);
      }
      return 0;
    }

    function calculateTimeUnits(secondsEnd) {
      var days, hours, minutes, seconds, timeString;
      //day         
      if (secondsEnd > 86400) {
        days = Math.floor(((secondsEnd / 86400) - (secondsEnd / 86400) % 1));
				hours = Math.floor((secondsEnd - (days * 86400)) / 3600);          
        timeString = days > 1 ? days + ' dagen ' : days + " dag";
        timeString += hours > 0 ? ' en ' + hours + ' uur ' : hours = "";
      }
      //hour
      else if (secondsEnd > 3600) {
        minutes = Math.floor(((secondsEnd / (60)) % 60));
        hours = Math.floor((secondsEnd / (3600)) % 24);
        timeString = hours > 0 ? hours + ' uur ' : hours = "";
        timeString += minutes > 0 ? minutes + ' minuten ' : minutes = "";
      }
      //minutes
      else if (secondsEnd > 60) {
        seconds = Math.floor(secondsEnd % 60);
        minutes = Math.floor(((secondsEnd / (60)) % 60));
        timeString = minutes > 0 ? minutes + ' minuten ' : minutes = "";
        timeString += ' en ' + seconds + ' sec';
      }
      else {
        timeString = secondsEnd + ' sec';
      }
      return timeString;
    }

    function calculatePercentage(secondsTillEnd) {

      var percentageSet = [
        { start: 0, end: 60, value: 2.5 },
        { start: 60, end: 180, value: 5 },
        { start: 180, end: 300, value: 10 },
        { start: 300, end: 420, value: 15 },
        { start: 420, end: 500, value: 20 },
        { start: 500, end: 3000, value: 25 },
        { start: 3000, end: 6171, value: 30 },
        { start: 4548, end: 18514, value: 35 },
        { start: 9095, end: 24686, value: 40 },
        { start: 13643, end: 30857, value: 45 },
        { start: 7200, end: 37029, value: 50 },
        { start: 14400, end: 43200, value: 55 },
        { start: 21600, end: 49371, value: 60 },
        { start: 28800, end: 55543, value: 65 },
        { start: 36000, end: 61714, value: 70 },
        { start: 43200, end: 67886, value: 75 },
        { start: 57600, end: 74057, value: 80 },
        { start: 72000, end: 80229, value: 85 },
        { start: 80229, end: 86400, value: 90 },
        { start: 86400, end: -1, value: 99 }
      ];

      if (secondsTillEnd > 0) {
        for (var i = 0; i < percentageSet.length; i++) {
          var percentage = percentageSet[i];
          if (secondsTillEnd >= percentage.start &&
            (percentage.end === -1 ? true : secondsTillEnd < percentage.end)
            ) {
            return percentage.value;
          }
        }
      }
      return 0;
    }

    directive = {
      restrict: 'EA',
      template: function(element,attrs){
          if(attrs.type !== undefined){
        return require("./timer-tpl-"+attrs.type+".html");
          }
          else return "<h5 class='list-item-sub'>sluitingstijd onbekend</h5>"
      },
      scope: {
        startDateAttr:'=startDate',
        endDateAttr: '=endDate',
        finishCallback: '&finishCallback', //optional callback when seconds === 0
      },
      link: link
    }
    return directive;
  };