var defaultOption = {
  rate: 100,
  fixed: 4,
  originUnit: 'px',
  targetUnit: 'rem'
};

module.exports = function (data) {
  var customOption = {};
  try {
    customOption = require(__dirname + '/../../px-transform.json');
  } catch (e) {}
  var option = Object.assign(defaultOption, customOption);
  var originUnitReg = new RegExp('( \|:)\\d+(\\.\\d+)?' + option.originUnit, 'g');
  this.cacheable();
  var callback = this.async();
  var newData = data.replace(originUnitReg, function (matched) {
    return matched.replace(/\d+/, parseFloat((matched.match(/\d+/)[0] / option.rate).toFixed(option.fixed))).replace(option.originUnit, option.targetUnit);
  });
  callback(null, newData);
};
