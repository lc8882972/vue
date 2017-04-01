function reverse(str) {
  return str.split('').reverse().join('')
}

function isInteger(num) {
  if (typeof num !== "number") return false;
  var pattern = /^[1-9]\d*$/g;
  return pattern.test(num);
}
describe("main.js", function () {

  it("reverse", function () {
    // Assert (verify the result)
    expect(reverse('abcd')).equal('dcba');
    expect(reverse('asdf')).equal('fdsa');
    console.log('reverse');
  });

  it("isInteger", function () {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  })
});
