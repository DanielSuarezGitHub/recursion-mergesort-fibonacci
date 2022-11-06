
function mergesort(Arr) {
    if (Arr.length == 1 ) {
        console.log("array subdivided to its minimum");
        return Arr
    } else {
        let mid = Math.floor(Arr.length / 2)
        let arrL = Arr.slice(0, mid)
        let arrR =  Arr.slice(mid)
        return mergesort(arrL).concat(mergesort(arrR))
    }
}

mergesort([1,3,4,56,7,78])