export const developerSchema = {
  "$id": "developer",
  "type": "object",
  "required": ["id", "nombre", "rol"],
  "properties": {
    "id": {
      "$id": "#/properties/id",
      "type": "integer",
    },
    "nombre": {
      "$id": "#/properties/nombre",
      "type": "string",
    },
    "rol": {
      "$id": "#/properties/rol",
      "type": "string",
    }
  },
  "additionalProperties": true
}
