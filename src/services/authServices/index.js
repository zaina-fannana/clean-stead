import axios from "axios";

export const registerService = async (registerData) => {
    return await axios.post("/register", registerData)
}
