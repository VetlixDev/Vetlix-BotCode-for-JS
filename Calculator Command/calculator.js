client.on('message', async(message) => {
    if(message.content === 'js!calculator') {
        await Calculator({
            message: message,
            embed: {
                title: 'Calculator | JS Test Bot | Vetlix',
                color: '#00FFFF',
                timestamp: true,
            },
            disabledQuery: 'Calculator is disabled!',
            invalidQuery: 'The provided equation is invalid!',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
        });
    }
});
