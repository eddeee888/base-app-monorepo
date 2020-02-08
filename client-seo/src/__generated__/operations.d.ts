declare module '*/index.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Viewer: DocumentNode;

  export default defaultDocument;
}
