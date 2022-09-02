function receivesAFunction(spy){
  return spy()
  }
  receivesAFunction(function () { return 4 + 5; });


  function returnsANamedFunction (){
   return returnsANamedFunction
  }

  function returnsAnAnonymousFunction (){
    return function (){}
  }
