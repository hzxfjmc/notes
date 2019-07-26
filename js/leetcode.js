var lengthOfLongestSubstring = function (s) {
    let i = 0, res = 0, n = 0;
    for (let j = 0; j < s.length; j++) {
        n = s.slice(i, j).indexOf(s[j]);
        if (n < 0) {
            res = Math.max(res, j + 1 - i)
        } else {
            i += n + 1;
        }
    }
    return res;
};
lengthOfLongestSubstring("abcabcbb");


let entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d:{xx:'adxx'},
        e:'ae'
    }
}
function floatsort(entry,key="",obj={}) {
    for (let i in entry) {
        if(Object.prototype.hasOwnProperty.call(entry,i)){
            let keyName = `${key}${i}`;
            if(typeof entry[i] == 'object'){
                floatsort(entry[i],keyName+'.',obj);
            }else{
                obj[keyName] = entry[i] 
            }
        }
    }
    return obj
}
floatsort(entry,key="",obj={});