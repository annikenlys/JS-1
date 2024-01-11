// let news = [
//     {
//         headline: "Watch a cat land on the moon",
//         summary: ""
//     },
//     {
//         headline: "A baby for president 2027",
//         summary: ""
//     },
//     {
//         headline: "Sharks can now do eye surgery",
//         summary: ""
//     }
// ];
//
// console.log(news);
//
// const newsContainer = document.querySelector(".news");
//
// console.log("newsContainer: ", newsContainer);
//
// totalNumberOfNews = news.length;
//
// let html = "";
//
// for (let i = 0; i < totalNumberOfNews; i ++) {
//     console.log(news[i]);
//
//     newsContainer.innerHTML += `
//              <div>
//                 <h2>
//                     ${news[i].headline}
//                 </h2>
//                 <p>
//                     ${news[i].summary}
//                 </p>
//             </div>
//     `;
//     console.log("newsContainer ", newsContainer);
// }

function createShoppingList(shoppingList) {
    let myShoppingListItem = " ";

    for (let i = 0; i < shoppingList.length; i++) {
        myShoppingListItem += `
            <div>
                <h2>${shoppingList[i].name}</h2>
                <h3>${shoppingList[i].price}</h3>
            </div>
        `
        return myShoppingListItem
    }
}

let lineShoppingList = [
    {
        name: "fork",
        Price: 3999
    },
    {
        name: "piano",
        Price: 17
    }
];


const lineShoppingListContainer = document.querySelector(".line-shopping-list");

lineShoppingListContainer.innerHTML = createShoppingList(lineShoppingList);
