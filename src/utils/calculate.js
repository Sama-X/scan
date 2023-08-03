export const transferDigit = (num) =>{
    let reg = num.toString().indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    let result = num.toString().replace(reg,"$1,");
    return result
}
