class Form{
    constructor(){

        
    }
    display(){
        var title=createElement('h2')
        title.html("Minecraftbeta")
        title.position(130,0)

        var input=createInput("Name")
        var button=createButton('Play')
        var greeting=createElement('h3')

        input.position(130,160)
        button.position(250,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("welcome to beta version fo this game" )
            greeting.position(70,160)

        })
    }
}