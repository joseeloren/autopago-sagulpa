const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized'] 
});
  const page = await browser.newPage();

  await page.goto('https://www.sagulpa.com/lpa-park');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('#username', 'Jose4589');
  await page.type('#passwd', '###');

  // Wait and click on first result
  const searchResultSelector = '#form_login_fieldset > div.col-xs-12.ajuste_top_30.sin-padding-right.sin-padding-left > button';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    '#form_usuario_fieldset > div:nth-child(2) > p'
  );
  const fullTitle = await textSelector.evaluate(el => el.textContent);

  // Print the full title
  console.log('El saldo de la cuenta es "%s".', fullTitle);

  //#form_usuario_fieldset > div.form-group.col-xs-12.col-sm-12.col-md-4 > div.btn-group.bootstrap-select.form-control > button
  const matriculaSelector = '#form_usuario_fieldset > div.form-group.col-xs-12.col-sm-12.col-md-4 > div.btn-group.bootstrap-select.form-control > button > span.filter-option.pull-left';
  await page.waitForSelector(matriculaSelector);
  await page.click(matriculaSelector);
  //#form_usuario_fieldset > div.form-group.col-xs-12.col-sm-12.col-md-4 > div.btn-group.bootstrap-select.form-control.open > div > ul > li > a
  const matriculaSelector2 = '#form_usuario_fieldset > div.form-group.col-xs-12.col-sm-12.col-md-4 > div.btn-group.bootstrap-select.form-control.open > div > ul > li > a';
  await page.waitForSelector(matriculaSelector2);
  await page.click(matriculaSelector2);
  //await page.$eval(matriculaSelector, el => e.setAttribute('title','0657FXM'));

  //#form_usuario_fieldset > div:nth-child(4) > div:nth-child(2) > label:nth-child(1)
  const zonaAzulSelector = '#tipo_zona1';
  await page.waitForSelector(zonaAzulSelector);
  await page.click(zonaAzulSelector);
  //body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button
  const mensajeSelector = 'body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button';
  await page.waitForSelector(mensajeSelector);
  await page.click(mensajeSelector);

  
  await page.select('#streetId', '128');
  
  const obtenerTicketSelector = '#form_usuario_fieldset > div.col-xs-12.ajuste_top_20.sin-padding-left > button';
  await page.waitForSelector(obtenerTicketSelector);
  await page.click(obtenerTicketSelector, {delay:1000});
  await page.$eval(obtenerTicketSelector, element =>
    element.click()
  );
  /*
  const pagarSelector = '#btn_submit'
  await page.waitForSelector(pagarSelector);
  await page.click(pagarSelector, {delay:1000});
  */
  //wait browser.close();
})();