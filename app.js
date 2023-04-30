const originalStory = "Once there was a dog who wandered the streets night and day in search of food. One day, he found a big juicy bone and he immediately grabbed it between his mouth and took it home. On his way home, he crossed a river and saw another dog who also had a bone in its mouth. He wanted that bone for himself too. But as he opened his mouth, the bone he was biting fell into the river and sank. That night, he went home hungry.";
let usersInputs = [];
console.log( `Once there was a ${usersInputs[0]} who wandered the streets night and day in search of ${usersInputs[1]}. 
One day, he found a big juicy ${usersInputs[2]} and he immediately grabbed it between his mouth and took it home.
 On his way home, he crossed a river and saw another ${usersInputs[0]} who also had a ${usersInputs[2]} in its mouth.
  He wanted that ${usersInputs[2]} for himself too. But as he opened his mouth,
   the ${usersInputs[2]} he was biting fell into the river and sank. That night, he went home ${usersInputs[3]}.`);

const numberOfQuestions = 4;
let questionArray = ["Enter a subject","Enter a word","Enter an object","Enter an adjective"];
for(let i = numberOfQuestions;i >= 0; i--){
    console.log(i);
}