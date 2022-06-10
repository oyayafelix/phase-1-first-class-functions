let receivesAFunction = (callBack) => callBack();



let returnsANamedFunction = () => {
  const namedFunction = () => "Oops! I have a name.My name is ....";
  return namedFunction;
};



const returnsAnAnonymousFunction = () => () => "Sad! I don't have a name";