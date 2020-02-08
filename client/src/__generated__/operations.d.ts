declare module '*/useImageUploader.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetSignedUrls: DocumentNode;
  export const SignedImageObject_S3SignedObject: DocumentNode;

  export default defaultDocument;
}

declare module '*/LoginToStripeButton.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetViewerStripeLoginUrl: DocumentNode;

  export default defaultDocument;
}

declare module '*/CancelButton.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ViewClassCancelClass: DocumentNode;
  export const MeCancelCreatedClass: DocumentNode;

  export default defaultDocument;
}

declare module '*/UncancelButton.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ViewClassUncancelClass: DocumentNode;
  export const MeUncancelCreatedClass: DocumentNode;

  export default defaultDocument;
}

declare module '*/Classes.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ViewClassClassDetails: DocumentNode;
  export const ViewClass: DocumentNode;

  export default defaultDocument;
}

declare module '*/ClassesBuyTickets.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ClassesBuyTicketsPermissions: DocumentNode;
  export const ClassesBuyTicketsDetails_Class_ClassTicketPlan: DocumentNode;
  export const ClassesBuyTicketsDetails_Class: DocumentNode;

  export default defaultDocument;
}

declare module '*/ClassesBuyTicketsMain.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PayToBuyTickets: DocumentNode;

  export default defaultDocument;
}

declare module '*/ClassSessionInstance.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const JoinClassSessionInstance: DocumentNode;
  export const ClassSessionSchedule_ClassSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/ClassesSessionSchedule.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ClassSessionSchedule: DocumentNode;

  export default defaultDocument;
}

declare module '*/ExistingHostClassForm.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ExistingClass: DocumentNode;

  export default defaultDocument;
}

declare module '*/ClassSummary.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const HostClassSave: DocumentNode;

  export default defaultDocument;
}

declare module '*/HostClassForm.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const HostClassClassCategories: DocumentNode;

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

declare module '*/LearningPastSessionInstanceFragment.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const LearningPastSessionInstances_ClassSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/LearningPastSessionInstances.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetLearningPastSessionInstances: DocumentNode;

  export default defaultDocument;
}

declare module '*/ReviewForm.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const RateClassSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/LearningUpcomingSessionInstances.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetUpcomingClasses: DocumentNode;

  export default defaultDocument;
}

declare module '*/Payments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetUserPaymentsDetails: DocumentNode;

  export default defaultDocument;
}

declare module '*/TeachingClasses.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const MeCreatedClass: DocumentNode;
  export const MeCreatedClasses: DocumentNode;

  export default defaultDocument;
}

declare module '*/Actions.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FinishPastSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/PastSessionInstanceFragment.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const TeachingPastSessionInstances_ClassSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/TeachingPastSessionInstances.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetTeachingPastSessionInstances: DocumentNode;

  export default defaultDocument;
}

declare module '*/TeachingUpcomingSessionInstances.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetTeachingUpcomingSessions: DocumentNode;
  export const GetTeachingUpcomingSessions_SessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/UploadAvatar.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UpdateMyAvatar: DocumentNode;

  export default defaultDocument;
}

declare module '*/ClassSessionInstanceFragment.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ClassSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/FinishClassSessionInstanceButton.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FinishClassSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/SessionInstances.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetSessionInstance: DocumentNode;

  export default defaultDocument;
}

declare module '*/Signup.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Signup: DocumentNode;

  export default defaultDocument;
}

declare module '*/UsersCancelCreatedClass.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UsersCancelCreatedClass: DocumentNode;

  export default defaultDocument;
}

declare module '*/UsersUncancelCreatedClass.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UsersUncancelCreatedClass: DocumentNode;

  export default defaultDocument;
}

declare module '*/UsersClassRow.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UsersClassRow: DocumentNode;

  export default defaultDocument;
}

declare module '*/UsersGetUserAndRelatedClasses.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UsersGetUserAndRelatedClasses: DocumentNode;

  export default defaultDocument;
}
