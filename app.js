"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var cors_1 = require("cors");
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
var array = [{ name: 'david', id: '1' }, { name: 'david', id: '2' }, { name: 'isabel', id: '3' }];
app.get('/', function (req, res, next) {
    return res.status(200).json(array);
});
app.post('/add', function (req, res, next) {
    var _a = req.body, name = _a.name, id = _a.id;
    array.push({ name: name, id: id });
    res.status(200).json({ message: 'success' });
});
app["delete"]('/del/:id', function (req, res, next) {
    var id = req.params.id;
    array.splice(array.findIndex(function (item) { return item.id === id; }), 1);
    res.status(200).json(array);
});
app.get('/jaja/:id', function (req, res, next) {
    var id = req.params.id;
    res.status(200).json(array.find(function (item) { return item.id === id; }));
});
app.listen(process.env.PORT || 3000, function () { return console.log('app listening port 3000'); });
