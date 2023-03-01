import axios from "axios";

export default async function createCheckoutSession(data) {
    const result = await axios.post("http://monopoly.docker/api/yuno/checkout-session", data)
    return result.data;
}