"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const array = [{ name: 'david', id: '1' }, { name: 'david', id: '2' }, { name: 'isabel', id: '3' }];
app.get('/', (req, res) => res.status(200).json(array));
app.post('/add', (req, res) => {
    const { name, id } = req.body;
    array.push({ name, id });
    res.status(200).json({ message: 'success' });
});
app.delete('/del/:id', (req, res) => {
    const { id } = req.params;
    array.splice(array.findIndex(item => item.id === id), 1);
    res.status(200).json(array);
});
app.get('/jaja/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json(array.find(item => item.id === id));
});
app.listen(process.env.PORT || 3000, () => console.log('app listening port 3000'));
