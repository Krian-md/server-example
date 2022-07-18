exports.index = function (request, response) {
  response.send('<h3>Hello world Master!!! <div>You are main page</div></h3>');
};

exports.about = function (request, response) {
  response.send('<h4>About us</h4>');
};
