function outerFunction() {
  let message = "Hello from closure!";
  return function () {
    console.log(message);
  };
}const closureFunc = outerFunction();
closureFunc();
