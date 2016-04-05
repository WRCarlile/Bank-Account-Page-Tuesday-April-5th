// business logic
function bankAccount(accountName,initialDeposit){
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
}

function subtract(deposit2, withdrawl1) {
  this.deposit2 = deposit2;
  this.withdrawl1 = withdrawl1;
}

bankAccount.prototype.withDrawl = function(){
  return this.initialDeposit - this.withdrawl1;
};
bankAccount.prototype.dePosit = function(){
  return this.initialDeposit + this.deposit2
}
  // body...

// end business logic


// user logic
$(document).ready(function() {

  $(".banksy").submit(function(event) {
     event.preventDefault();

    var accountName =  $("input#name").val();
    var initialDeposit = parseInt($("input#initDeposit").val());
    var newAccount = new bankAccount(accountName,initialDeposit);

    console.log(newAccount);
        $("#action2").click(function(event) {
          event.preventDefault();
          var deposit2 = parseInt($("input#deposit").val());
          var withdrawl1 = parseInt($("input#withdrawl").val());
          console.log(newAccount);

          var total = new subtract(deposit2, withdrawl1);
          console.log(total);
        });
  });
});
