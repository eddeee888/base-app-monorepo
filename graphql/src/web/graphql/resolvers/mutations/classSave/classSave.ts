import { hostAClassValidation } from '@bit/eddeee888.learnd-utils.forms.validations';
import { throwFormValidationError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { ClassSavePayload } from 'src/web/graphql/types';

const classSave: MutationResolvers.ClassSaveResolver = async (
  parent,
  { input },
  ctx
) => {
  try {
    await hostAClassValidation.details.validate({
      name: input.name,
      category: input.category,
      description: input.description
    });

    await hostAClassValidation.contact.validate({
      streetUnit: input.streetUnit,
      streetAddress: input.streetAddress,
      city: input.city,
      postcode: input.postcode,
      state: input.state,
      country: input.country,
      contactNumber: input.contactNumber
    });

    await hostAClassValidation.contact.validate({
      sessions: [...input.sessions]
    });
  } catch (err) {
    throwFormValidationError();
  }

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
