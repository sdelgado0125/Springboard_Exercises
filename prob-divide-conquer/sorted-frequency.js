function sortedFrequency(arr, val) {
    let first = findFirst(arr, val);
    if (first === -1) return -1;

    let last = findLast(arr, val);
    return last - first + 1;
}

function findFirst(arr, val, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid === 0 || val > arr[mid - 1]) && arr[mid] === val) {
            return mid;
        } else if (val > arr[mid]) {
            return findFirst(arr, val, mid + 1, high);
        }
        return findFirst(arr, val, low, mid - 1);
    }
    return -1;
}

function findLast(arr, val, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid === arr.length - 1 || arr[mid + 1] > val) && arr[mid] === val) {
            return mid;
        } else if (arr[mid] > val) {
            return findLast(arr, val, low, mid - 1);
        }
        return findLast(arr, val, mid + 1, high);
    }
    return -1;
}

module.exports = sortedFrequency;
