export const empleadosSchema = {
  "$id": "employees",
  "type": "object",
  "required": ["empleados"],
  "properties": {
    "empleados": {
      "$id": "#/properties/empleados",
      "type": "array",
      "additionalItems": true,
      "items": {
        "$id": "#/properties/empleados/items",
        "allOf": [
          {
            "if": {
              "properties": { "tipo": { "const": "developer" } },
            },
            "then": {
              "$ref": "developer"
            }
          },
          {
            "if": {
              "properties": { "tipo": { "const": "devops" } },
            },
            "then": {
              "$ref": "devops"
            }
          },
          {
            "required": ["id", "nombre", "tipo"],
            "properties": {
              "id": {
                "$id": "#/properties/id",
                "type": "integer",
              },
              "tipo": {
                "$id": "#/properties/tipo",
                "type": "string",
                "enum": ["developer", "devops"],
              },
              "nombre": {
                "$id": "#/properties/nombre",
                "type": "string",
              },
            },
          }
        ]
      }
    }
  },
  "additionalProperties": false,
}

export const developer = {
  "$id": "developer",
  "type": "object",
  "required": ["framework"],
  "properties": {
    "framework": {
      "$id": "#/properties/framework",
      "type": "string",
    },
    "id": {
      "$id": "#/properties/id",
      "type": "integer",
    },
    "tipo": {
      "$id": "#/properties/tipo",
      "type": "string",
      "enum": ["developer", "devops"],
    },
    "nombre": {
      "$id": "#/properties/nombre",
      "type": "string",
    },
  },
  "additionalProperties": false,
}

export const devops = {
  "$id": "devops",
  "type": "object",
  "required": ["equipo"],
  "properties": {
    "equipo": {
      "$id": "#/properties/equipo",
      "type": "string",
    },
    "id": {
      "$id": "#/properties/id",
      "type": "integer",
    },
    "tipo": {
      "$id": "#/properties/tipo",
      "type": "string",
      "enum": ["developer", "devops"]
    },
    "nombre": {
      "$id": "#/properties/nombre",
      "type": "string",
    },
  },
  "additionalProperties": false
}
