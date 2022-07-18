exports.list = function (req, res) {
  res.send('<h3>Author storage: List<h3>');
};

exports.detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

exports.createGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

exports.createPost = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};

exports.deleteGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

exports.deletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

exports.updateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

exports.updatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};
