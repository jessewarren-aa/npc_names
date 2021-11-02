var MODULE = (function (my) {
	my.randomItemFromArray = (array) => {
    const randomNumber = Math.random() * array.length;
    return array[Math.floor(randomNumber)];
  };

	my.randomNumberInRange = (min, max) => {
		min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1) + min);
	};

	return my;
}(MODULE || {}));