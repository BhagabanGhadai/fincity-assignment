
const findPies = (pies, sweetness) => {
    let ans = [];
    let tempPieArray = [];
    for (let i = 0; i < pies.length; i++) {
        let tempSweetness = pies[i];
      if (tempSweetness == sweetness) {
            ans.push(i);
            return ans;
        }else if (tempSweetness < sweetness) {
            tempPieArray.push(i);
            for (let j = i + 1; j< pies.length; j++) {
                if (tempSweetness + pies[j] <= sweetness) {
                    tempSweetness += pies[j];
                    tempPieArray.push(j);
                }
                if (tempSweetness == sweetness) {
                    ans.push(tempPieArray);
                    return ans;
                }
            }
        }
    };
    return ans;
}
console.log(findPies([1, 2, 3, 2, 1], 6));

console.log(findPies([8, 4, 3, 2, 6, 5], 6))