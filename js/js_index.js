$(document).ready(() => {
    let num = $(".slider > div").length;
    let h = "";
    let log = $(".btnLogin").innerText;
    for (let i = 0; i < num; i++)
        h += `
            <button class="digit">${i + 1}</button>
        `;
        $(".buttons").html(h);
    $(".slider").height($(".slider img").height());

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

    $("#menubtn").on("click", function() {
        $(".menu").addClass("active");
        $("#menubtn").addClass("hidden");
    })
    $("#cancelbtn").on("click", function() {
        $(".menu").removeClass("active");
        $("#menubtn").removeClass("hidden")
    })
});