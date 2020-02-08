declare module '*/useImageUploader.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetSignedUrls: DocumentNode;
  export const SignedImageObject_S3SignedObject: DocumentNode;

  export default defaultDocument;
}

declare module '*/Login.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Login: DocumentNode;

  export default defaultDocument;
}

declare module '*/Logout.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Logout: DocumentNode;

  export default defaultDocument;
}

declare module '*/Signup.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Signup: DocumentNode;

  export default defaultDocument;
}
