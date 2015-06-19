Template.trending.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('stocks');
  }.bind(this));
};

Template.trending.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.trending.helpers({
  stocks: function () {
    return Stocks.find({}, {sort: {value: -1, name: -1}});
  }
});
