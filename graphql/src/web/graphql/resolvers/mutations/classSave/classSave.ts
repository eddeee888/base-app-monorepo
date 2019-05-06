import { hostAClassValidation } from '@bit/eddeee888.learnd-utils.forms.validations';
import { ResolverContext } from 'src/types';
import {
  throwAuthenticationError,
  throwDatabaseError,
  throwFormValidationError
} from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { ClassSavePayload, User } from 'src/web/graphql/models';

const classSave: MutationResolvers.ClassSaveResolver = async (
  parent,
  args,
  ctx
) => {
  if (ctx.viewer === null) {
    return throwAuthenticationError();
  }

  const isValidated = await validateInput(args.input);
  if (!isValidated) {
    return throwFormValidationError();
  }

  const { result, error } = await createClass(ctx.viewer.id, args, ctx);
  if (error || !result) {
    return throwDatabaseError();
  }

  return result;
};

const validateInput = async (input: MutationResolvers.ClassSaveInput) => {
  try {
    await hostAClassValidation.details.validate({
      name: input.name,
      category: input.category,
      description: input.description,
      price: input.price
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

    return true;
  } catch (err) {
    return false;
  }
};

const createClass = async (
  viewerId: User['id'],
  { input }: MutationResolvers.ArgsClassSave,
  { prisma }: ResolverContext
): Promise<{ result?: ClassSavePayload; error?: Error }> => {
  try {
    const newClass = await prisma.createClass({
      creator: { connect: { id: viewerId } },
      name: input.name,
      description: input.description,
      categories: {
        connect: { id: input.category }
      },
      price: input.price,
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

    return {
      result: {
        class: {
          ...newClass
        }
      }
    };
  } catch (error) {
    return { error };
  }
};

export default classSave;
