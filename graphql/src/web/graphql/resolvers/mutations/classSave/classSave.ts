// import { hostAClassValidation } from '@bit/eddeee888.learnd-utils.forms.validations';
// import { throwFormValidationError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { ClassSavePayload } from 'src/web/graphql/types';

const classSave: MutationResolvers.ClassSaveResolver = async (
  parent,
  { input },
  { prisma, viewer }
) => {
  // try {
  //   await hostAClassValidation.details.validate({
  //     name: input.name,
  //     category: input.category,
  //     description: input.description
  //   });

  //   await hostAClassValidation.contact.validate({
  //     streetUnit: input.streetUnit,
  //     streetAddress: input.streetAddress,
  //     city: input.city,
  //     postcode: input.postcode,
  //     state: input.state,
  //     country: input.country,
  //     contactNumber: input.contactNumber
  //   });

  //   await hostAClassValidation.contact.validate({
  //     sessions: [...input.sessions]
  //   });
  // } catch (err) {
  //   throwFormValidationError();
  // }

  throw new Error('OMG');

  // const newClass = await prisma.createClass({
  //   creator: null,
  //   name: input.name,
  //   description: input.description,
  //   categories: {
  //     create: [{ name: input.category }]
  //   },
  //   streetUnit: input.streetUnit,
  //   streetAddress: input.streetAddress,
  //   city: input.city,
  //   postcode: input.postcode,
  //   state: input.state,
  //   country: input.country,
  //   contactNumber: input.contactNumber,
  //   sessions: {
  //     create: [...input.sessions]
  //   }
  // });

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
