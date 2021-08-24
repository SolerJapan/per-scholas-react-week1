type Operation = 'multiply' | 'add' | 'divide' | 'subtract' ;

enum Oper {
  multiply,
  add,
  divide,
  subtract,
}

type Result = number;

interface calc{
  arr : Array<string|number>;
}

class calculator implements calc{
  arr : Array<string|number> = [];
 
  performOperation( arr:<>){
    if (arr[0] === 'multiply') {
      return arr[1] * arr[2] ;
    } else if (arr[0]  === 'add') {
      return arr[1] + arr[2] ;
    } else if (arr[0]  === 'divide') {
      return arr[1] / arr[2] ;
    } else if (arr[0]  === 'subtract') {
      return arr[1] - arr[2] ;
    }

  }

  /* add (c:number , d:number): number {
    return c + d;
  }
  sub (c:number , d:number): number {
    return c - d;
  }
  mult (c:number , d:number): number {
    return c * d;
  }
  div (c:number , d:number): number {
    return c / d;
  } */

}





 


  




/* const calculator = (a: number, b: number, op : Operation) : Result => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if( b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
} */



/* try {
  console.log(calculator(1, 5 , 'divide'))
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
} */