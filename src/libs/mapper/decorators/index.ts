export function MapColumn(value: string) {
  return function(target: any, propertyKey: string) {
    //
    console.log(target);
    console.log(propertyKey);
    // console.log(descriptor);
  };
}
