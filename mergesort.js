
function mergesort(Arr) {
    if (Arr.length == 1 ) {
        return Arr
    } else {
        let mid = Math.floor(Arr.length / 2)
        let arrL = Arr.slice(0, mid)
        let arrR =  Arr.slice(mid)
         return merge(mergesort(arrL), mergesort(arrR))
    }
}

function merge(Arr1, Arr2) {
    let length = (Arr1.length + Arr2.length)
    let merged = []
    while (merged.length != length) {
        if (Arr1[0] <= Arr2[0] || Arr2.length == 0) {
            merged.push(Arr1[0])
            Arr1.shift()
        } else {
            merged.push(Arr2[0])
            Arr2.shift()
        }
        
    }
    return merged
}


console.log(mergesort([4,12,2363,1,5345,12]));