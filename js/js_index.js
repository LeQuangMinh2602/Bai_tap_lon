$(document).ready(() => {
    let current=0;
    let num = $(".slider > div").length;
    let h = "";
    let log = $(".btnLogin").innerText;

    let showSlider= (current)=> {
        $(".slider > div").fadeOut("slow");
        $(".slider > div").eq(current).fadeIn("slow");
    }

    $(".buttons button.digit").click(function(){
        let idx=parseInt($(this).text());
        current=idx-1;
        showSlider(current); 
    });
    
    $(".next").click(()=>{
        current++;
        if(current ===num)
            current=0;
        showSlider(current);
        
        clearInterval(timer,100);
        
    });
    
    $(".prev").click(()=>{
        current--;
        if(current < 0)
            current=num - 1;
        showSlider(current);
        
        clearInterval(timer,100);
        
    });

    $(window).scroll(function stick(){
        if($(this).scrollTop())
        {
            $("header").addClass("sticky")
        }
        else
        {
            $("header").removeClass("sticky")
        }
    })

    let timer =null;
    let runSlider= (duration) => {
        setInterval(()=>{
            $(".next").click();
        },duration)
    }

    runSlider(5000);

    $(".slider").height($(".slider img").height());
});