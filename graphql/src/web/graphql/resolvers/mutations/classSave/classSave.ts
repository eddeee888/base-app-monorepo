import { hostAClassValidation } from '@bit/eddeee888.learnd-utils.forms.validations';
import {
  throwAuthenticationError,
  throwDatabaseError,
  throwFormValidationError
} from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { ClassSavePayload } from 'src/web/graphql/types';

const classSave: MutationResolvers.ClassSaveResolver = async (
  parent,
  { input },
  { prisma, viewer }
) => {
  if (viewer === null) {
    return throwAuthenticationError();
  }

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

    await hostAClassValidation.sessions.validate({
      sessions: [...input.sessions]
    });
  } catch (err) {
    throwFormValidationError();
  }

  const result: ClassSavePayload = {
    class: {
      id: '',
      name: '',
      category: {
        id: '',
        name: ''
      },
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

  try {
    const newClass = await prisma.createClass({
      creator: { connect: { id: viewer.id } },
      name: input.name,
      description: input.description,
      categories: {
        connect: { id: input.category }
      },
      streetUnit: input.streetUnit,
      streetAddress: input.streetAddress,
      city: input.city,
      postcode: input.postcode,
      state: input.state,
      country: input.country,
      contactNumber: input.contactNumber,
      sessions: {
        create: [...input.sessions]
      }
    });

    const categoriesPromise = prisma.class({ id: newClass.id }).categories();
    const sessionsPromise = prisma.class({ id: newClass.id }).sessions();

    result.class = {
      ...newClass,
      category: (await categoriesPromise)[0],
      sessions: await sessionsPromise
    };
  } catch (err) {
    throwDatabaseError(err);
  }

  return result;
};

export default classSave;
