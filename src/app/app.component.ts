import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  textButton = ['Pick this..', 'Or pick that!'];
  index = [0,1];
  pair = [
    {
      "poster_path": "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
      "adult": false,
      "overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
      "release_date": "2017-03-16",
      "genre_ids": [
        10402,
        10751,
        14,
        10749
      ],
      "id": 321612,
      "original_title": "Beauty and the Beast",
      "original_language": "en",
      "title": "Beauty and the Beast",
      "backdrop_path": "/7QshG75xKCmClghQDU1ta2BTaja.jpg",
      "popularity": 150.703083,
      "vote_count": 2709,
      "video": false,
      "vote_average": 6.8
    },
    {
      "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      "adult": false,
      "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      "release_date": "2017-04-24",
      "genre_ids": [
        12,
        28,
        35,
        878
      ],
      "id": 283995,
      "original_title": "Guardians of the Galaxy Vol. 2",
      "original_language": "en",
      "title": "Guardians of the Galaxy Vol. 2",
      "backdrop_path": "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
      "popularity": 93.129598,
      "vote_count": 1836,
      "video": false,
      "vote_average": 7.6
    },
    {
      "poster_path": "/ewVHnq4lUiovxBCu64qxq5bT2lu.jpg",
      "adult": false,
      "overview": "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship Covenant discovers what they think is an uncharted paradise, but is actually a dark, dangerous world — whose sole inhabitant is the “synthetic” David, survivor of the doomed Prometheus expedition.",
      "release_date": "2017-05-09",
      "genre_ids": [
        53,
        27,
        878
      ],
      "id": 126889,
      "original_title": "Alien: Covenant",
      "original_language": "en",
      "title": "Alien: Covenant",
      "backdrop_path": "/kMU8trT43p5LFoJ4plIySMOsZ1T.jpg",
      "popularity": 88.444074,
      "vote_count": 662,
      "video": false,
      "vote_average": 6
    },
    {
      "poster_path": "/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
      "adult": false,
      "overview": "Captain Jack Sparrow is pursued by an old rival, Captain Salazar, who along with his crew of ghost pirates has escaped from the Devil's Triangle, and is determined to kill every pirate at sea. Jack seeks the Trident of Poseidon, a powerful artifact that grants its possessor total control over the seas, in order to defeat Salazar.",
      "release_date": "2017-05-23",
      "genre_ids": [
        28,
        12,
        35,
        14
      ],
      "id": 166426,
      "original_title": "Pirates of the Caribbean: Dead Men Tell No Tales",
      "original_language": "en",
      "title": "Pirates of the Caribbean: Dead Men Tell No Tales",
      "backdrop_path": "/3DVKG54lqYbdh8RNylXeCf4MBPw.jpg",
      "popularity": 84.192016,
      "vote_count": 195,
      "video": false,
      "vote_average": 6
    },
    {
      "poster_path": "/9EXnebqbb7dOhONLPV9Tg2oh2KD.jpg",
      "adult": false,
      "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
      "release_date": "2017-02-28",
      "genre_ids": [
        28,
        18,
        878
      ],
      "id": 263115,
      "original_title": "Logan",
      "original_language": "en",
      "title": "Logan",
      "backdrop_path": "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
      "popularity": 82.431326,
      "vote_count": 3326,
      "video": false,
      "vote_average": 7.5
    },
    {
      "poster_path": "/tkt9xR1kNX5R9rCebASKck44si2.jpg",
      "adult": false,
      "overview": "Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple.",
      "release_date": "2003-07-09",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 22,
      "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
      "original_language": "en",
      "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
      "backdrop_path": "/fQZQYW9Hrg8TpYZH4KgbRptkcCN.jpg",
      "popularity": 66.914047,
      "vote_count": 5549,
      "video": false,
      "vote_average": 7.4
    },
    {
      "poster_path": "/eSVtBB2PVFbQiFWC7CQi3EjIZnn.jpg",
      "adult": false,
      "overview": "A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition.",
      "release_date": "2016-11-23",
      "genre_ids": [
        16,
        35,
        18,
        10751,
        10402
      ],
      "id": 335797,
      "original_title": "Sing",
      "original_language": "en",
      "title": "Sing",
      "backdrop_path": "/usJKCEMXV3tECgIJj8ZTEndmY2E.jpg",
      "popularity": 47.096593,
      "vote_count": 1569,
      "video": false,
      "vote_average": 6.8
    },
    {
      "poster_path": "/iNpz2DgTsTMPaDRZq2tnbqjL2vF.jpg",
      "adult": false,
      "overview": "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
      "release_date": "2017-04-12",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 337339,
      "original_title": "The Fate of the Furious",
      "original_language": "en",
      "title": "The Fate of the Furious",
      "backdrop_path": "/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg",
      "popularity": 40.070773,
      "vote_count": 2044,
      "video": false,
      "vote_average": 6.7
    },
    {
      "poster_path": "/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg",
      "adult": false,
      "overview": "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
      "release_date": "2017-02-24",
      "genre_ids": [
        9648,
        53,
        27
      ],
      "id": 419430,
      "original_title": "Get Out",
      "original_language": "en",
      "title": "Get Out",
      "backdrop_path": "/Ae58bf7Yj6OPzwKerPgXSnxCJdh.jpg",
      "popularity": 31.896741,
      "vote_count": 1258,
      "video": false,
      "vote_average": 7.1
    },
    {
      "poster_path": "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
      "adult": false,
      "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
      "release_date": "2014-07-30",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 118340,
      "original_title": "Guardians of the Galaxy",
      "original_language": "en",
      "title": "Guardians of the Galaxy",
      "backdrop_path": "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
      "popularity": 31.663421,
      "vote_count": 7672,
      "video": false,
      "vote_average": 7.9
    },
    {
      "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      "adult": false,
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "release_date": "2014-11-05",
      "genre_ids": [
        12,
        18,
        878
      ],
      "id": 157336,
      "original_title": "Interstellar",
      "original_language": "en",
      "title": "Interstellar",
      "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "popularity": 30.010652,
      "vote_count": 8848,
      "video": false,
      "vote_average": 8
    },
    {
      "poster_path": "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      "adult": false,
      "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      "release_date": "2014-10-22",
      "genre_ids": [
        28,
        53
      ],
      "id": 245891,
      "original_title": "John Wick",
      "original_language": "en",
      "title": "John Wick",
      "backdrop_path": "/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg",
      "popularity": 29.145286,
      "vote_count": 4142,
      "video": false,
      "vote_average": 6.9
    },
    {
      "poster_path": "/unPB1iyEeTBcKiLg8W083rlViFH.jpg",
      "adult": false,
      "overview": "A story about how a new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a wildly imaginative 7 year old named Tim.",
      "release_date": "2017-03-23",
      "genre_ids": [
        16,
        35,
        10751
      ],
      "id": 295693,
      "original_title": "The Boss Baby",
      "original_language": "en",
      "title": "The Boss Baby",
      "backdrop_path": "/frlfy7RFqx5J4jrcMo25PqyasL3.jpg",
      "popularity": 28.281873,
      "vote_count": 1274,
      "video": false,
      "vote_average": 5.7
    },
    {
      "poster_path": "/yNsdyNbQqaKN0TQxkHMws2KLTJ6.jpg",
      "adult": false,
      "overview": "Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
      "release_date": "2017-01-13",
      "genre_ids": [
        28,
        12,
        80
      ],
      "id": 47971,
      "original_title": "xXx: Return of Xander Cage",
      "original_language": "en",
      "title": "xXx: Return of Xander Cage",
      "backdrop_path": "/zv4acOMTPoplVLKo4FaoqAseSDx.jpg",
      "popularity": 28.254602,
      "vote_count": 1004,
      "video": false,
      "vote_average": 5.4
    },
    {
      "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "adult": false,
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      "release_date": "2015-05-13",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 76341,
      "original_title": "Mad Max: Fury Road",
      "original_language": "en",
      "title": "Mad Max: Fury Road",
      "backdrop_path": "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
      "popularity": 28.034027,
      "vote_count": 7996,
      "video": false,
      "vote_average": 7.2
    },
    {
      "poster_path": "/waFr5RVKaQ9dzOt3nQuIVB1FiPu.jpg",
      "adult": false,
      "overview": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.",
      "release_date": "2006-06-20",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 58,
      "original_title": "Pirates of the Caribbean: Dead Man's Chest",
      "original_language": "en",
      "title": "Pirates of the Caribbean: Dead Man's Chest",
      "backdrop_path": "/hdHgIcljPHli4xaJGt0INz8Gn3J.jpg",
      "popularity": 26.527193,
      "vote_count": 4174,
      "video": false,
      "vote_average": 6.9
    },
    {
      "poster_path": "/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg",
      "adult": false,
      "overview": "Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
      "release_date": "2016-11-15",
      "genre_ids": [
        27,
        53
      ],
      "id": 381288,
      "original_title": "Split",
      "original_language": "en",
      "title": "Split",
      "backdrop_path": "/4G6FNNLSIVrwSRZyFs91hQ3lZtD.jpg",
      "popularity": 26.46721,
      "vote_count": 2652,
      "video": false,
      "vote_average": 6.8
    },
    {
      "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      "adult": false,
      "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      "release_date": "2015-06-09",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 135397,
      "original_title": "Jurassic World",
      "original_language": "en",
      "title": "Jurassic World",
      "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
      "popularity": 23.321714,
      "vote_count": 7286,
      "video": false,
      "vote_average": 6.5
    },
    {
      "poster_path": "/hm0Z5tpRlSzPO97U5e2Q32Y0Xrb.jpg",
      "adult": false,
      "overview": "European mercenaries searching for black powder become embroiled in the defense of the Great Wall of China against a horde of monstrous creatures.",
      "release_date": "2016-12-16",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 311324,
      "original_title": "The Great Wall",
      "original_language": "en",
      "title": "The Great Wall",
      "backdrop_path": "/rym1ecQJVj1NhZnigRePtiusorF.jpg",
      "popularity": 21.992419,
      "vote_count": 794,
      "video": false,
      "vote_average": 5.9
    },
    {
      "poster_path": "/wNUDAq5OUMOtxMlz64YaCp7gZma.jpg",
      "adult": false,
      "overview": "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
      "release_date": "2011-05-14",
      "genre_ids": [
        12,
        28,
        14
      ],
      "id": 1865,
      "original_title": "Pirates of the Caribbean: On Stranger Tides",
      "original_language": "en",
      "title": "Pirates of the Caribbean: On Stranger Tides",
      "backdrop_path": "/l7zANdjgTvYqwZUx76Vk0EKpCH5.jpg",
      "popularity": 21.482763,
      "vote_count": 4019,
      "video": false,
      "vote_average": 6.4
    }
  ];
  movies = [];
  chooseMovie(movie){
    this.movies.push(movie);
    this.index[0] += 2;
    this.index[1] += 2;
  }
}
