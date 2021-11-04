var MODULE = (function (my) {
	my.randomItemFromArray = (array) => {
    const randomNumber = Math.random() * array.length;
    return array[Math.floor(randomNumber)];
  };

	return my;
}(MODULE || {}));