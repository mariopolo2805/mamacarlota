var tariffs=function(){function a(){$(".tabset-annually").removeClass("active"),$(".tabset-monthly").addClass("active"),$(".save-money-msg").css("visibility","hidden"),$(".monthly").removeClass("hide"),$(".annually").addClass("hide"),t("monthly")}function n(){$(".tabset-annually").addClass("active"),$(".tabset-monthly").removeClass("active"),$(".save-money-msg").css("visibility","initial"),$(".monthly").addClass("hide"),$(".annually").removeClass("hide"),t("annual")}function t(a){$(".tariff a").each(function(){var n=i(this.href,"planSubscription");n?this.href=this.href.replace(/planSubscription=.\w+/,"planSubscription="+a):$(this).attr("href",this.href+a)})}function i(a,n){return(RegExp(n+"=(.+?)(&|$)").exec(a)||[,null])[1]}return{payAnnually:n,payMonthly:a}}();$(document).ready(function(){tariffs.payAnnually()});