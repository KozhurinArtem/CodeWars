const feast = (beast, dish) => (beast.charAt(0)===dish.charAt(0) && beast.charAt(beast.length-1)===dish.charAt(dish.length-1)) ? true : false;
console.log(feast("brown bear", "bear claw"));