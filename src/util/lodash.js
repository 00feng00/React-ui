import _Filter from 'lodash.filter'
import _Map from 'lodash.map'
import _Uniq from 'lodash.sorteduniq'

export const MyMap = _Map
export const Filter = _Filter
export const Uniq = _Uniq


export function r_array_length(num) {
    var _array = []
    for (var i = 0; i < num; i++) {
        _array.push(i)
    }
    return _array
}

export function mergeArray(a1, a2, key) {
    var _key = key || "designItemId"
    var finshArray = a1;
    _Map(a2, item2 => {
        var isExit = false;
        _Map(a1, item1 => {
            if (item1[_key] == item2[_key]) {
                isExit = true
            }
        })
        if (!isExit) {
            finshArray.push(item2)
        }
    })

    return finshArray
}

export function deleteTheSameOneArray(_longA, _needA, key) {
    return MyMap(_longA, x => Object.assign(x, _needA.find(y => y[key] == x[key])));
}

export function max(m1, m2) {
    if (m1 > m2) {
        return m1
    }
    else {
        return m2
    }
}

export function min(m1, m2) {
    if (m1 > m2) {
        return m2
    }
    else {
        return m1
    }
}

export function closest(num=0, arr, key) {
    var curr = arr[0];
    var diff = Math.abs(num - curr[key]);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs(num - arr[val][key]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}