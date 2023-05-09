
// Put your code here
const Favorite = {
    name: "Parapanda",
    nationality : "Kenyan",
    genre :"Messianic Gospels",
    members: 30,
    formed : 2019,
    split : true,
    albums : [
    {
    name: "parapandaz",
    released :2019
    },
    {
    name :"Niokoe",
    released : "2020"
    },
    {
    name : "Nimekuja Baba",
    released : "2021"
    
    
    }
    
    ]
    
    };
    let bandInfo = ` This is the bibiliography of my favorite band ${Favorite.name} a ${Favorite.nationality} ${Favorite.genre} comprise of ${Favorite.members} members formed in the year ${Favorite.formed} and ${Favorite.split}.They have the following albums to their name: ${Favorite.albums[0].name} in the year ${Favorite.albums[1].released};${Favorite.albums[1].name}  in the year ${Favorite.albums[1].released}  ${Favorite.albums[2].name} in the year ${Favorite.albums[2].released} ;  `;
    
    
    // Don't edit the code below here
    
    let para1 = document.createElement('p');
    para1.textContent = bandInfo;
    section.appendChild(para1);
        