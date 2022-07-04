import dayjs from "dayjs";

enum Test {
  A,
  B,
}

const test = {
  a: Test.B,
  day: dayjs(),
};

export default test;
