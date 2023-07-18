function skillsMember()  {
    return {
        restrict: 'E',
        templateUrl: 'templates/members/skills-member.html',
        scope: {
            member: '='
        },
        controller: function($scope) {
            $scope.member.skills = $scope.member.skills || [];
            $scope.addSkill = function() {
                $scope.member.skills.push({
                    name: '',
                    level: 'beginner'
                });
            };
            $scope.removeSkill = function(index) {
                $scope.member.skills.splice(index, 1);
            };
        }
    };
}
