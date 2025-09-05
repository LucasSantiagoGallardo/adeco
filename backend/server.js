const express = require('express');
const app = express();
app.use(express.json());

let employees = [];
let hours = [];

app.use(express.static('frontend'));

app.get('/api/employees', (req, res) => res.json(employees));
app.post('/api/employees', (req, res) => {
  const employee = { id: employees.length + 1, ...req.body };
  employees.push(employee);
  res.status(201).json(employee);
});

app.get('/api/hours', (req, res) => res.json(hours));
app.post('/api/hours', (req, res) => {
  const entry = { id: hours.length + 1, ...req.body };
  hours.push(entry);
  res.status(201).json(entry);
});

function resetData() {
  employees = [];
  hours = [];
}

module.exports = { app, resetData };

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
