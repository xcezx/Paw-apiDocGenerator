if (typeof registerCodeGenerator === 'undefined') {
  module.exports = {
    registerCodeGenerator: (_class) => {
      return _class;
    }
  };
}
else {
  module.exports = {
    registerCodeGenerator: registerCodeGenerator,
    InputField: InputField
  };
}
