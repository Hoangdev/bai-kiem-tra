function allLongestring(inputArray){
    let longest = Math.max(...inputArray.map(({length})=>length));
    return inputArray.filter(({length})=> length === longest);
}
console.log(allLongestring(['BINH', 'HUNG', 'PHUOC', 'CAO','KHANH']));