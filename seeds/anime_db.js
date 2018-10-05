
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('anime_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('anime_info').insert([
        {
         title:'Death Note', 
         genre:'action',
         discription:'The series centers around a high school student who discovers a supernatural notebook',
         rating:9/10
        },
        {
          title:'Future Diary' , 
          genre:'psychological thriller',
          discription:'The plot surrounds a battle royale in which each combatant has a diary with entries from the future.',
          rating: 7.8/10
         },
         {
          title:'Pokemon', 
          genre:'adventure',
          discription:' The shows central protagonist is Ash Ketchum, a ten-year-old aspiring Pokémon master',
          rating: 7.4/10
         },
         {
          title:'Dragon Ball' , 
          genre:'adventure',
          discription:'The series begins with a young monkey-tailed boy named Goku befriending a teenage girl named Bulma. Together they go on a quest to find the seven Dragon Balls (ドラゴンボール), which summons the dragon Shenron to grant the user one wish. ',
          rating: 8.6/10
         },
         {
          title:'Fullmetal Alchemist: Brotherhood', 
          genre:'adventure',
          discription:'Two brothers search for a Philosophers Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.',
          rating: 9/10
         },
         {
          title:'Attack on Titan', 
          genre:'adventure',
          discription:'After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
          rating: 8.8/10
         },
         {
          title:'Naruto Shippūden', 
          genre:'adventure',
          discription:'Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.',
          rating: 8.4/10
         },
         {
          title:'Dragon Ball Z', 
          genre:'adventure',
          discription:'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.',
          rating: 8.7/10
         },
         {
          title:'Sword Art Online', 
          genre:'adventure',
          discription:'In the year 2022, thousands of people get trapped in a new virtual MMORPG and the lone wolf player, Kirito, works to escape.',
          rating: 7.7/10
         },
         {
          title:'Fairy Tail', 
          genre:'adventure',
          discription:'Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.',
          rating: 8.1/10
         }
      ]);
    });
};
