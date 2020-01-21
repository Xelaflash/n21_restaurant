(function($) {
  /*= =================================================================
    [ Validate ] */
  const name = $('.validate-input input[name="name"]');
  const email = $('.validate-input input[name="email"]');
  const subject = $('.validate-input input[name="subject"]');
  const message = $('.validate-input textarea[name="message"]');

  $('.validate-form').on('submit', function() {
    let check = true;

    if (
      $(name)
        .val()
        .trim() == ''
    ) {
      showValidate(name);
      check = false;
    }

    if (
      $(subject)
        .val()
        .trim() == ''
    ) {
      showValidate(subject);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if (
      $(message)
        .val()
        .trim() == ''
    ) {
      showValidate(message);
      check = false;
    }

    return check;
  });

  $('.validate-form .input1').each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    const thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    const thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }
})(jQuery);
