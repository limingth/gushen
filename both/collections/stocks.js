Stocks = new Mongo.Collection('stocks');

RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

Stocks.search = function(query) {
  if (!query) {
    return;
  }
  return Stocks.find({
    code: { $regex: RegExp.escape(query), $options: 'i' }
  }, {
    limit: 20
  });
};
