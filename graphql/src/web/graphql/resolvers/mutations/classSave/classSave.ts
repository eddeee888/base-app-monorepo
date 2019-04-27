import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { ClassSavePayload } from 'src/web/graphql/types';

const classSave: MutationResolvers.ClassSaveResolver = async (
  parent,
  args,
  ctx
) => {
  throw new Error('implement me');

  const result: ClassSavePayload = {
    class: {
      id: '',
      name: '',
      category: '',
      description: '',
      streetAddress: '',
      city: '',
      postcode: '',
      country: '',
      contactNumber: '',
      state: '',
      streetUnit: '',
      sessions: []
    }
  };
  return result;
};

export default classSave;
