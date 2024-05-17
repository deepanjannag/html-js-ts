//const printInt = (num:number) => console.log(num);
//const printString = (str:string) => console.log(str);
//const printBoolean = (bool:boolean) => console.log(bool);

const genericPrint = <T>(arg:T) => console.log(arg);
genericPrint<number>(10);
genericPrint<string>('Hello');
genericPrint<boolean>(true);