function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        if (arr[low] <= arr[high]) return low;

        let mid = low + Math.floor((high - low) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1 + arr.length) % arr.length;

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        if (arr[mid] <= arr[high]) {
            high = mid - 1;
        } else if (arr[mid] >= arr[low]) {
            low = mid + 1;
        }
    }

    return -1;
}

module.exports = findRotationCount
