var nav = {
  bindings: {},
  templateUrl: 'src/components/nav/nav-test.html',
  controller: navCtrl
};

function navCtrl() {
  var $ctrl = this;

  $ctrl.navTitle = "";
}

angular
    .module('toDoApp')
    .component('nav', nav);
