function Test1()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("http://delaplex.cloudapp.net:8086/tickets.php");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Selects the 1 item of the 'selectTopicId' combo box.
  Aliases.browser.pageTickets.formTicketsearchform.selectTopicId.ClickItem(1);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTickets.Wait();
  //Checks whether the 'Enabled' property of the Aliases.browser.pageTickets.formTicketsearchform.textboxKeywords object equals True.
  aqObject.CheckProperty(Aliases.browser.pageTickets.formTicketsearchform.textboxKeywords, "Enabled", cmpEqual, true);
  //Checks whether the 'value' property of the Aliases.browser.pageTickets.formTicketsearchform.submitbuttonSearch object equals 'Search'.
  aqObject.CheckProperty(Aliases.browser.pageTickets.formTicketsearchform.submitbuttonSearch, "value", cmpEqual, "Search");
  //Clicks the 'textboxKeywords' control.
  Aliases.browser.pageTickets.formTicketsearchform.textboxKeywords.Click();
  //Clicks the 'textboxKeywords' control.
  Aliases.browser.pageTickets.formTicketsearchform.textboxKeywords.Click();
  //Sets the text 'MS Office' in the 'textboxKeywords' text editor.
  Aliases.browser.pageTickets.formTicketsearchform.textboxKeywords.SetText("MS Office");
  //Clicks the 'submitbuttonSearch' button.
  Aliases.browser.pageTickets.formTicketsearchform.submitbuttonSearch.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTickets.Wait();
  //Drags the 'cell3' object.
  Aliases.browser.pageTickets.cell3.Drag(79, 11, -58, -5);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTickets.link562346 object equals '562346'.
  aqObject.CheckProperty(Aliases.browser.pageTickets.link562346, "contentText", cmpEqual, "562346");
  //Drags the 'cell2' object.
  Aliases.browser.pageTickets.cell2.Drag(73, 16, -67, -5);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTickets.cell2 object equals '11/11/21'.
  aqObject.CheckProperty(Aliases.browser.pageTickets.cell2, "contentText", cmpEqual, "11/11/21");
  //Drags the 'cell4' object.
  Aliases.browser.pageTickets.cell4.Drag(65, 15, -59, -7);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTickets.cell4 object equals 'Open'.
  aqObject.CheckProperty(Aliases.browser.pageTickets.cell4, "contentText", cmpEqual, "Open");
  //Drags the 'cell' object.
  Aliases.browser.pageTickets.cell.Drag(157, 13, -149, -5);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTickets.panelMsOfficeInstallation object equals 'MS Office installation'.
  aqObject.CheckProperty(Aliases.browser.pageTickets.panelMsOfficeInstallation, "contentText", cmpEqual, "MS Office installation");
  //Drags the 'cell5' object.
  Aliases.browser.pageTickets.cell5.Drag(115, 12, -109, -2);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTickets.textnodeInternalSupport object equals 'Internal Support'.
  aqObject.CheckProperty(Aliases.browser.pageTickets.textnodeInternalSupport, "contentText", cmpEqual, "Internal Support");
}