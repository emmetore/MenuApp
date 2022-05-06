/*

Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.

*/



//RANDOM WIFI UserName and PASSWORD GENERATOR
/* they will see the prompt with the following options. If they choose create new username, they will be prompted 'create new username? 1. yes or 2. no'.

If they choose yes, the code will return a random username from a combination of a thing from a usernameThingArray and a number from the usernameNumberArray. 
and a random password, created from a combination of a thing from a passwordsymbolArray and a number from the usernameNumberArray. 


/* 
0. Exit
1. Create User info
2. View user info
3. Delete User Info

They'll have the option to view and delete their random user info.





*/
//USERNAME GENERATOR
//to start with, I want to have generate a random username using a combination of a random "thing", and a random number.
const usernameThingArray = ["donkey", "monkey", "chair", "hat", "bed", "couch", "muffin", "cake", "bingo", "flavor"];
const randomThing = usernameThingArray[Math.floor(Math.random() * usernameThingArray.length)];
const usernameRandomNumber = Math.floor(Math.random() * 100);

const randomUsername = randomThing + usernameRandomNumber;
//I want to combine the random thing and random number here.

const usernameHolderArray = [];
//I want to store my username somewhere so i can reference and view it later.


// /************************** */
//PASSWORD GENERATOR
const passwordRandomNumber = Math.floor(Math.random() * 100);
const passwordSymbolArray = ["!!", "?", "*&", "%$", "##", "&*$", "%*&^", "*&#@^^&&", "&*%$###"];
const passwordRandomSymbol = passwordSymbolArray[Math.floor(Math.random() * passwordSymbolArray.length)];

//I'm doing the same thing here with the password, generating a random number and symbol and smashing them together
const randomPassword = passwordRandomNumber + passwordRandomSymbol;

const passwordHolderArray = [];//And I'll need somewhere to store my password when I generate one.

console.log(`Your password is ${randomPassword} , and your username is ${randomUsername}`);

// /************************** */




class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    generateUsername() {
        return randomUsername;
    }
    //I want to be able to access the random Username  and Passowrd later
    generatePassword() {
        return randomPassword;

    }

    showUserInfo() {
        return this.username + this.password;
    }

}







class Menu {
    constructor(selectedUsername, selectedPassword) {
        this.selectedUsername = selectedUsername;
        this.selectedPassword = selectedPassword;
    }

    start() {
        let selection = this.showMainMenu();
        while (selection != 0) {
            switch (selection) { //we're showing our selection options and then calling a function depending on the user prompt response.
                case '1':
                    this.createUserInfo();
                    break;
                case '2':
                    this.viewUserInfo();
                    break;
                case '3':
                    this.deleteUserInfo();
                default:
                    selection = 0;
            }
            selection = this.showMainMenu();
        }

        alert('Goodbye!');
    }



    showMainMenu() { //this will display the main menu upon start
        return prompt(`
            0. exit
            1. create user info
            2. view user info
            3. delete user info
           
        `);
    }



    createUserInfo() { //Here's where I want to ask the user if they'd like to create a random username and password.
        let createUserInfo = prompt(`
        Generate random username & password?
        1. yes
        2. no
        `);
        if (createUserInfo === "1") {
            let newUsername = usernameHolderArray.push(randomUsername);
            let newPassword = passwordHolderArray.push(randomPassword);
            alert(`Username and Password Created.`);
            return newUsername + newPassword; //if they select yes, they'll be given a randomly generated user info that we created above the Classes, but they'll have to go elsewhere to view it.

        } else {
            alert("Alright then. Keep your secrets.") //if they select "no", or "2", then they'll get a cheeky message and get sent back to the main menu
        }

    }




    viewUserInfo() { //when they select view user info (2), they'll be shown their random user info
        alert(`Your username is ${usernameHolderArray} and your password is ${passwordHolderArray}.`);
    }




    deleteUserInfo() { //They can delete both username and password simultaneously using splice.
        let deleteUserInfo = prompt(`
        Delete Username & Password?
        1. Yes
        2. No
        `);

        if (deleteUserInfo === "1") {
            usernameHolderArray.splice(0, 1);
            passwordHolderArray.splice(0, 1);
        } else {
            alert("Alright. I'll save your user info for later.")
        }

    }




}


let menu = new Menu();
menu.start();
