import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      name: { kind: 'Name', value: 'Query' },
      kind: 'ObjectTypeDefinition',
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'MeResult' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UsersResult' } } },
          directives: [],
        },
      ],
      directives: [],
      interfaces: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ResultError' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ResultErrorType' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ResultErrorType' },
      directives: [],
      values: [
        { kind: 'EnumValueDefinition', name: { kind: 'Name', value: 'NOT_FOUND' }, directives: [] },
        { kind: 'EnumValueDefinition', name: { kind: 'Name', value: 'INPUT_VALIDATION_ERROR' }, directives: [] },
        { kind: 'EnumValueDefinition', name: { kind: 'Name', value: 'FORBIDDEN_ERROR' }, directives: [] },
        { kind: 'EnumValueDefinition', name: { kind: 'Name', value: 'UNEXPECTED_ERROR' }, directives: [] },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'displayName' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MeResultOk' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'MeResult' },
      directives: [],
      types: [
        { kind: 'NamedType', name: { kind: 'Name', value: 'MeResultOk' } },
        { kind: 'NamedType', name: { kind: 'Name', value: 'ResultError' } },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UsersResultOk' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } } },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UsersResult' },
      directives: [],
      types: [
        { kind: 'NamedType', name: { kind: 'Name', value: 'UsersResultOk' } },
        { kind: 'NamedType', name: { kind: 'Name', value: 'ResultError' } },
      ],
    },
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Query' } },
          operation: 'query',
        },
      ],
    },
  ],
} as unknown as DocumentNode;
