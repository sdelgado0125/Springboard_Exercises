function findRotatedIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        if (arr[low] <= arr[mid]) {
            if (num >= arr[low] && num < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (num > arr[mid] && num <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex
