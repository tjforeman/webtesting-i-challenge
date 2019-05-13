const enhancer = require('./enhancer.js');
// test away!

describe('success method',()=>{
    it('should increase enhancement by 1',()=>{
        const item={
            enhancement:13
        }
        expect(enhancer.succeed(item).enhancement).toBe(14)
    })
    it('should keep enhancement the same',()=>{
        const item={
            enhancement:20
        }
        expect(enhancer.succeed(item).enhancement).toBe(20)
    })
})