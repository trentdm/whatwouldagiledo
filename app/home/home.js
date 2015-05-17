'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
      $scope.getAnswer = function() {
        $scope.answer = getAnswer();
        $scope.showAnswer = true;
      };

      var answers = [
          "Seek first to understand.",
          "Perfect the paradigm.",
          "Ask itself, w.w.a.d (what would agile do?).",
          "Put people first.",
          "Check Jira.",
          "Update Jira.",
          "Look to the Kanban.",
          "Conference at the sharespace.",
          "Tear down walls (metaphorical and physical).",
          "Update the confluence page.",
          "Discuss it offline.",
          "Celebrate team successes.",
          "Take time for introspection.",
          "Pair program.",
          "Let the team help guide product.",
          "Try to not be bossy.",
          "Realize there's more to Agile than scrum.",
          "Keep scrums short.",
          "Start work with some small deliverable in sight.",
          "Include QA throughout the process.",
          "Keep meetings focused.",
          "Touch base later.",
          "Bring alcohol to the workplace, yaaaay!",
          "Take time out to play foosball.",
          "Master ping pong. Make your enemies weep before you.",
          "Keep noise in shared spaces to a minimum.",
          "Work hard, play hard.",
          "Realize the most important thing you can do at your company is to hire good people.",
          "Prototype code before starting something in earnest, be prepared to throw it away.",
          "Take the team out to lunch once a month.",
          "Update the website.",
          "Focus on one feature at a time.",
          "Allow for some work from home.",
          "Let personnel schedules be somewhat flexible.",
          "Not use your 'Agile Certification' credentials to boss people into making poor decisions.",
          "Have a process, refine the process, don't necessarily get hung up on the process.",
          "Treat your coworkers and employees well, seriously.",
          "Group meetings together, so there's more contiguous time in the rest of the day to get work done.",
          "Allocate an hour a week for devs to improve their skills (read a book, watch lectures together, etc.).",
          "When making management projections, dictate either what you want, or when you want it, but not both.",
          "Give teams enough idea of the scope of a project so they can estimate it accurately.",
          "Negotiation is an important aspect of business, but it does not belong in time estimations.",
          "If you ask someone for an estimate, and don't like the answer, don't bully them into what you want to hear.",
          "Understand that estimates and commitments are not the same thing.",
          "Give people offices, or if a shared space, ample conference rooms for collaboration or just wanting to work in a quiet space.",
          "About me, the author: husband, father, programming enthusiast, yet-to-be-master of irony, fighter, dreamweaver",
          "Deliver the minimum viable product.",
          "Release early, release often.",
          "Be unwavering in commitment to quality. Don't skimp!",
          "Help each other learn new skills and find opportunities to hone them.",
          "Skunk works best works.",
          "Make time for youself.",
          "Be sustainable. Shoot for 40 hour work weeks.",
          "Take time to exercise, three to six times a week!"
      ];

      var prevIndex= -1;

      var getAnswer = function () {
        var index = Math.floor(Math.random() * answers.length);

        while(index == prevIndex){
          index = Math.floor(Math.random() * answers.length);
        }

        prevIndex = index;
        return answers[index];
      };

      $scope.getAnswer();
}]);