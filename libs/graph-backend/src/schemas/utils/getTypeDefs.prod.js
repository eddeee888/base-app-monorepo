export const getTypeDefs = () => ({
  kind: 'Document',
  definitions: [
    {
      name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } },
      kind: 'ObjectTypeDefinition',
      loc: { start: 0, end: 63 },
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 22, end: 24 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserPayload', loc: { start: 26, end: 37 } },
              loc: { start: 26, end: 37 },
            },
            loc: { start: 26, end: 38 },
          },
          directives: [],
          loc: { start: 22, end: 38 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users', loc: { start: 41, end: 46 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UsersPayload', loc: { start: 48, end: 60 } },
              loc: { start: 48, end: 60 },
            },
            loc: { start: 48, end: 61 },
          },
          directives: [],
          loc: { start: 41, end: 61 },
        },
      ],
      directives: [],
      interfaces: [],
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Result', loc: { start: 22, end: 28 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 33, end: 35 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 37, end: 44 } },
              loc: { start: 37, end: 44 },
            },
            loc: { start: 37, end: 45 },
          },
          directives: [],
          loc: { start: 33, end: 45 },
        },
      ],
      loc: { start: 12, end: 47 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 59, end: 64 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 69, end: 71 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 73, end: 80 } },
              loc: { start: 73, end: 80 },
            },
            loc: { start: 73, end: 81 },
          },
          directives: [],
          loc: { start: 69, end: 81 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 148, end: 153 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 155, end: 164 } },
              loc: { start: 155, end: 164 },
            },
            loc: { start: 155, end: 165 },
          },
          directives: [],
          loc: { start: 148, end: 165 },
        },
      ],
      loc: { start: 49, end: 167 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 174, end: 183 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'NOT_FOUND', loc: { start: 188, end: 197 } },
          directives: [],
          loc: { start: 188, end: 197 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'INPUT_VALIDATION_ERROR', loc: { start: 200, end: 222 } },
          directives: [],
          loc: { start: 200, end: 222 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'FORBIDDEN_ERROR', loc: { start: 225, end: 240 } },
          directives: [],
          loc: { start: 225, end: 240 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'UNEXPECTED_ERROR', loc: { start: 243, end: 259 } },
          directives: [],
          loc: { start: 243, end: 259 },
        },
      ],
      loc: { start: 169, end: 261 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 70, end: 74 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 79, end: 81 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 83, end: 85 } },
              loc: { start: 83, end: 85 },
            },
            loc: { start: 83, end: 86 },
          },
          directives: [],
          loc: { start: 79, end: 86 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 89, end: 94 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 96, end: 102 } },
              loc: { start: 96, end: 102 },
            },
            loc: { start: 96, end: 103 },
          },
          directives: [],
          loc: { start: 89, end: 103 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 106, end: 110 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 112, end: 118 } },
            loc: { start: 112, end: 118 },
          },
          directives: [],
          loc: { start: 106, end: 118 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'displayName', loc: { start: 121, end: 132 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 134, end: 140 } },
              loc: { start: 134, end: 140 },
            },
            loc: { start: 134, end: 141 },
          },
          directives: [],
          loc: { start: 121, end: 141 },
        },
      ],
      loc: { start: 65, end: 143 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UserResult', loc: { start: 150, end: 160 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Result', loc: { start: 172, end: 178 } },
          loc: { start: 172, end: 178 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 183, end: 185 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 187, end: 194 } },
              loc: { start: 187, end: 194 },
            },
            loc: { start: 187, end: 195 },
          },
          directives: [],
          loc: { start: 183, end: 195 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result', loc: { start: 198, end: 204 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'User', loc: { start: 206, end: 210 } },
            loc: { start: 206, end: 210 },
          },
          directives: [],
          loc: { start: 198, end: 210 },
        },
      ],
      loc: { start: 145, end: 212 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UserError', loc: { start: 219, end: 228 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 240, end: 245 } },
          loc: { start: 240, end: 245 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 250, end: 252 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 254, end: 261 } },
              loc: { start: 254, end: 261 },
            },
            loc: { start: 254, end: 262 },
          },
          directives: [],
          loc: { start: 250, end: 262 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 265, end: 270 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 272, end: 281 } },
              loc: { start: 272, end: 281 },
            },
            loc: { start: 272, end: 282 },
          },
          directives: [],
          loc: { start: 265, end: 282 },
        },
      ],
      loc: { start: 214, end: 284 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UserPayload', loc: { start: 292, end: 303 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UserResult', loc: { start: 306, end: 316 } },
          loc: { start: 306, end: 316 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UserError', loc: { start: 319, end: 328 } },
          loc: { start: 319, end: 328 },
        },
      ],
      loc: { start: 286, end: 328 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UsersResult', loc: { start: 335, end: 346 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Result', loc: { start: 358, end: 364 } },
          loc: { start: 358, end: 364 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 369, end: 371 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 373, end: 380 } },
              loc: { start: 373, end: 380 },
            },
            loc: { start: 373, end: 381 },
          },
          directives: [],
          loc: { start: 369, end: 381 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result', loc: { start: 384, end: 390 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 393, end: 397 } },
                  loc: { start: 393, end: 397 },
                },
                loc: { start: 393, end: 398 },
              },
              loc: { start: 392, end: 399 },
            },
            loc: { start: 392, end: 400 },
          },
          directives: [],
          loc: { start: 384, end: 400 },
        },
      ],
      loc: { start: 330, end: 402 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UsersError', loc: { start: 409, end: 419 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 431, end: 436 } },
          loc: { start: 431, end: 436 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 441, end: 443 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 445, end: 452 } },
              loc: { start: 445, end: 452 },
            },
            loc: { start: 445, end: 453 },
          },
          directives: [],
          loc: { start: 441, end: 453 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 456, end: 461 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 463, end: 472 } },
              loc: { start: 463, end: 472 },
            },
            loc: { start: 463, end: 473 },
          },
          directives: [],
          loc: { start: 456, end: 473 },
        },
      ],
      loc: { start: 404, end: 475 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UsersPayload', loc: { start: 483, end: 495 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UsersResult', loc: { start: 498, end: 509 } },
          loc: { start: 498, end: 509 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UsersError', loc: { start: 512, end: 522 } },
          loc: { start: 512, end: 522 },
        },
      ],
      loc: { start: 477, end: 522 },
    },
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } } },
          operation: 'query',
        },
      ],
    },
  ],
});
