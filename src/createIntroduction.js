export function createIntroduction() {
    let introduction = document.createElement('div');
    let restaurantName = document.createElement('div');
    let description = document.createElement('div');
    restaurantName.textContent = 'HUNGRY GRIZZ';
    description.textContent = 'ONLINE ORDERING AVAILABLE FOR BOTH LOCATIONS';
    restaurantName.classList.add('restaurant-name');
    description.classList.add('description');
    introduction.classList.add('introduction');
    introduction.appendChild(restaurantName);
    introduction.appendChild(description);
    return introduction;
}