var database = [
    {
        username: 'michael',
        password: 'whatpassword'
    }
];

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

var userNamePrompt = prompt('what\'s your username?');
var passwordPrompt = prompt('what\'s your password?');

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