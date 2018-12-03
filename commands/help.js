exports.run =(client, message) => {
    message.channel.send({embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Hello i'm salty gr1tchy !",
            url: "https://stevelaube.com/wp-content/uploads/2017/03/bigstock-Salt-Shaker-With-Large-And-Sma-110315177.jpg",
            description: "I'm a just a little salty boi here to help u",
            fields: [{
                name: `${client.config.prefix}love @user`,
                value: "Send your love to the one who deserve it"
            },
                {
                    name: `${client.config.prefix}hello`,
                    value: "I greet you."
                },
                {
                    name: `${client.config.prefix}help`,
                    value: "really ? You just litteraly type that one bro."
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© C.P.V."
            }
        }
    });
};