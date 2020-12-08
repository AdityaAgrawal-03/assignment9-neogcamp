const movieDatabase = {
  // leanred new way of storing data

  drama: [
    {
      name: "Pulp Fiction",
      director: "Quentin Tarantino",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71c05lTE03L._AC_SY879_.jpg",
      release: "10 September, 1994",
      story:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time."
    },
    {
      name: "The Shawshank Redemption",
      director: "Frank Darabont",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51B1ehfX4pL._AC_.jpg",
      release: "22 September, 1994",
      story:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope."
    },
    {
      name: "12 Angry Men",
      director: "Sidney Lumet",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
      release: "April 10, 1957",
      story:
        "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other."
    }
  ],

  war: [
    {
      name: "Saving Private Ryan",
      director: "Steven Spielberg",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
      release: "24 July, 1998",
      story:
        "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home."
    },
    {
      name: "1917",
      director: "David Fincher",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      release: "17 January, 2020",
      story:
        "During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother."
    },
    {
      name: "Schindler's List ",
      director: "Steven Spielberg",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg",
      release: "November 30, 1993",
      story:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II."
    }
  ],

  thriller: [
    {
      name: "Fight Club",
      director: "David Fincher",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      release: "October 15, 1999",
      story:
        "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."
    },
    {
      name: "The Dark Knight",
      director: "Christopher Nolan",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release: "July 16, 2008",
      story:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker."
    },
    {
      name: "Mad Max: Fury Road",
      director: "George Miller",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      release: "May 13, 2015",
      story:
        "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order."
    }
  ],

  romantic: [
    {
      name: "Before Sunrise",
      director: "Richard Linklater",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6KWnXYoV1htDT3TGYdFWucfTt6t.jpg",
      release: "January 27, 1995",
      story:
        "On his way to Vienna, American Jesse meets Céline, a student returning to Paris. After long conversations forge a surprising connection between them, Jesse convinces Celine to get off the train with him in Vienna. Since his flight to the U.S. departs the next morning and he has no money for lodging, they wander the city together, taking in the experiences of Vienna and each other."
    },
    {
      name: "Tamasha",
      director: "Imtiaz Ali",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Ktf15qGVFYQ6CdBtBgCDM96UMC.jpg",
      release: "November 27, 2015",
      story:
        "Ved and Tara meet accidentally meet in Corsica, France and decide to spend the next 7 days together with secretly revealing their true identity or without any promise to meet later, ever. Tara eventually falls in love with Ved and goes to find Ved after 4 years, and helps him to find his true story where he belongs."
    },
    {
      name: "La La Land",
      director: "Damien Chazelle",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      release: "November 29, 2016",
      story:
        "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
    }
  ],

  scifi: [
    {
      name: "Tenet",
      director: "Christopher Nolan",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      release: "August 22, 2020",
      story:
        "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time."
    },
    {
      name: "Matrix Series",
      director: " Lana Wachowski, Lilly Wachowski",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg",
      release: "March 30, 1999",
      story:
        "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."
    },
    {
      name: "Blade Runner 2049",
      director: "Denis Villeneuve",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      release: "October 4, 2017",
      story:
        "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years."
    }
  ],

  crime: [
    {
      name: "Godfather Series",
      director: "Francis Ford Coppola",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release: "March 14, 1972",
      story:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.."
    },
    {
      name: "Joker",
      director: "Todd Philips",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      release: "October 2, 2019",
      story:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."
    },
    {
      name: "Seven",
      director: "David Fincher",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6yoghtyTpznpBik8EngEmJskVUO.jpg",
      release: "September 22, 1995",
      story:
        "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the seven deadly sins in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case."
    }
  ]
};

export default movieDatabase;
