var nav = {
  bindings: {},
  templateUrl: 'src/components/nav/nav.html',
  controller: navCtrl
};

function navCtrl() {
  var $ctrl = this;

  $ctrl.navTitle = "NavBar";
}

angular
    .module('toDoApp')
    .component('nav', nav);
