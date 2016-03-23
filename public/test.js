(function(){
    angular.module('test', [])
        .controller('ctrl', function($scope){
        
        })
        .directive('myDir', function(){
            return {
                template: '<input ng-model="info">',
                scope: {
                    info: '<'
                },
                controller: function() {
                    console.log('my ctrl controller', this);
                }
            }
        });


})();
