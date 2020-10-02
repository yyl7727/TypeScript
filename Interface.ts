//接口
interface IPerson{
    //只读，只可在实例时初始化值
    readonly id: number;
    name: string;
    //?标记的变量为可选变量，即参数可以出现也可以不出现
    age?: number;
}

let person:IPerson = {
    id: 1,
    name: 'yyl',
    age: 23
}