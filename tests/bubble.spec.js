const  {bubbleSort} = require('../bubble')

test('it should sort an array', () =>{
    const res = bubbleSort([4,1]);
    expect(res).toEqual([1,4]);
});
test("it shouldn't sort a sorted array", () =>{
    const res = bubbleSort([1,2,3,4]);
    expect(res).toEqual([1,2,3,4]);
});

test('it should sort a big array', () =>{
    const res = bubbleSort([4,1,65,2,7,9]);
    expect(res).toEqual([1,2,4,7,9,65]);
});