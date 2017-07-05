/*
    Write a solution with O(n2) time complexity, since this is what you would be asked to do during a real interview.
    You have an array a composed of exactly n elements. Given a number x, determine whether or not a contains three elements for which the sum is exactly x.
    Example
    For x = 15 and a = [14, 1, 2, 3, 8, 15, 3], the output should be
    tripletSum(x, a) = false;
    For x = 8 and a = [1, 1, 2, 5, 3], the output should be
    tripletSum(x, a) = true.
    The given array contains the elements 1,2, and 5, which add up to 8.
    Input/Output
    [time limit] 500ms (cpp)
    [input] integer x
    Guaranteed constraints:
    1 ≤ x ≤ 105.
    [input] array.integer a
    Guaranteed constraints:
    3 ≤ a.length ≤ 6 · 105,
    1 ≤ a[i] ≤ 105.
    [output] boolean
    Return true if the array contains three elements that add up to x and false otherwise.
*/

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
 
