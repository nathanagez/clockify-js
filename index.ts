import Clockify from "./src/clockify";

const test = () => {
    const clock = new Clockify('apiKey')
    const res = clock.client.getAll('test');
}
