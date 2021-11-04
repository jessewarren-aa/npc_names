var MODULE = (function (my) {
	my.randomName = () => {
    const firstName = my.randomItemFromArray(firstNames);
    const lastNameEpithet = my.randomItemFromArray(lastNameEpithets);
    const lastNameNoun = my.randomItemFromArray(lastNameNouns);
		return `${firstName} ${lastNameEpithet}${lastNameNoun}`
  };

	my.createRandomNameElement = () => {
		const div = document.createElement("div");
		const name = my.randomName();
		div.innerText = name;
		document.getElementById("names").appendChild(div);
		return undefined;
	}

	my.generateNames = (amount) => {
		for (let i = 0; i < amount; i++) {
			my.createRandomNameElement();
		};
		return undefined;
	};

	const firstNames = ["Jon", "Jana", "Dragomir", "Wes", "Arron", "Lena", "Flyn", "Granit", "Yanis", "Eva", "Idris", "Gwen", "Devon", "Esemir", "Axel", "Mira", "Darian", "Flo", "Issi", "Dafne", "Hazel", "Roisin", "Ruben", "Seth", "Caelin", "Orla", "Pria", "Rowan", "Olaf", "Trent", "Marek", "Roik", "Bertran", "Tormen", "Zak", "Ganut", "Stron", "Pelin", "Oswin", "Ferlik", "Jasmin", "Drezz", "Coromet", "Grunwila", "Rafina", "Draxon", "Alkon", "Fleck", "Jin", "Dagmar", "Joris", "Lavin", "Tegen", "Larissa", "Lorilee", "Fenwick", "Caradoc", "Toady", "Gea", "Aspen", "Leandra", "Colyn", "Agnes", "Seldon", "Clifton", "Gibon", "Lazar", "Fel", "Gerald", "Ovina", "Vondel", "Gideon", "Drayton", "Owyn", "Brindel", "Una", "Uma", "Benn", "Delryn", "Mia", "Nora", "Pip", "Teia", "Osbalt", "Robyn", "Perritt", "Eggard", "Merit", "Philomena", "Jaysee", "Cameron", "Nikki", "Bryn", "Ida", "Oriel", "Alina", "Odo", "Dezre", "Petronia", "Bilko", "Eva", "Finigan", "Helois", "Loris", "Brigitte", "Theobald", "Wilhelm", "Neferi", "Jilomar", "Botherin", "Larissa", "Dillon", "Remy", "Rex", "Gelda", "Jamila", "Eldon", "Greta", "Lilly", "Hattie", "Clarence", "Gus", "Chester", "Oliver", "Ezra", "Abelia", "Bertie", "Grint", "Cyril", "Alba", "Abner", "Roscoe", "Wilber", "Cornel", "Osgood", "Hector", "Cruilla", "Elric", "Mildred", "Wexton", "Linus", "Wendel", "Clem(ence)", "Percy", "Rufus", "Hal", "Harvey", "Megan", "Jen", "Prunila", "Loretta", "Garret", "Faizel", "Rosalind", "Cyra", "Jasper", "Drusilla", "Carrick", "Roncan", "Titiana", "Tethren", "Berrick", "Mylo", "Elias", "Gael", "Layla", "Nanna", "Hubert", "Avona", "Gray", "Thinden", "Derrian", "Willy", "Timrin", "Elrod", "Jesper", "Berevan", "Grenley", "Solomon", "Axton", "Erel", "Tina", "Bella", "Krag", "Cleris", "Vixen", "Gladwin", "Languedoc", "Beyla", "Ilsa", "Bolo", "Bea", "Roni", "Pippa", "Scarsen", "Yunis", "Quentin", "Phoebe", "Delewin", "Wally", "Otis", "Tigga", "Reece", "Specky", "Peggy", "Hamil", "Bethel", "Aldric"];

	const lastNameEpithets = ["Blue", "Noble", "Lightning", "Cat", "Tide", "Ferret", "Skull", "Snow", "Loose", "Craven", "Riddle(s)", "Giant", "Sage", "Gorgon", "Timber", "Lumber", "Cradle", "Heron", "Tinder", "Wet", "Flint", "Needle", "Swallow", "Dire", "Pewter", "Brass", "Hill", "Plain", "Rye", "Wheat", "Soft", "Proud", "Rib", "Free", "Dour", "Opal", "Brandy", "Dandy", "Spirit", "Hoot", "Safe", "Shallow", "Knave", "Spider", "Rage", "Noon", "Boon", "Prime", "Eternal", "Pure", "Beryl", "Middle", "Blaze", "Fen", "Kings", "Quag", "Dung", "Desert", "Forest", "Filly", "Daisy", "Fir", "Willow", "Beech", "Pine", "Fury", "Heaven", "Lime", "Orchid", "Swamp", "Bog", "Aether", "Elm", "Rhyme", "Honey", "Marble", "Candle", "Wicker", "Hoarse", "Silent", "Limp", "Fiery", "Last", "Wheel", "Rabbit", "Wiggle", "Bug", "Cat", "Frog", "Viper", "Hornet", "Church", "Brick", "New", "Old", "Sly", "Razor", "Bold", "Fiery", "Wily", "Shy", "Vile", "Lazy", "Slumber", "Velvet", "Bracken", "Hay", "Stork", "Straw", "Ghost", "Grand", "Butter", "Tender", "Umber", "Frail", "Chestnut", "Glimmer", "Tin", "Pepper", "Salt", "Barley", "Ale", "Plum", "Ripe", "Brush", "Flaxen", "Even", "Lunar", "Coral", "Queens", "Feeble", "Tawny", "Gloom", "Doom", "Grim", "Bleak", "Sombre", "Chalk", "Slate", "Oyster", "Saffron", "Dappled", "Ash", "Lead", "Nettle", "Hoar", "Morn", "Under", "Heather", "Fat", "Broken", "Hell", "Brisk", "Drift", "Ample", "Lame", "Gout", "Yellow", "Throttle", "Damsel", "Adder", "Smelly", "Mink", "Ruin", "Kin", "Omen", "Woe", "Kind", "Slug", "Crystal", "Bristle", "Slip", "Crinkle", "Lavendar", "Lace", "Loyal", "Leal", "Cow", "Bluster", "Galley", "Rum", "Wrinkle", "Fable", "Silent", "Royal", "Dun", "Boar", "Fickle", "Knoll", "Air", "Moor", "Soot", "Roan", "Snug", "Cur", "Harrier", "Siren", "Cabbage", "Bent", "Bile", "Weasel", "Fey", "Spore", "Murky", "Tough", "Falcon", "Mountain", "Demon", "Black", "White", "Gold", "Silver", "Bronze", "Copper", "Steel", "Iron", "Rock", "Amber", "Red", "Rose", "Green", "Grey", "Shadow", "Dark", "Dusk", "Dawn", "Bright", "Light", "Sun", "Moon", "Star", "Storm", "Cloud", "Dream", "Fire", "Wood", "Oak", "Strong", "Hard", "Stout", "Arrow", "Shield", "Sparrow", "True", "Swift", "Deft", "Nimble", "Quick", "Fleet", "Hawk", "Lion", "Bear", "Tiger", "Griffon", "Dragon", "Snake", "Cobra", "Eagle", "Stag", "Deer", "Ox", "Bison", "Wolf", "Jackal", "Dog", "Rat", "Lynx", "Owl", "Panther", "Crab", "Kraken", "Trout", "River", "Sea", "Swan", "Duck", "Goose", "Sand", "Castle", "Cliff", "Crag", "Bluff", "Beach", "Good", "Fair", "Blade", "Axe", "Hammer", "Wagon", "Leather", "Loom", "Cart", "Bull", "Plough", "Wheel", "Little", "Great", "Dew", "Crow", "Raven", "Ruby", "Jet", "Sky", "Jade", "Gem", "Diamond", "Flame", "Bone", "Teal", "Frost", "Ever", "Right", "Scarlet", "Night", "Day", "Lone", "Ivy", "Smoke", "Sable", "Deep", "Sharp", "Bitter", "Ginger", "Sweet", "Rolling", "Smooth", "Acorn", "Speckle", "Cloven", "Winter", "Spring", "Autumn", "Summer", "Lily", "Beetle", "Brazen", "Slow", "Battle", "Dry", "Cherry", "Wild", "Dune", "Spotted", "Cold", "Death", "Scar", "Mild", "War", "Thunder", "Merry", "Idle", "Cheese", "Rich", "Poor", "Rust", "Mean", "Joy", "Pearl", "Luck(y)", "Long", "Firm", "Rough", "Pale", "Savage", "June", "May", "Gentle", "Tall", "Top", "Bottom", "Mellow", "Short", "Fine", "Fortune", "Grave", "High", "Pink", "Glass", "Thrifty", "Drizzle", "Wool", "Tortoise", "Falcon", "Crown", "Arbour", "Anchor", "Dread", "Cleft", "Emerald", "Twinkle", "Bay", "Harpy", "Common", "Venom", "Coal", "Titan", "Bumble", "God", "Baggy", "Biege", "Ram", "Poppy", "Shatter", "Hound", "Scrawny", "Flea", "Birch", "Chamber", "Hairy", "Troll", "Rumble", "Spruce", "Poison", "Beacon", "Far", "Apple"];

	const lastNameNouns = ["staff", "crest", "catcher", "fetcher", "fighter", "skipper", "pecker", "clasp", "button", "cottage", "worth", "reckon(ing)", "wine", "spell", "trader", "worker", "lit", "loft", "spark", "peg", "flurry", "dart", "drifter", "whisper(er)", "ring", "brace", "shepherd", "sceptre", "grain", "sheaf", "pride", "antler", "tickler", "mason", "bound", "chain", "barn", "buck", "horn", "cryer", "harbour", "port", "trap(per)", "jack", "lust", "riser", "lord", "cut", "glade", "crack", "gift", "camp", "town", "moor", "mire", "nag", "sweeper", "mare", "steed", "whip(per)", "bell(s)", "snapper", "warbler", "craft", "harness", "forge(d)", "sent", "scent", "musk", "shiver", "shudder", "bat", "cudgel", "peddler", "lyre", "limb", "stick", "horse", "throat", "pad", "shoe", "bolt", "arch", "barrow", "burrow", "worm", "stain", "lick", "fetcher", "prey", "nest", "mouse", "temple", "spire", "tower", "hook", "pike", "crook", "bolt", "guise", "kiss(ed)", "wart", "toad", "newt", "fleece", "hearth", "blaze", "sigil", "bale", "mound", "crescent", "cup(s)", "bud", "brow", "gable", "head", "knife", "spoon", "pot", "shaker", "barrel", "dipper", "brew", "vine", "thatch", "cape", "glory", "flood", "rain", "reign", "reins", "bridle", "driver", "sayer", "guts", "blizzard", "fellow", "cheeks", "jacket", "diver", "flume", "plume", "grave", "tomb", "garden", "frost", "singer", "root", "frond", "harvest", "blade", "throne", "bee", "swarm", "flock", "herd", "rot", "belly", "weed", "sting", "bite", "turf", "flayer", "tracker", "seer", "gazer", "wanderer", "voyager", "squisher", "fang", "noose", "knot", "moss", "bark", "gauntlet", "squire", "knight", "halter", "bow", "shank", "runner", "rump", "joust", "destroyer", "lance", "scabbard", "holm", "slippers", "strider", "borne", "jaunt", "cowl", "hood", "hat", "howl", "talons", "conch", "patch", "dirk", "bladder", "creek", "sworn", "sniffer", "moat", "mutton", "flare", "lair", "scorned", "hand", "finger", "fist", "tongue", "beard", "hair", "jaw", "glove", "haven", "dawn", "moon", "mount", "gaze", "cloak", "run", "sun", "tripper", "dancer", "soul", "flower", "blossom", "bringer", "dust", "quiver", "seeker", "giver", "strike", "cutter", "heart", "blood", "helm", "anvil", "smith", "bearer", "flash", "stone", "shield", "spear", "foot", "notch", "ford", "wind", "mane", "rider", "rake", "bane", "slayer", "skin", "killer", "born", "walker", "hunt(er)", "tamer", "stalker", "creek", "mouth", "tooth", "tail", "hide", "flight", "claw", "eater", "maid", "nose", "bank", "breeze", "song", "feather", "wing", "shifter", "stormer", "raider", "reaver", "breaker", "comber", "berry", "brook", "forge(r)", "storm", "wind", "chaser", "saddle", "weaver", "swain", "chest", "puller", "wright", "rider", "star", "drop", "caller", "roost", "mine(r)", "tempest", "deck", "tusk", "tree", "farmer", "fork", "field", "feather", "whiskers", "lock", "guard", "mark", "warden", "watcher", "ranger", "bridge", "ridge", "valley", "gorge", "thistle", "thorn", "petal", "meadow", "boulder", "pebble", "bush", "bough", "trunk", "vale", "leaf", "grove", "orchard", "bank", "boots", "belt", "sack", "pack", "fell", "falls", "dove", "fox", "vole", "paw", "maw", "nape", "jape", "song", "clap", "harp", "calm", "bread", "larder", "plate", "bucket", "pouch", "pocket", "locket", "charm", "rope", "law", "scale", "snout", "beak", "bird", "gale", "rush", "reed", "lily", "pond", "lake", "beam", "ray", "well", "gate", "wall", "coat", "shins", "palm", "shears", "shorn", "shell", "dive", "steward", "lark", "bay", "shore", "coast", "hoarder", "toes", "kite", "begotten", "heir", "bride", "groom", "scion", "child", "chosen", "britches", "breetches",, "brood", "breath", "scribe", "home", "hall", "key", "purse", "spawn", "mage", "scythe", "chalice", "keeper", "flung", "house"];

	return my;
}(MODULE || {}));