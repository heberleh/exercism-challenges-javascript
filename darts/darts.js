/**
 * Given a point in the target, returns the amount earned by a dart landing in the respective circle
 * @param {float} x 
 * @param {float} y 
 */
export const solve = (x, y) => {
    // compute radius
    let r = Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2));

    // If the dart lands outside the target
    if (r > 10) return 0;

    // If the dart lands in the outer circle of the target
    if (r > 5) return 1;

    // If the dart lands in the middle circle of the target
    if (r > 1) return 5;
    
    // If the dart lands in the inner circle of the target
    return 10;
}