import dayjs from "dayjs";
declare enum Test {
    A = 0,
    B = 1
}
declare const test: {
    a: Test;
    day: dayjs.Dayjs;
};
export default test;
