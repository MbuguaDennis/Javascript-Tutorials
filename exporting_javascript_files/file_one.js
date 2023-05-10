const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }

export default  class User{
    constructor(name){
        this.name =name;
    }

    // getters

}


   export const myVariable = (arr) => {
    let product =1;
    for(let i=0; i<=arr.length;i++){
        // product.push(arr[i]);
        product *=arr[i];
        
    }
    return product;
   }

  const addition = (x,y) => x+y;
//   This course exports  functions to  be used in another file.
  export { uppercaseString,lowercaseString, addition};






  