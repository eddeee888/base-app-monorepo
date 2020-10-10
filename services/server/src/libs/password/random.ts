import { v4 as uuidv4 } from "uuid";

export type RandomPassword = () => string;

const random: RandomPassword = () => uuidv4();

export default random;
