export interface ConvertDisplaynameParams {
  firstName: string;
  lastName: string;
}

const convertDisplayName = ({ firstName, lastName }: ConvertDisplaynameParams): string => {
  return `${firstName} ${lastName.charAt(0)}.`;
};

export default convertDisplayName;
