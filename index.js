var request = require('request');
var r = request.get('https://www.linkedin.com/profile/view?id=ADEAAArZcboBWjeUGaic3ymTXivA6li4XJvYiw8', function (err, res, body) {
  console.log(r.uri.href);
  console.log(res.request.uri.href);

  // Mikael doesn't mention getting the uri using 'this' so maybe it's best to avoid it
  // please add a comment if you know why this might be bad
  console.log(this.uri.href);
});
