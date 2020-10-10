const isSsr = (): boolean => typeof window === "undefined";

export default isSsr;
