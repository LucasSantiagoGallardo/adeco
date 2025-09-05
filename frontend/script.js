async function loadEmployees() {
  const res = await fetch('/api/employees');
  const data = await res.json();
  const list = document.getElementById('employee-list');
  list.innerHTML = data.map(emp => `<li>${emp.id}: ${emp.name} (${emp.role})</li>`).join('');
}

async function loadHours() {
  const res = await fetch('/api/hours');
  const data = await res.json();
  const list = document.getElementById('hours-list');
  list.innerHTML = data.map(entry => `<li>${entry.id}: Emp ${entry.employeeId} - ${entry.date} - ${entry.hours}h</li>`).join('');
}

document.getElementById('add-employee').addEventListener('click', async () => {
  const name = document.getElementById('employee-name').value;
  const role = document.getElementById('employee-role').value;
  await fetch('/api/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, role })
  });
  document.getElementById('employee-name').value = '';
  document.getElementById('employee-role').value = '';
  loadEmployees();
});

document.getElementById('add-hours').addEventListener('click', async () => {
  const employeeId = parseInt(document.getElementById('hours-employee-id').value, 10);
  const date = document.getElementById('hours-date').value;
  const hours = parseFloat(document.getElementById('hours-hours').value);
  await fetch('/api/hours', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ employeeId, date, hours })
  });
  document.getElementById('hours-employee-id').value = '';
  document.getElementById('hours-date').value = '';
  document.getElementById('hours-hours').value = '';
  loadHours();
});

loadEmployees();
loadHours();
