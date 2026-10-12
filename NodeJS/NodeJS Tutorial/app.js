/* const helper = require("./helper");

console.log(helper.user("Henry"));
console.log(helper.id(123));
console.log(helper.email("Henry@gmail.com"));
 */

//! Event Emitters

/* const events = require("events");
const myEmitter = new events.EventEmitter();

myEmitter.on("test", function (data) {
  console.log(`${data}`);
});

myEmitter.emit("test", "Hello Lady!"); */

//! util - inherit events to custom event emitters

/* const events = require("events");
const util = require("util");

const teams = function (name) {
  this.name = name;
};

util.inherits(teams, events.EventEmitter);

const Arsenal = new teams("Arsenal");
const Juventus = new teams("Juventus");
const Galatasaray = new teams("Galatasaray");

const teamArr = [Arsenal, Juventus, Galatasaray];

teamArr.forEach((team) => {
  team.on("nation", function (nation) {
    console.log(team.name + " is " + nation + "football club");
  });
});

Arsenal("nation", "English");
Juventus("nation", "Italian");
Galatasaray("nation", "Turkey");
 */

//! Read and Write Files

//? Synchronous methods

/* 
const fs = require("fs");
const text = fs.readFileSync("readme.txt", "utf-8");
console.log(text);
fs.writeFileSync("write.txt", text);
 */

//? Asynchronous methods

/* const { error } = require("console");
const fs = require("fs");
fs.readFile("readme.txt", "utf-8", function (err, data) {
  fs.writeFile("write.txt", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
}); */

//? Delete Files

/* const fs = require("fs");
fs.unlink("write.txt", function (err) {
  console.log(err);
}); */

//? create and remove dir

/* const fs = require("fs"); */

//* Sync

/* fs.mkdirSync("my-folder");
fs.rmdirSync("my-folder");
 */

//* Async

/* fs.mkdir("my-folder", () => {
  fs.readFile("readme.txt", "utf-8", (err, data) => {
    fs.writeFile("./my-folder/write.txt", data, (err) => {
      console.log(err);
    });
  });
});

fs.unlink("./my-folder/write.txt", (err) => {
  console.log(err);
});

fs.rmdir("my-folder", (err) => {
  console.log(err);
}); */
