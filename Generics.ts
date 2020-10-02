//泛型
function echo<T>(arg: T): T{
    return arg;
}

const str: string ='str'
const result = echo(str)


function echoWithArr<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

const arrs = echoWithArr([1,2,3])

interface IWithLength{
    length: number
}

function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length);
    
    return arg;
}

const str1 = echoWithLength('str');
