

document.getElementById("startGame").addEventListener('click', function(){
    var outputText = document.getElementById("outputText")
    var options = document.getElementById("options")
    var enter =  document.getElementById("enter")
    var entry = document.getElementById('entry')
    var move = document.getElementById("userMove")
    document.getElementById('startGame').style.display = "none"
    move.style.display = 'block'
    entry.style.display = 'none'
    
    var userName = entry.value
    entry.value=''
    

    var userHealthPoints = 15
    var computerHealthPoints = 15
    var armor = 0
    var strength = 0
    var computerArmor = 1 
    var computerStrength = 7
    var outcome = false

    const fighterName = ["David", "Leon", "Thaddeus"]
    const computerWeapons = ["Sword", "Greatsword", "Axe"]
    const moves = ['q', 'b', 's']


    
    userWeapon = parseInt(prompt("what weapon will you be using? 1. sword and Shield 2. Polearm 3. Axe"))
    console.log("Post user weapon pick")
    while (userWeapon!=1 && userWeapon!=2 && userWeapon!=3) {
        userWeapon = parseInt(prompt("Please make a valid selection of 1, 2, or 3"))
    }
    if (userWeapon == 1){
        outputText.innerHTML += ("<li>Hello Sir " + userName +". You have chosen a Sword and shield! Solid overall choice</li>")
        armor = 3
        strength = 5
    }else if (userWeapon==2){
        outputText.innerHTML += ("<li>Hello Sir " + userName +". You have chosen a Polearm! Great damage but little to no protection</li>")
            armor = 2
            strength = 6
    }else{
        outputText.innerHTML += ("<li>Hello Sir " + userName +". You have chosen a Axe! Lacks maneuverability but offers higher damage!</li>")
            armor = 1
            strength = 7
    }
    console.log("Post nested if else")                           
    outputText.innerHTML += ("<li>Enter a move of q for quick, b for block or s for strong</li>")

    enter.addEventListener("click", function(){
            userMove= move.value
            
            if (userMove!='b' && userMove!= 's' && userMove!='q')
                outputText.innerHTML += ("Enter a valid move\n")
            
            
            computerMove = moves[Math.floor(Math.random()*3)]
            console.log(computerMove)
            console.log(userMove)
            
            if (computerMove == 'q' && userMove == 's')
                    {
                    
                        outputText.innerHTML = ("<li>The computer damaged you!</li>");
                        userHealthPoints -= (strength - computerArmor);
                    }
             if (computerMove =='q' && userMove == 'b')
                    {
                       
                        outputText.innerHTML = ("<li>You damaged the computer</li>");
                        computerHealthPoints -= (computerStrength - armor);
                    }
            if (computerMove == 'b' && userMove=='s')
                    {
                       
                        outputText.innerHTML = ("<li>You damaged the computer!</li>");
                        computerHealthPoints -= (strength - computerArmor);
                    }
            if (computerMove == 'b' && userMove=='q')
                     {
                       
                         outputText.innerHTML = ("<li>The computer damaged you!</li>");
                         userHealthPoints -= (computerStrength - armor);
                     }
            if (computerMove=='s' && userMove=='q')
                    {
                        
                        outputText.innerHTML = ("<li>You damaged the computer!");
                        computerHealthPoints -= (computerStrength - armor);
                    }
            if (computerMove=='s' && userMove=='b')
                    {
                        
                        outputText.innerHTML = ("<li>The computer damaged you!");
                        userHealthPoints -= (strength - computerArmor);
                    }
            if((computerMove =='q' && userMove =='q') || (computerMove =='b' && userMove =='b')|| (computerMove =='s' && userMove =='s') ) 
                    {
                        outputText.innerHTML = ("<li>Neither side takes damage</li>");
                    }
            outputText.innerHTML += ("<li>You are at "+userHealthPoints+". The computer is at" +computerHealthPoints+".")

        if(computerHealthPoints<=0 || userHealthPoints<=0){
            if (computerHealthPoints<=0)
                localStorage.winner = userName
            else
                localStorage.winner = "computer"
            window.location.assign("tournamentEnd.html")

        }
    })

            
    
})

