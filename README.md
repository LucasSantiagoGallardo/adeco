# Gestión de Personal

Esta aplicación de ejemplo permite gestionar empleados y registrar horas de trabajo.
Consiste en un servidor **Express** que expone una API REST y una interfaz HTML/JS
para interactuar con ella.

## Ejecutar

```bash
npm install
npm start
```

La aplicación quedará disponible en `http://localhost:3000`.

## Endpoints principales

- `GET /api/employees`: lista de empleados.
- `POST /api/employees`: agrega un empleado. `{"name":"Ana","role":"Dev"}`
- `GET /api/hours`: lista de horas registradas.
- `POST /api/hours`: registra horas. `{"employeeId":1,"date":"2024-01-01","hours":8}`

## Pruebas

```bash
npm test
```

Las pruebas cubren el flujo básico de alta y consulta de empleados y horas.
