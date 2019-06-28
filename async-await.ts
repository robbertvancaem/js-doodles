var now = Date.now();
var logit = v => console.log(`${v} \n Elapsed: ${Date.now() - now}ms`);

logit("Sync 1");

var blocking = () => {
  return Promise.resolve().then(() => {
    let i = 0;

    while (i < 1000000000) {
      i++;
    }
    return "Promise done";
  });
};

blocking().then(logit);

logit("Sync 2");
