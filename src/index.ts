@logClassWithArgs("User")
class Person {
  public name: string;
}

function logClassWithArgs(filter: string) {
  return (target: Object) => {
    console.log(filter);
    console.log(target);
  };
}
