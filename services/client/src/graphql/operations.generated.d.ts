declare module "*/ViewerProvider.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Viewer: DocumentNode;
  export const ViewerUser: DocumentNode;

  export default defaultDocument;
}
