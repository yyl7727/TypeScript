//类型别名
let sum: (x: number, y: number) => number;
const result = sum(1,2);
type PlusType = (x: number, y: number);
let sum2: PlusType;
const result2 = sum2(2,3);
type StrOrNumber = string | number;
let result3: StrOrNumber = 'str';
result3 = 123;


//交叉类型
interface IName{
    name: string
}

type IPerson = IName & {age: number};
let person: IPerson = {name:'yyl',age:123}