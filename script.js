function formcheck() {
    var fields = $(".ss-item-required")
      .find("select, textarea, input")
      .serializeArray();
  
    $.each(fields, function (i, field) {
      if (!field.value) alert(field.name + " is required");
    });
    console.log(fields);
  }