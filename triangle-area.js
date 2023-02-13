function triangleArea (side1, side2, side3){
    const s = (side1 + side2 + side3) / 2;
    const totalArea = (s * (s - side1) * (s - side2) * (s - side3))
    const area = Math.sqrt(totalArea);
    return area;
}
const triangleTotalArea = triangleArea(3, 5, 4)
console.log(triangleTotalArea)