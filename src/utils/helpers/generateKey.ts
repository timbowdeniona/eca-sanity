import { v4 } from "uuid";

const generateKey = () => String(v4().split("-").pop());

export default generateKey;
