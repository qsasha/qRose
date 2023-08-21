# qRose

A simple discord bot writed in nodejs

WORKING IN 2023

![](https://cdn.discordapp.com/attachments/1142847161487335535/1143185682274201772/image.png)


## Authors

- [@qsasha](https://www.github.com/qsasha)


## Installation

#### Install Nodejs



![nodejs](https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fcontent%2Fimages%2F2022%2F07%2F1200px-Node.js_logo.svg.png&tbnid=1iRyuBnkLXqRAM&vet=12ahUKEwjWkdjh9-2AAxVKhqQKHSCRBNkQMygAegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fintroduction-to-nodejs%2F&docid=4E7DuTFk9IbnFM&w=1200&h=734&q=nodejs%20download&ved=2ahUKEwjWkdjh9-2AAxVKhqQKHSCRBNkQMygAegQIARBQ)

NOTE: if you don't have nodejs installed in your pc, install it [here](https://nodejs.org)

## Download folder

Go on a terminal and write :

```
git clone https://github.com/qsasha/qRose.git
cd qRose
```
or download by clicking on CODE at the top and then DOWNLOAD ZIP

## Download packages

```bash
  npm install discord, rest
```
    
## Configuration 

create a config.json file and write it until you get something like this:



![config](https://cdn.discordapp.com/attachments/1142847161487335535/1143175668008484914/image.png)

NOTE: serverId is optional, use it only you don't want to register a certain command in all servers where the bot is present but only in certain servers

## Server id Config
If u want to use the server id, u must add some things:

![](https://cdn.discordapp.com/attachments/1142847161487335535/1143176829394497626/image.png)

In slash.js, when you find:

```bash
const data = await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);
```
you have to add `guildId` :

```bash
const data = await rest.put(
	Routes.applicationCommands(clientId, guildId),
	{ body: commands },
);
```

## Usage/Examples

First, u have to setup `package.json` and `package-lock.json`

```javascript
npm init
```
Package-lock.json appears when u download discord library

Then, u have to run `start.js`

```
node slash.js
```
It register the slash commands.

Now, for run the bot, just tipe 

```bash
node index.js
```


## Notes
This is an old reps, so it may have problems.

Also, there aren't many commands, so you can create your own based on mine, by searching for a specific template on github or by contacting me.

You could also check out the [discordjs support site](https://discordjs.guide/) if you want.

(if the bot isn't working check if all the intents are abilitated)
## Support

Discord : qs4sh

Discord Server : https://discord.gg/u4RJ36Vq33

Instagram : prpd3v
