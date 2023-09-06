export function generateRating(rate) {
    const rateElements = [];
    for(let i =0; i <RATE; i++){
        if(i < rate && rate % 1 === 0){
            rateElements.push('<i class="fa-solid fa-shield-cat"></i>');
        }else if( i < Math.floor(rate) && rate % 1 !==0){
            rateElements.push('<i class = "fa-solid fa-star"></i>');
        }else if( i === Math.floor(rate) && rate % 1 !==0){
            rateElements.push('<i class = "fa-solid fa-star-half-stroke"></i>');
        }else{
            rateElements.push('<i class = "fa-regular fa-star"></i>');
        }
    }
    return rateElements.join("");
}
