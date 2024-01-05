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




// declare prompts
var userNamePrompt = prompt('what\'s your username?');
var passwordPrompt = prompt('what\'s your password?');


// sign in function
function signIn(user, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === userNamePrompt &&
            database[i].password === passwordPrompt) {
                console.log(newsfeed);
            } else {
                alert('sorry, wrong username and password');
            }
    }


    // if (user === database[0].username 
    //     && password === database[0].password) {
    //         console.log(newsFeed);
    //         console.log('you are signed in');
    //     } else {
    //         alert('sorry, wrong username and password');
    //     }
}

signIn(userNamePrompt, passwordPrompt);