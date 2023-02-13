function bestFriend (friends){
    let friend = friends[0];
for(let i = 0; i < friends.length; i++){
    const element = friends[i]
    if(friend.length < element.length){
        friend = element;
    }
    }
    return friend;
}
let friends = ['Shihab', 'Anower', 'Utshab', 'Md Ali', 'Shawon', 'Prosanto', 'Shamul', 'Rokey', 'Sohel']
const friendName = bestFriend(friends)
console.log(friendName)