;(function (root, factory) {
  root.viewportScale = factory();
})(window, function () {
  var defaultParams = {
    width: 640
  };
  var iosExp = /iphone|ipad|ipod/i;
  var androidExp = /android/i;
  var device = navigator.userAgent;

  function isIOS () {
    return iosExp.test(device);
  }

  function isAndroid () {
    return androidExp.test(device);
  }

  function createMetaElement (width, ) {

  }

  function viewportScale (params) {
    params = Object.assign({}, defaultParams, params);

    if (isIOS) {

    }
  }
});
