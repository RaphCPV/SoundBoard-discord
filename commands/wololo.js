exports.run = (client, message) => {
    let role = message.guild.roles.get("413492172550045718");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    message.channel.send("```css\nWOLOLOOOOO```").catch(console.error);
    let role1 = message.guild.roles.find("name", "El patron");

    if(message.member.roles.has(role.id)) {
        role.edit({"name": "Ola"}).catch(e => {
            return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
        console.log(`Yay, the author of the message has the role!`);
    } else {
        console.log(`Nope, noppers, nadda.`);
    }
};
