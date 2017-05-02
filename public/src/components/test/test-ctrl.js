var test = {
    bindings: {},
    templateUrl: 'src/components/test/test.html',
    controller: testCtrl,
};

function testCtrl() {
    var $ctrl = this;
    console.log("test controller loaded");

    $ctrl.testTitle = "Hello friend";
}

angular
    .module('toDoApp')
    .component('test', test);