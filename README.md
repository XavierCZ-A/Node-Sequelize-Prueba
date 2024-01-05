# Documentación API

### Endpoint: 
GET /investments/:id

### Descripción: 
Obtiene las inversiones realizadas por un usuario.

### Parámetros: id (parámetro de ruta): ID del usuario.
Encabezados:

### Respuesta:
```
[
  {
    "id": 1,
    "user_id": 1,
    "opportunity_id": 3,
    "amount_invested": 1000.00,
    "status": "active",
    "user": {
      "id": 1,
      "full_name": "Nombre Completo",
      "email": "correo@ejemplo.com"
    },
    "opportunity": {
      "id": 3,
      "name": "Nombre de la Oportunidad",
      "yield_rate": 0.12
    }
  },
]
```

### Respuesta de Error:
```
{
  "message": "Internal server error"
}
```


### Endpoint: 
POST /investments

### Descripción:
Crea una nueva inversión.

### Parámetros:

amount_invested (número): Monto a invertir.
user_id (número): ID del usuario.
opportunity_id (número): ID de la oportunidad.

### Respuesta: 
```
{
  "id": 1,
  "user_id": 1,
  "opportunity_id": 3,
  "amount_invested": 1000.00,
  "status": "active"
}
```

### Respuesta de Error:
```
{
  "message": "Internal Server Error"
}
```

### Endpoint: 
PUT /investments/:id

### Descripción: 
Retirar una inversión.

### Parámetros:
id: ID de la inversión.

### Respuesta:
```
{
  "message": "Investment updated"
}
```
### Respuesta de Error:
```
{
  "message": "Internal Server Error"
}
```