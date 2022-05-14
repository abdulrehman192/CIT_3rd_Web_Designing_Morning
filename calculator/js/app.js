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

    function _clear()
    {
        set_history("0");
        set_output("0");
    }

    function backspace()
    {
        let data  = get_output();
        if(data != "0")
        {
        if(data.length > 0)
        {
            data = data.substr(0, data.length - 1);
            set_output(data);
        }
        if(data.length == 0)
        {
            set_output("0");
        }
    }
    }

// 

    for(let i = 0; i < number.length; i++)
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

            if(dot == "0")
            {
                data = "0.";
            }
        }
        else{
            data = data + this.id;
        }
        set_output(data);

        if(this.id == "00")
        {
            let a = get_output();
            if(a == "0" || a == "00")
            {
                set_output("0");
            }
        }
        
        
        });
    }

    let history = "";
    // operator clicks

    for(let i = 0; i < operator.length; i++)
    {
        operator[i].addEventListener("click", function (){
            

            //arithmatic operations
            if(this.id != "clear")
            {
                let output = get_output();
                history += output + this.id;
                set_history(history);
                set_output("0");

            }

            if(this.id == "=")
            {
                history = history.substr(0, history.length -1)
                let result = eval(history);
                set_output(result);
                result = "0";
                history = "";
                output = "";
            }

            if(this.id == "clear")
            {
                _clear();
            }

            if(this.id == "backspace")
            {
                backspace();
            }
 
        });
    }


