$(document).ready(() => {
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
    
    $(".submit").on("click", "button", function() {
        input = document.getElementById("textArea").value;
        starRate = document.querySelector('input[name="rate"]:checked').getAttribute("id");
        comments = document.getElementById("comments").innerHTML;
        let h = "";
        h = `
        <div class="comment">
              <img class="pic" src="/image/login.jpg" alt="user-avatar" />
              <div>
                <div class="name">Ẩn danh</div>
                <div class="starRate">${starRate}</div>
                <div class="say">${input}</div>
              </div>
            </div>
        `;
        $("#comments").html(comments + h);
    })
});