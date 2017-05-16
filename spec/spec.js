//My Testing code goes here
 var c = require("../src/code.js");

describe("Edge Cases For prime Number Function", function(){ 
   
   it("should return an empty array for 1",function(){ 
      expect(c.getPrimes(1)).toEqual([]); 
   });

   it("should return an empty array for 0",function(){ 
      expect(dApp.getPrimes(0)).toEqual([]); 
   });

   it("should return 'Invalid Input' for a string",function(){ 
      expect(getPrimes('b')).toEqual('Invalid Input'); 
   });

   it("should return 'Invalid Input' for a blank input",function(){ 
      expect(getPrimes()).toEqual('Invalid Input'); 
   });

   it("should return 'Negative Numbers Not Allowed' for a negative integer",function(){ 
      expect(getPrimes(-20)).toEqual('Negative Numbers Not Allowed'); 
   });

   it("should return [2] for 2",function(){ 
      expect(getPrimes(2)).toEqual([2]); 
   }); 

   it("should return [2, 3] for 3",function(){ 
      expect(getPrimes(3)).toEqual([2,3]); 
   });

   it("should return [2, 3] for 4",function(){ 
      expect(getPrimes(4)).toEqual([2,3]); 
   }); 

   it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for 20",function(){ 
      expect(getPrimes(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]); 
   }); 

   it("should return [ 2, 3, 5, 7, 11] for 11",function(){ 
      expect(getPrimes(11)).toEqual([ 2, 3, 5, 7, 11]); 
   }); 

});