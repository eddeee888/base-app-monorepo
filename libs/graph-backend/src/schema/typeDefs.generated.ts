import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PayloadError', loc: { start: 17, end: 29 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 34, end: 39 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 41, end: 50 } },
              loc: { start: 41, end: 50 },
            },
            loc: { start: 41, end: 51 },
          },
          directives: [],
          loc: { start: 34, end: 51 },
        },
      ],
      loc: { start: 12, end: 53 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 60, end: 69 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'NOT_FOUND', loc: { start: 74, end: 83 } },
          directives: [],
          loc: { start: 74, end: 83 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'INPUT_VALIDATION_ERROR', loc: { start: 86, end: 108 } },
          directives: [],
          loc: { start: 86, end: 108 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'FORBIDDEN_ERROR', loc: { start: 111, end: 126 } },
          directives: [],
          loc: { start: 111, end: 126 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'UNEXPECTED_ERROR', loc: { start: 129, end: 145 } },
          directives: [],
          loc: { start: 129, end: 145 },
        },
      ],
      loc: { start: 55, end: 147 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 160, end: 165 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 170, end: 172 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserPayload', loc: { start: 174, end: 185 } },
              loc: { start: 174, end: 185 },
            },
            loc: { start: 174, end: 186 },
          },
          directives: [],
          loc: { start: 170, end: 186 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users', loc: { start: 189, end: 194 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UsersPayload', loc: { start: 196, end: 208 } },
              loc: { start: 196, end: 208 },
            },
            loc: { start: 196, end: 209 },
          },
          directives: [],
          loc: { start: 189, end: 209 },
        },
      ],
      loc: { start: 148, end: 211 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 218, end: 222 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 227, end: 229 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 231, end: 233 } },
              loc: { start: 231, end: 233 },
            },
            loc: { start: 231, end: 234 },
          },
          directives: [],
          loc: { start: 227, end: 234 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 237, end: 242 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 244, end: 250 } },
              loc: { start: 244, end: 250 },
            },
            loc: { start: 244, end: 251 },
          },
          directives: [],
          loc: { start: 237, end: 251 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 254, end: 258 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 260, end: 266 } },
            loc: { start: 260, end: 266 },
          },
          directives: [],
          loc: { start: 254, end: 266 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'displayName', loc: { start: 269, end: 280 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 282, end: 288 } },
              loc: { start: 282, end: 288 },
            },
            loc: { start: 282, end: 289 },
          },
          directives: [],
          loc: { start: 269, end: 289 },
        },
      ],
      loc: { start: 213, end: 291 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UserResult', loc: { start: 298, end: 308 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result', loc: { start: 313, end: 319 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'User', loc: { start: 321, end: 325 } },
            loc: { start: 321, end: 325 },
          },
          directives: [],
          loc: { start: 313, end: 325 },
        },
      ],
      loc: { start: 293, end: 327 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UserPayload', loc: { start: 335, end: 346 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UserResult', loc: { start: 349, end: 359 } },
          loc: { start: 349, end: 359 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'PayloadError', loc: { start: 362, end: 374 } },
          loc: { start: 362, end: 374 },
        },
      ],
      loc: { start: 329, end: 374 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UsersResult', loc: { start: 381, end: 392 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result', loc: { start: 397, end: 403 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 406, end: 410 } },
                  loc: { start: 406, end: 410 },
                },
                loc: { start: 406, end: 411 },
              },
              loc: { start: 405, end: 412 },
            },
            loc: { start: 405, end: 413 },
          },
          directives: [],
          loc: { start: 397, end: 413 },
        },
      ],
      loc: { start: 376, end: 415 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UsersPayload', loc: { start: 423, end: 435 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UsersResult', loc: { start: 438, end: 449 } },
          loc: { start: 438, end: 449 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'PayloadError', loc: { start: 452, end: 464 } },
          loc: { start: 452, end: 464 },
        },
      ],
      loc: { start: 417, end: 464 },
    },
  ],
  loc: { start: 0, end: 465 },
} as unknown as DocumentNode;
