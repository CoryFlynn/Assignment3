$(document).ready(function() {
  $("#tab_bar").show();
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#help_page").hide();
});

$("#dialer").click(function() {
  $("#tab_bar").show();
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#help_page").hide();
});

$("#contact_list").click(function() {
  $("#tab_bar").show();
  $("#content_dialer").hide();
  $("#content_contacts").show();
  $("#content_add").hide();
  $("#help_page").hide();
});

$("#add_contact").click(function() {
  $("#tab_bar").show();
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_add").show();
  $("#help_page").hide();
});

$("#help_b").click(function() {
  $("#tab_bar").show();
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#help_page").show();
});

$("#add_contact").bind('keydown', 'a', f);

/* fancy dialing functions */
$("#dial_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
})

$("#clear").click(function() {
	$("#number_input").val("");
})
