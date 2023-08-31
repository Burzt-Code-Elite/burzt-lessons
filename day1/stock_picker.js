// Basic approach
const stockPicker = (prices) =>{
    let bestBuyDay = 0;
    let bestSellDay = 0;
    let maxProfit = 0;

    for (let buyDay = 0; buyDay < prices.length; buyDay++) {
        for (let sellDay = buyDay; sellDay < prices.length; sellDay++) {
            const profit = prices[sellDay] - prices[buyDay];
            if (profit > maxProfit) {
                maxProfit = profit;
                bestBuyDay = buyDay;
                bestSellDay = sellDay;
            }
        }
    }

    return [bestBuyDay, bestSellDay];
}

const stockPrices = [17, 3, 6, 9, 15, 8, 6, 1, 10];
const result = stockPicker(stockPrices);
console.log(result);  // Output: [1, 4]


// Intermediate approach

// const stockPicker = (prices) => {
//     let bestBuyDay = 0;
//     let maxProfit = 0;
//     const bestSellDays = prices.map(price=>0)

//     for (let sellDay = prices.length - 1; sellDay >= 0; sellDay--) {
//         if (prices[sellDay] > prices[bestBuyDay]) {
//             maxProfit = Math.max(maxProfit, prices[sellDay] - prices[bestBuyDay]);
//             bestSellDays[sellDay] = bestBuyDay;
//         } else {
//             bestBuyDay = sellDay;
//             bestSellDays[sellDay] = sellDay;
//         }
//     }

//     let bestBuy = 0;
//     let bestSell = 0;

//     for (let buyDay = 0; buyDay < prices.length; buyDay++) {
//         if (prices[bestSellDays[buyDay]] - prices[buyDay] > maxProfit) {
//             maxProfit = prices[bestSellDays[buyDay]] - prices[buyDay];
//             bestBuy = buyDay;
//             bestSell = bestSellDays[buyDay];
//         }
//     }

//     return [bestBuy, bestSell];
// }

// const stockPrices = [17, 3, 6, 9, 15, 8, 6, 1, 10];
// const result = stockPicker(stockPrices);
// console.log(result);  // Output: [1, 4]




// Best approach

// const stockPicker = (prices) => {
//     let bestBuyDay = 0;
//     let bestSellDay = 0;
//     let maxProfit = 0;
//     let currentBuyDay = 0;

//     for (let sellDay = 1; sellDay < prices.length; sellDay++) {
//         if (prices[sellDay] < prices[currentBuyDay]) {
//             currentBuyDay = sellDay;
//         } else if (prices[sellDay] - prices[currentBuyDay] > maxProfit) {
//             bestBuyDay = currentBuyDay;
//             bestSellDay = sellDay;
//             maxProfit = prices[sellDay] - prices[currentBuyDay];
//         }
//     }

//     if (maxProfit <= 0) {
//         return [];
//     }

//     return [bestBuyDay, bestSellDay];
// }

// // Test cases
// const stockPrices1 = [17, 3, 6, 9, 15, 8, 6, 1, 10];
// const result1 = stockPicker(stockPrices1);
// console.log(result1);  // Output: [1, 4]

// const stockPrices2 = [10, 3, 6, 9, 15, 8, 6, 1, 17];
// const result2 = stockPicker(stockPrices2);
// console.log(result2);  // Output: [7, 8]

// const stockPrices3 = [10, 10, 10, 10, 10];
// const result3 = stockPicker(stockPrices3);
// console.log(result3);  // Output: []
