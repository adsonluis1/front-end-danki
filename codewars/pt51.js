function sum (n) {
    return n.length> 0? n.reduce((a,b)=> a+b): 0     
  };

  console.log(sum([10,33]))