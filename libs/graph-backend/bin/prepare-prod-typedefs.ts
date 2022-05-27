import * as fs from 'fs';
import { getTypeDefs } from '../src/schemas/utils/getTypeDefs';

const destination = 'libs/graph-backend/src/schemas/utils/getTypeDefs.prod.js';

const main = (): void => {
  const typeDefs = getTypeDefs();
  const content = `export const getTypeDefs = () => (${JSON.stringify(typeDefs)})`;
  fs.writeFileSync(destination, content);
};

main();
