declare module "*/ViewerProvider.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Viewer: DocumentNode;
  export const Viewer_user: DocumentNode;

  export default defaultDocument;
}

declare module "*/Login.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Login: DocumentNode;

  export default defaultDocument;
}

declare module "*/Logout.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Logout: DocumentNode;

  export default defaultDocument;
}

declare module "*/Signup.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Signup: DocumentNode;

  export default defaultDocument;
}
