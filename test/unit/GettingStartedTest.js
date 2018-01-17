function add(a,b){
	return a + b;
}

describe("Add two number a + b:", function() {

  it("0 + 0 Should be equal to 0", function() {
    var a = 0;
    var b = 0;

    var res = add(a,b);
    expect(res).toEqual(0);
  });

  it("2 + 2 Should be equal to 4",function(){
  		var a = 2;
  		var b = 2;
  		res = add(a,b);
  	expect(res).toEqual(4)
  });
 });