import uuid from "uuid";

export type RandomPassword = () => string;

const random: RandomPassword = () => uuid();

export default random;
