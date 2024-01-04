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
    if (user === databse[0].username && 
        password === databse[0].password) {
            console.log(newsFeed);
        } else {
            alert('sorry, wrong username and password');
        }
}