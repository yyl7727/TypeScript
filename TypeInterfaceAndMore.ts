//类型推论
let str = 'str';

//str = 123  此时因为推论str的类型为string所以无法赋值数字类型

//union types
let numberOrString: number|string

numberOrString = 'abc';
numberOrString = 123;
//此时numberOrString能够调用的方法只有number和string共有的方法
//numberOrString.共有方法

function getLength(input: number|string){
    //类型断言 告诉编译器这个是什么类型
    const str = input as string;
    if(str.length){
        return str.length;
    }
}


//type guard
function getLength2(input: string | number): number{
    if(typeof input == 'string'){
        return input.length;
    }else{
        return input.toString().length;
    }
}