
function Button(text) {
  this.text = text || 'Hello';
}

Button.prototype = {
  create: function () {
    var _this = this;
    this.$element = $('<button>');
    this.$element.text(this.text);
    this.$element.click(function () {
      alert(_this.text);
    });

    this.$element.appendTo($('body'));
  },
};
var btn1 = new Button('Hello!');
btn1.create();
