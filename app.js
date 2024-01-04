// databse array
var database = [
    {
        username: 'michael',
        password: 'whatpassword'
    }
];

// newsFeed array of objects
var newsFeed = [
    {
        username: 'max',
        timeline: 'so tired from learning javascript',
    },
    {
        username: 'mary',
        timeline: 'javascript is the best'
    }
];

// declare prompts
var userNamePrompt = prompt('what\'s your username?');
var passwordPrompt = prompt('what\'s your password?');


// sign in function
function signIn(user, password) {
    if (user === database[0].username && 
        password === database[0].password) {
            console.log(newsFeed);
            console.log('you are signed in');
        } else {
            alert('sorry, wrong username and password');
        }
}

signIn(userNamePrompt, passwordPrompt);