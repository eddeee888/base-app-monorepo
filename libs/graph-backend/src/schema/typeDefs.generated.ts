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
          name: { kind: 'Name', value: 'error', loc: { start: 84, end: 89 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 91, end: 100 } },
              loc: { start: 91, end: 100 },
            },
            loc: { start: 91, end: 101 },
          },
          directives: [],
          loc: { start: 84, end: 101 },
        },
      ],
      loc: { start: 49, end: 103 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 110, end: 119 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'NOT_FOUND', loc: { start: 124, end: 133 } },
          directives: [],
          loc: { start: 124, end: 133 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'INPUT_VALIDATION_ERROR', loc: { start: 136, end: 158 } },
          directives: [],
          loc: { start: 136, end: 158 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'FORBIDDEN_ERROR', loc: { start: 161, end: 176 } },
          directives: [],
          loc: { start: 161, end: 176 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'UNEXPECTED_ERROR', loc: { start: 179, end: 195 } },
          directives: [],
          loc: { start: 179, end: 195 },
        },
      ],
      loc: { start: 105, end: 197 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 210, end: 215 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 220, end: 222 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserPayload', loc: { start: 224, end: 235 } },
              loc: { start: 224, end: 235 },
            },
            loc: { start: 224, end: 236 },
          },
          directives: [],
          loc: { start: 220, end: 236 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users', loc: { start: 239, end: 244 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UsersPayload', loc: { start: 246, end: 258 } },
              loc: { start: 246, end: 258 },
            },
            loc: { start: 246, end: 259 },
          },
          directives: [],
          loc: { start: 239, end: 259 },
        },
      ],
      loc: { start: 198, end: 261 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 268, end: 272 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 277, end: 279 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 281, end: 283 } },
              loc: { start: 281, end: 283 },
            },
            loc: { start: 281, end: 284 },
          },
          directives: [],
          loc: { start: 277, end: 284 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 287, end: 292 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 294, end: 300 } },
              loc: { start: 294, end: 300 },
            },
            loc: { start: 294, end: 301 },
          },
          directives: [],
          loc: { start: 287, end: 301 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 304, end: 308 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 310, end: 316 } },
            loc: { start: 310, end: 316 },
          },
          directives: [],
          loc: { start: 304, end: 316 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'displayName', loc: { start: 319, end: 330 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 332, end: 338 } },
              loc: { start: 332, end: 338 },
            },
            loc: { start: 332, end: 339 },
          },
          directives: [],
          loc: { start: 319, end: 339 },
        },
      ],
      loc: { start: 263, end: 341 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UserResult', loc: { start: 348, end: 358 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Result', loc: { start: 370, end: 376 } },
          loc: { start: 370, end: 376 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 381, end: 383 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 385, end: 392 } },
              loc: { start: 385, end: 392 },
            },
            loc: { start: 385, end: 393 },
          },
          directives: [],
          loc: { start: 381, end: 393 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result', loc: { start: 396, end: 402 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'User', loc: { start: 404, end: 408 } },
            loc: { start: 404, end: 408 },
          },
          directives: [],
          loc: { start: 396, end: 408 },
        },
      ],
      loc: { start: 343, end: 410 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UserError', loc: { start: 417, end: 426 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 438, end: 443 } },
          loc: { start: 438, end: 443 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 448, end: 450 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 452, end: 459 } },
              loc: { start: 452, end: 459 },
            },
            loc: { start: 452, end: 460 },
          },
          directives: [],
          loc: { start: 448, end: 460 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 463, end: 468 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 470, end: 479 } },
              loc: { start: 470, end: 479 },
            },
            loc: { start: 470, end: 480 },
          },
          directives: [],
          loc: { start: 463, end: 480 },
        },
      ],
      loc: { start: 412, end: 482 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UserPayload', loc: { start: 490, end: 501 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UserResult', loc: { start: 504, end: 514 } },
          loc: { start: 504, end: 514 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UserError', loc: { start: 517, end: 526 } },
          loc: { start: 517, end: 526 },
        },
      ],
      loc: { start: 484, end: 526 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UsersResult', loc: { start: 533, end: 544 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Result', loc: { start: 556, end: 562 } },
          loc: { start: 556, end: 562 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 567, end: 569 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 571, end: 578 } },
              loc: { start: 571, end: 578 },
            },
            loc: { start: 571, end: 579 },
          },
          directives: [],
          loc: { start: 567, end: 579 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result', loc: { start: 582, end: 588 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 591, end: 595 } },
                  loc: { start: 591, end: 595 },
                },
                loc: { start: 591, end: 596 },
              },
              loc: { start: 590, end: 597 },
            },
            loc: { start: 590, end: 598 },
          },
          directives: [],
          loc: { start: 582, end: 598 },
        },
      ],
      loc: { start: 528, end: 600 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UsersError', loc: { start: 607, end: 617 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 629, end: 634 } },
          loc: { start: 629, end: 634 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ok', loc: { start: 639, end: 641 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 643, end: 650 } },
              loc: { start: 643, end: 650 },
            },
            loc: { start: 643, end: 651 },
          },
          directives: [],
          loc: { start: 639, end: 651 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 654, end: 659 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType', loc: { start: 661, end: 670 } },
              loc: { start: 661, end: 670 },
            },
            loc: { start: 661, end: 671 },
          },
          directives: [],
          loc: { start: 654, end: 671 },
        },
      ],
      loc: { start: 602, end: 673 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UsersPayload', loc: { start: 681, end: 693 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UsersResult', loc: { start: 696, end: 707 } },
          loc: { start: 696, end: 707 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'UsersError', loc: { start: 710, end: 720 } },
          loc: { start: 710, end: 720 },
        },
      ],
      loc: { start: 675, end: 720 },
    },
  ],
  loc: { start: 0, end: 721 },
} as unknown as DocumentNode;
