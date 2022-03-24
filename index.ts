import Clockify from "./src/clockify";

const test = () => {
    const clock = new Clockify({})
    const res = clock.client.getAll('test');
}
