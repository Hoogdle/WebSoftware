const pokeballs = []
const selected = []
const list = document.getElementById("pokeball")

// create 50 random numbers
function make_random(){
    for(let i =0; i<50; ++i){
        // 0~7 => ball
        // 8~9 => monster
        // 10 => selected ball
        rand = Math.floor(Math.random() * 10); // 0~9 rand
        pokeballs.push(rand)
    }
}

// make 50 child with random numbers
function make_child(){
    for(let i=0; i<50; ++i){

        // ball
        if(pokeballs[i]>=0 && pokeballs[i]<=7){
            let pokeball_a = document.createElement("a");
            let pokeball = document.createElement("img")
            pokeball.src = "res/pokeball.png"
            pokeball.style.width = "70px"
            pokeball.style.height = "70px"
            pokeball.style.marginRight = "20px"

            //add hover
            pokeball.onmouseover = function(){
                this.style.backgroundColor = "rgb(0,0,0,0.5)"
                this.style.borderRadius = "25px"
            }
            
            pokeball.onmouseout = function(){
                this.style.backgroundColor = "transparent"
            }

            pokeball_a.addEventListener("click", function tmp () {
                select_ball(i)
                this.removeEventListener("click",tmp)
            });
            
            pokeball_a.appendChild(pokeball)

            list.appendChild(pokeball_a)
        } 
        // monster
        else if(pokeballs[i]>=8 && pokeballs[i]<=9){
            let pokeball_a = document.createElement("a");
            let pokeball = document.createElement("img")
            pokeball.src = "res/pokemon.png"
            pokeball.style.width = "70px"
            pokeball.style.height = "70px"
            pokeball.style.marginRight = "20px"

            //add hover
            pokeball.onmouseover = function(){
                this.style.backgroundColor = "rgb(0,0,0,0.5)"
                this.style.borderRadius = "25px"
            }
            pokeball.onmouseout = function(){
                this.style.backgroundColor = "transparent"
            }

            pokeball_a.addEventListener("click", () => {
                select_monster()
            });
            pokeball_a.appendChild(pokeball)

            list.appendChild(pokeball_a)
        }
    }
}


// when user choosed ball, this function opt.
function select_ball(i){

    // Gotcha를 통해서 포켓몬으로 이미 변한 경우, 이 함수를 통과하지 못하도록 예외처리.
    if(pokeballs[i]>=8 && pokeballs[i]<=9) return
    // alert("hihi")
    selected.push(i)
    list.childNodes[i].childNodes[0].style.filter = "brightness(50%)"
    
    list.childNodes[i].addEventListener("click", function tmp(){
        select_selectedBall(i)
        this.removeEventListener("click",tmp)
    });
}

// when user choosed monster, this function opt.
function select_monster(){
    alert("모부기 : Choose the ball!")
}

// when user choosed selected_ball, this function opt.
function select_selectedBall(i){
    list.childNodes[i].childNodes[0].style.filter = "brightness(100%)"
    list.childNodes[i].addEventListener("click", function tmp(){
        select_ball(i)
        this.removeEventListener("click",tmp)
    });
    const del_index = selected.indexOf(i)
    if(del_index > -1){
        selected.splice(del_index,1)
    }
}

// when user choosed Gotcha! button, this function opt.
function awake_monster(){
    const size = selected.length
    selected.sort(function(a,b){
        return a-b;
    })
    let result = "You have opened the "
    for(let i=0; i<size; ++i){
        result += selected[i]+1
        if(i!=size-1){
            result += ", "
        }
    }
    result += " ball(s)."

    alert(result)
    // alert(size)
    for(let i =0; i<size ; ++i){
        const index = selected.pop()
        list.childNodes[index].childNodes[0].src = "res/pokemon.png"
        list.childNodes[index].childNodes[0].style.filter = "brightness(100%)"
        list.childNodes[index].addEventListener("click", () => {
            select_monster()
        });
        pokeballs[index] = 8
    }
}

function logOut(){
    window.location.href = "Login.html"
}


// start js
make_random()
make_child()
