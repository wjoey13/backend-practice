
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('anime_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('anime_info').insert([
        {
         title:'Death Note', 
         genre:'crime, drama',
         discription:'The series centers around a high school student who discovers a supernatural notebook',
         rating:'TV-14',
         cover:'https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg'
        },
        {
          title:'Future Diary' , 
          genre:'action, drama',
          discription:'The plot surrounds a battle royale in which each combatant has a diary with entries from the future.',
          rating: 'TV-MA',
          cover:'https://m.media-amazon.com/images/M/MV5BMjExOWYzMTQtMjYzNi00MmU0LWJiZDctMmNmZmFhNGI5MWI0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
         },
         {
          title:'Pokemon', 
          genre:'action, adventure',
          discription:' The shows central protagonist is Ash Ketchum, a ten-year-old aspiring Pokémon master',
          rating: 'TV-Y ',
          cover:'https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg '
         },
         {
          title:'Dragon Ball' , 
          genre:'action, adventure',
          discription:'The series begins with a young monkey-tailed boy named Goku befriending a teenage girl named Bulma. Together they go on a quest to find the seven Dragon Balls (ドラゴンボール), which summons the dragon Shenron to grant the user one wish. ',
          rating: 'TV-Y7 ',
          cover:'https://m.media-amazon.com/images/M/MV5BMjRlYTYyMDUtOGY5MC00MmFiLTljOTMtM2QzOWZjMWViN2FiL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg '
         },
         {
          title:'Fullmetal Alchemist: Brotherhood', 
          genre:'action, adventure',
          discription:'Two brothers search for a Philosophers Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.',
          rating: 'TV-14 ',
          cover:'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,714,1000_AL_.jpg '
         },
         {
          title:'Attack on Titan', 
          genre:'action, adventure',
          discription:'After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
          rating: 'TV-14',
          cover:'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg'
         },
         {
          title:'Naruto Shippūden', 
          genre:'action, adventure',
          discription:'Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.',
          rating: 'TV-14 ',
          cover:'https://m.media-amazon.com/images/M/MV5BYWFkM2M0M2ItZWY3Yy00NmIzLWFhOGYtODU0N2FhZmNlNmRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_.jpg'
         },
         {
          title:'Dragon Ball Z', 
          genre:'action, adventure',
          discription:'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.',
          rating: 'TV-PG ',
          cover:'https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
         },
         {
          title:'Sword Art Online', 
          genre:'action, adventure',
          discription:'In the year 2022, thousands of people get trapped in a new virtual MMORPG and the lone wolf player, Kirito, works to escape.',
          rating: 'TV-14 ',
          cover:'https://m.media-amazon.com/images/M/MV5BNTIzMzkzMzEtMjU5OC00NTUzLTkxOGItMGU1NTdjZTE0YjE1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
         },
         {
          title:'Fairy Tail', 
          genre:'action, adventure',
          discription:'Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.',
          rating: 'TV-14 ',
          cover:'https://m.media-amazon.com/images/M/MV5BMzZjNmRhNWQtNTAyYy00Yjk2LWE0NzUtMmYyNTU0YTE5NjJiXkEyXkFqcGdeQXVyNjI4OTE5OTM@._V1_.jpg'
         }
      ]);
    });
};
