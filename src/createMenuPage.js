/**
 * Create starterMenu, mainMenu
 * h2
 * createFoodCards
 */

export function createStarterMenu() {
  let starter = document.createElement("div");
  starter.classList.add("starter");
  let title = document.createElement("h2");
  title.textContent = "Starter";
  starter.append(title);
  const foodCards = creteStarterFoodCards();
  foodCards.forEach((foodCard) => {
    starter.append(foodCard);
  });
  return starter;
}

export function createMainMenu() {
  let main = document.createElement("div");
  main.classList.add("main");
  let title = document.createElement("h2");
  title.textContent = "Main Course";
  main.append(title, createMainFoodGrid());
  
  return main;  
}

function createMainFoodGrid() {
  let foodGrid = document.createElement("div");
  foodGrid.classList.add("food-grid");

  const imageLinks = ["/src/taco.jpg", "/src/pizza.jpg"];
  const foodInfo = [
    { name: "Taco", price: "$12.5" },
    { name: "Pizza", price: "$21.11" },
  ];

  for (let i = 0; i < 4; i++) {
    let foodCard = document.createElement("div");
    foodCard.classList.add("food-card");
    let img = document.createElement("img");
    img.src = imageLinks[i%2];
    img.alt = "This is food image";
    foodCard.append(img, createFoodInfo(foodInfo[i%2]));
    foodGrid.append(foodCard);
  }

  return foodGrid;
}

function creteStarterFoodCards() {
  let foodCards = [];
  const imageLinks = ["/src/taco.jpg", "/src/pizza.jpg"];
  const foodInfo = [
    { name: "Taco", price: "$12.5" },
    { name: "Pizza", price: "$21.11" },
  ];
  for (let i = 0; i < 2; i++) {
    let foodCard = document.createElement("div");
    foodCard.classList.add("food-card");
    let img = document.createElement("img");
    img.src = imageLinks[i];
    img.alt = "This is food image";
    foodCard.append(img, createFoodInfo(foodInfo[i]));
    foodCards.push(foodCard);
  }

  return foodCards;
}

function createFoodInfo(food) {
  let foodInfo = document.createElement("div");
  foodInfo.classList.add("food-info");

  let foodNamePrice = document.createElement("div");
  foodNamePrice.classList.add("food-name-price");

  let foodName = document.createElement("div");
  foodName.classList.add("food-name");
  foodName.textContent = food.name;

  let foodPrice = document.createElement("div");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = food.price;

  let foodDescription = document.createElement("div");
  foodDescription.classList.add("food-description");
  foodDescription.textContent = `Lorem ipsum dolor sit amet consectetur elit. Repellendus odiodolor explicabo eligendi sunt`;

  foodNamePrice.append(foodName, foodPrice);
  foodInfo.append(foodNamePrice, foodDescription);
  return foodInfo;
}
