function tripletSum(x, a) {
    // sort it. makes it easier to work from both directions
    a.sort(function(a, b) { return a - b; });
    
    for (var i = 0; i < a.length; i++) {
        l = i + 1;
        r = a.length - 1;
        while (l < r) {
            if (a[i] + a[l] + a[r] == x) {
                return true;
            } else if (a[i] + a[l] + a[r] < x) {
                l++;
            } else {
                r--;
            }
        }
    }
    return false;
}
 
