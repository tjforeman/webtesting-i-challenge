const enhancer = require('./enhancer.js');
// test away!

describe('success method',()=>{
    it('should increase enhancement by 1',()=>{

        expect(enhancer.succeed({enhancement:13}).enhancement).toBe(14)
        expect(enhancer.succeed({enhancement:12}).enhancement).toBe(13)
        expect(enhancer.succeed({enhancement:11}).enhancement).toBe(12)
    })
    it('should keep enhancement the same',()=>{
       
        expect(enhancer.succeed({enhancement:20}).enhancement).toBe(20)
    })
})