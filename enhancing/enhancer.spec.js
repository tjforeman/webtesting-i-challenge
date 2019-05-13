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

describe('fail method',()=>{
    it('should decrease durability by 5',()=>{
        expect(enhancer.fail({enhancement:10,durability:10}).durability).toBe(5)
        expect(enhancer.fail({enhancement:9,durability:15}).durability).toBe(10)
        expect(enhancer.fail({enhancement:8,durability:17}).durability).toBe(12)
        expect(enhancer.fail({enhancement:7,durability:12}).durability).toBe(7)
        expect(enhancer.fail({enhancement:2,durability:6}).durability).toBe(1)

    })
    it('should decrease durability by 10',()=>{
        expect(enhancer.fail({enhancement:15,durability:15}).durability).toBe(5)
        expect(enhancer.fail({enhancement:15,durability:20}).durability).toBe(10)
        expect(enhancer.fail({enhancement:15,durability:50}).durability).toBe(40)
    })
    it('should decrease durability by 1',()=>{
        expect(enhancer.fail({enhancement:16,durability:60}).durability).toBe(59)
        expect(enhancer.fail({enhancement:17,durability:55}).durability).toBe(54)
        expect(enhancer.fail({enhancement:18,durability:21}).durability).toBe(20)
        expect(enhancer.fail({enhancement:19,durability:13}).durability).toBe(12)
        expect(enhancer.fail({enhancement:20,durability:48}).durability).toBe(47)
    })
})