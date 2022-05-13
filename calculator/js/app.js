let operator = document.querySelectorAll(".operator");
let number = document.querySelectorAll(".number");

// get history from html

function get_history()
{
    let history = document.querySelector("#history_value");
    return history.innerText;
}

// send history to html

function set_history(data)
{
    let history = document.querySelector("#history_value");
    history.innerText = data;
}


// get output from html

function get_output()
{
    let output = document.querySelector("#output_value");
    return output.innerText;
}

// send output to html

function set_output(data)
{
    let output = document.querySelector("#output_value");
    output.innerText = data;
}

// 

    for(let i = 0; i <= number.length; i++)
    {
        number[i].addEventListener("click", function (){
        let data = get_output();
        if(data == "0")
        {
            data = "";
        }
        if(this.id == ".")
        {
            let dot = "";
            let count = 0;
            dot = get_output();
            for(let i = 0; i < dot.length; i++)
            {
                if(dot[i] == ".")
                {
                   count++; 
                }
            }

            if(count > 0)
            {
                data = data ;
            }
            else
            {
                data = data + this.id;
            }
        }
        else{
            data = data + this.id;
        }
        
        set_output(data);
        });
    }


