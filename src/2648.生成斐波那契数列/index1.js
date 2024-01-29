export var fibGenerator = function* () {
  let [prev, curr] = [0, 1];
  yield prev;
  yield curr;

  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
};
