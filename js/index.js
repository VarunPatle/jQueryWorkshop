$(document).ready(() => {
    $("input[type='submit']").click(() => {
      var email = $("input[name='email']").val();
      var password = $("input[name='password']").val();
  
      if (password === "" || password.length < 5) {
        $("#passwordValidation").append("not valid password");
      } else if (!email.includes("@")) {
        $("#emailValidation").append("Invalid email");
      } else {
        $.ajax({
          url: "http://localhost:3000/employees",
          data: "GET",
          success: (x) => {
            console.log(x);
            console.log(x.length);
              if (x[0].email === email && x[0].password=== password) {
                 $('#success').append("<h1>Success</h1>");
              }else $('#success').append("<h1>Credentials does not match</h1>")
          },
          error: (e) => {
            alert("error: " + e);
          },
          complete: () => {
            console.log("call is completed...");
          },
        });
      }
    });
  });