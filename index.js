let ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]
//  Calculate the Average rating for all the restaurants
let resNames = []
let returnData = []

function avgRating() {


    for (i of ratingData) {
        resNames.push(i.restaurant)
        resNames = resNames.filter((x, i) => {

            return resNames.indexOf(x) === i
        })

    }
    resNames.map(name => {
        const filterByName = ratingData.filter(object => object.restaurant === name)
        const avgRatingData = {
            restaurant: name,
            rating: filterByName.reduce((pre, nex) => pre + nex.rating, 0) / filterByName.length,
        }
        returnData.push(avgRatingData)

    })
    return returnData
}
const avgR = avgRating()
console.log(avgR)


//List of all restaurants with average rating greater than or equal to 4
function avgR4(avgR) {
    return avgR.filter(object => object.rating >= 4)
}
const avg4 = avgR4(avgR)
console.log(avg4)