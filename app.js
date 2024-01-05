// database array
var database = [
    {
        username: 'michael',
        password: 'whatpassword'
    },
    {
        username: 'avery',
        password: 'pw222'
    },
    {
        username: 'alex',
        password: '123'
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
    },
    {
        username: 'mark',
        timeline: 'thank you javascript'
    },

];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}


// sign in function
function signIn(username, password) {
    // console.log(isUserValid(username, password));

    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert('sorry, wrong username and password');
    }
}

    // declare prompts
    var userNamePrompt = prompt('what\'s your username?');
    var passwordPrompt = prompt('what\'s your password?');


    signIn(userNamePrompt, passwordPrompt);