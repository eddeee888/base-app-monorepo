export type ServerApolloErrorCode = "UNAUTHENTICATED" | "FORBIDDEN" | "BAD_USER_INPUT" | "INTERNAL_SERVER_ERROR";

export type ClientApolloErrorCode = ServerApolloErrorCode | "NETWORK_ERROR" | "UNKNOWN";

export interface ClientApolloError {
  code: ClientApolloErrorCode;
  message?: string;
  metadata?: Record<string, any>;
}
