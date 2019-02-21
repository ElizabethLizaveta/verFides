/* jshint esversion: 6 */
const FooterCurrency = {

  switch() {
    const currencyBtn = $('.currency-btn');

    currencyBtn.click((e) => {
      currencyBtn.removeClass('current-currency');
      $(e.currentTarget).addClass('current-currency');
    });
  },
};

export default FooterCurrency;
