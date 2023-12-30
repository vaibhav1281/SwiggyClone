import { sum } from "../sum";

test("Sum of a and b is equal to", () =>{
    const result = sum(2,5);
    expect(result).toBe(7);
})