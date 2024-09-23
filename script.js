const stars = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const ratingMessage=document.querySelector('.rating-message')

let selectedIndex = -1;

const updateStars = (index) => {
    stars.forEach((star, ind) => {
        star.style.color = ind <= index ? '#fd4' : 'gray';
    });
};

const updateRatingMessage = (index) => {
    switch (index + 1) {
        case 1:
            ratingMessage.textContent = "Bad";
            break;
        case 2:
            ratingMessage.textContent = 'Avarage';
            break;
        case 3:
            ratingMessage.textContent = 'Good';
            break;
        case 4:
            ratingMessage.textContent = 'Better';
            break;
        case 5:
            ratingMessage.textContent = 'Best'
            break;
        default:
            ratingMessage.textContent='Please select a Rating'
    }
}

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => updateStars(index));
    star.addEventListener('mouseout', () => updateStars(selectedIndex));

    star.addEventListener('click', () => {
        if (inputs[index].checked && selectedIndex === index) {
            inputs[index].checked = false;
            selectedIndex = index - 1;
        }
        else {
            inputs.forEach((input, i) => {
                input.checked = i <= index
            });
            selectedIndex = index;
        }
        updateStars(selectedIndex);
        updateRatingMessage(selectedIndex);
    })
})
window.addEventListener('load',()=> {
    updateRatingMessage();
})