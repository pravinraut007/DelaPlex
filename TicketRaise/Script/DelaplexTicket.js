var Base = require("Base");
var ticketDesc;
let browser = Aliases.browser;
let dashboard = browser.pageTickets;
let textbox = browser.pageLogin.formClientlogin.textboxUsername;
let passwordTextBox = browser.pageLogin.formClientlogin.passwordboxPasswd;
let submitLogin = browser.pageLogin.formClientlogin.submitbuttonSignIn;
let loginPage = browser.pageLogin ;
/*var errorMessage, ticketSubject, ticketCreatedDate, ticketDesc, ticketNumber;
errorMessage = "Access denied";
ticketSubject = "MS Office installation";
ticketCreatedDate = "11/11/21";
ticketNumber = "562346";*/
ticketDesc = "I need to offline\nMS Office\nversion as I need it for\nDolphin Project\n. To create data source in\nTestComplete\ntool.\nI've already tried with\nWPS excel\nsheet for the same purpose. But it doesn't work.";
function TestingClosedBrowser(){
 Base.OpenBrowser;
 CloseBrowser();
}
//TC001:Login Successfully
function LoginPositive()
{
  //Redirect to login window
  LoginBase();
  //Checks whether the 'contentText' property of the dashboard.textnodeNav.linkSupportCenterHome object equals 'Support Center Home'.
  aqObject.CheckProperty(dashboard.textnodeNav.linkSupportCenterHome, "contentText", cmpEqual, "Support Center Home");
  //Checks whether the 'contentText' property of the dashboard.textnodeNav.linkOpenANewTicket object equals 'Open a New Ticket'.
  aqObject.CheckProperty(dashboard.textnodeNav.linkOpenANewTicket, "contentText", cmpEqual, "Open a New Ticket");
  //Checks whether the 'contentText' property of the dashboard.panelPage object equals 'Page:[1]'.
  aqObject.CheckProperty(dashboard.panelPage, "contentText", cmpContains, "Page:");
  //Checks whether the 'contentText' property of the dashboard.linkSignOut object equals 'Sign Out'.
  aqObject.CheckProperty(dashboard.linkSignOut, "contentText", cmpEqual, "Sign Out");
  dashboard.linkSignOut.Click();
  //CloseBrowser
  CloseBrowser();
}
//TC002:Login Failure
function LoginNegative(){
  //Redirect to login window
  BasicLoginBase();
  //Clicks the 'passwordboxPasswd' control.
  passwordTextBox.Click();
  //Sets the text Project.Variables.PasswordIncorrect in the 'passwordboxPasswd' text editor.
  passwordTextBox.SetText(Project.Variables.PasswordIncorrect);
  //Clicks the 'submitbuttonSignIn' button.
  submitLogin.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  loginPage.Wait();
  //Drags the 'panelMsgError' object.
  loginPage.panelMsgError.Drag(33, 12, 103, 4);
  //Clicks the 'panelMsgError' control.
  loginPage.panelMsgError.Click();
  //Checks whether the 'contentText' property of the browser.pageLogin.panelMsgError object equals 'Access denied'.
  aqObject.CheckProperty(loginPage.panelMsgError, "contentText", cmpEqual, Project.Variables.errorMsg);
  //CloseBrowser
  CloseBrowser();
}
//TC003: Logout Successfully
function LogoutDashboard(){
  //Redirect to login window
  LoginBase(); 
  //Clicks the 'linkSignOut' link.
  dashboard.linkSignOut.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  browser.pageDelaplexSupportSystem.Wait();
  //Checks whether the 'contentText' property of the browser.pageDelaplexSupportSystem.linkSignIn object equals 'Sign In'.
  aqObject.CheckProperty(browser.pageDelaplexSupportSystem.linkSignIn, "contentText", cmpEqual, "Sign In");
  //Checks whether the 'WndCaption' property of the browser.BrowserWindow object equals 'delaPlex Support System - Google Chrome'.
  aqObject.CheckProperty(browser.BrowserWindow, "WndCaption", cmpEqual, "delaPlex Support System - Google Chrome");
  //To Confirm Login Dashboard
  browser.pageDelaplexSupportSystem.linkSignIn.Click();
  //Drags the 'textnodeSignIn' object.
  browser.pageDelaplexSupportSystem.textnodeSignIn.Drag(349, 20, 50, -3);
  //Drags the 'panelNotYetRegistered' object.
  browser.pageLogin.formClientlogin.panelNotYetRegistered.Drag(2, 5, 116, 4);
  //Clicks the 'formClientlogin' control.
  browser.pageLogin.formClientlogin.Click();
  //Drags the 'textnodeIMAnAgent' object.
  browser.pageLogin.formClientlogin.textnodeIMAnAgent.Drag(0, 7, 86, 5);
  //Clicks the 'formClientlogin' control.
  browser.pageLogin.formClientlogin.Click();
  //Drags the 'panelIMAnAgent' object.
  browser.pageLogin.formClientlogin.panelIMAnAgent.Drag(186, 9, -83, 1);
  //Clicks the 'formClientlogin' control.
  browser.pageLogin.formClientlogin.Click();
  //Checks whether the 'contentText' property of the browser.pageLogin.formClientlogin.linkSignInHere object equals 'sign in here'.
  aqObject.CheckProperty(browser.pageLogin.formClientlogin.linkSignInHere, "contentText", cmpEqual, "sign in here");
  //CloseBrowser
  CloseBrowser();
}
//TC004: ToVerifyCreatedTicket
function ToVerifyCreatedTicket(){
  //Redirect to login window
  LoginBase();    
  //Checks whether the 'contentText' property of the dashboard.textnodeNav.linkTickets8 object equals 'Tickets (8)'.
  aqObject.CheckProperty(dashboard.textnodeNav.linkTickets8, "contentText", cmpContains, "Tickets");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("http://delaplex.cloudapp.net:8086/tickets.php");
  browser.BrowserWindow.Maximize();
  //Clicks the 'selectTopicId' object.
  dashboard.formTicketsearchform.selectTopicId.Click(79, 11);
  //Clicks the 'textnodeTickets' control.
  dashboard.textnodeTickets.Click();
  //Drags the 'textnodeTickets' object.
  dashboard.textnodeTickets.Drag(90, 18, -69, 0);
  //Checks whether the 'contentText' property of the dashboard.cell object equals 'MS Office installation'.
  aqObject.CheckProperty(dashboard.cell, "contentText", cmpEqual, Project.Variables.ticketSubject);
  //Drags the 'cell2' object.
  dashboard.cell2.Drag(62, 9, -59, 0);
  //Checks whether the 'contentText' property of the dashboard.cell2 object equals '11/11/21'.
  aqObject.CheckProperty(dashboard.cell2, "contentText", cmpEqual, Project.Variables.ticketCreatedDate);
  //Drags the 'cell3' object.
  dashboard.cell3.Drag(76, 13, -51, -1);
  //Checks whether the 'contentText' property of the dashboard.link562346 object equals '562346'.
  aqObject.CheckProperty(dashboard.link562346, "contentText", cmpEqual, Project.Variables.ticketNumber);
  //Drags the 'cell4' object.
  dashboard.cell4.Drag(58, 16, -54, -6);
  //Checks whether the 'contentText' property of the dashboard.cell4 object equals 'Open'.
  aqObject.CheckProperty(dashboard.cell4, "contentText", cmpEqual, "Open");
  //Drags the 'cell5' object.
  dashboard.cell5.Drag(112, 13, -107, 0);
  //Checks whether the 'contentText' property of the dashboard.textnodeInternalSupport object equals 'Internal Support'.
  aqObject.CheckProperty(dashboard.textnodeInternalSupport, "contentText", cmpEqual, "Internal Support");
  //Clicks the 'panelMsOfficeInstallation' control.
  dashboard.panelMsOfficeInstallation.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  dashboard.Wait();
  //Drags the 'cell6' object.
  dashboard.cell6.Drag(2, 11, 37, 0);
  //Drags the 'cell7' object.
  dashboard.cell7.Drag(2, 11, 102, -2);
  //Drags the 'cell8' object.
  dashboard.cell8.Drag(4, 8, 116, 1);
  //Drags the 'cell9' object.
  dashboard.cell9.Drag(3, 14, 168, -1);
  //Drags the 'cell10' object.
  dashboard.cell10.Drag(4, 13, 37, -2);
  //Drags the 'textnodeMsOfficeInstallation' object.
  dashboard.textnodeMsOfficeInstallation.Drag(3, 10, 198, 5);
  //Drags the 'textnodeMsOfficeInstallation2' object.
  dashboard.textnodeMsOfficeInstallation2.Drag(305, 14, -68, 1);
  //Drags the 'time111121132643' object.
  dashboard.time111121132643.Drag(2, 6, 123, 1);
  //Drags the 'panelINeedToOffline' object.
  dashboard.panelINeedToOffline.Drag(0, 11, 504, 22);
  //Clicks the 'panelINeedToOffline' control.
  dashboard.panelINeedToOffline.Click();
  //Checks whether the 'contentText' property of the dashboard.panelINeedToOffline object equals'#'
  aqObject.CheckProperty(dashboard.panelINeedToOffline, "contentText", cmpContains, ticketDesc);
  //Drags the 'time1111211326432' object.
  dashboard.time1111211326432.Drag(2, 9, 111, -3);
  //Checks whether the 'contentText' property of the dashboard.time1111211326432 object equals '11/11/21 13:26:43'.
  aqObject.CheckProperty(dashboard.time1111211326432, "contentText", cmpContains, Project.Variables.ticketCreatedDate);
  //Drags the 'textnodeCreatedBy' object.
  dashboard.textnodeCreatedBy.Drag(29, 14, 67, 1);
  //Drags the 'textnodePravinkumarRaut' object.
  dashboard.textnodePravinkumarRaut.Drag(31, 8, 121, 1);
  //Checks whether the 'contentText' property of the dashboard.textnodePravinkumarRaut object equals 'Pravinkumar Raut'.
  aqObject.CheckProperty(dashboard.textnodePravinkumarRaut, "contentText", cmpEqual, "Pravinkumar Raut");
  //Drags the 'cell11' object.
  dashboard.cell11.Drag(3, 11, 118, -3);
  //Checks whether the 'contentText' property of the dashboard.cell11 object equals 'Pravinkumar Raut'.
  aqObject.CheckProperty(dashboard.cell11, "contentText", cmpEqual, "Pravinkumar Raut");
  //Confirm Logout
  LogoutBase();
}
//TC005: Verify Search
function VerifySearch(){
    //Redirect to login window
    LoginBase();    
    //Selects the 1 item of the 'selectTopicId' combo box.
    dashboard.formTicketsearchform.selectTopicId.ClickItem(1);
    //Waits until the browser loads the page and is ready to accept user input.
    dashboard.Wait();
    //Checks whether the 'Enabled' property of the dashboard.formTicketsearchform.textboxKeywords object equals True.
    aqObject.CheckProperty(dashboard.formTicketsearchform.textboxKeywords, "Enabled", cmpEqual, true);
    //Checks whether the 'value' property of the dashboard.formTicketsearchform.submitbuttonSearch object equals 'Search'.
    aqObject.CheckProperty(dashboard.formTicketsearchform.submitbuttonSearch, "value", cmpEqual, "Search");
    //Clicks the 'textboxKeywords' control.
    dashboard.formTicketsearchform.textboxKeywords.Click();
    //Sets the text 'MS Office' in the 'textboxKeywords' text editor.
    dashboard.formTicketsearchform.textboxKeywords.SetText(Project.Variables.ticketSubject);
    //Clicks the 'submitbuttonSearch' button.
    dashboard.formTicketsearchform.submitbuttonSearch.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    dashboard.Wait();
    //Drags the 'cell3' object.
    dashboard.cell3.Drag(79, 11, -58, -5);
    //Checks whether the 'contentText' property of the dashboard.link562346 object equals '562346'.
    aqObject.CheckProperty(dashboard.link562346, "contentText", cmpEqual, Project.Variables.ticketNumber);
    //Drags the 'cell2' object.
    dashboard.cell2.Drag(73, 16, -67, -5);
    //Checks whether the 'contentText' property of the dashboard.cell2 object equals '11/11/21'.
    aqObject.CheckProperty(dashboard.cell2, "contentText", cmpEqual, Project.Variables.ticketCreatedDate);
    //Drags the 'cell4' object.
    dashboard.cell4.Drag(65, 15, -59, -7);
    //Checks whether the 'contentText' property of the dashboard.cell4 object equals 'Open'.
    aqObject.CheckProperty(dashboard.cell4, "contentText", cmpEqual, "Open");
    //Drags the 'cell' object.
    dashboard.cell.Drag(157, 13, -149, -5);
    //Checks whether the 'contentText' property of the dashboard.panelMsOfficeInstallation object equals 'MS Office installation'.
    aqObject.CheckProperty(dashboard.panelMsOfficeInstallation, "contentText", cmpEqual, Project.Variables.ticketSubject);
    //Drags the 'cell5' object.
    dashboard.cell5.Drag(115, 12, -109, -2);
    //Checks whether the 'contentText' property of the dashboard.textnodeInternalSupport object equals 'Internal Support'.
    aqObject.CheckProperty(dashboard.textnodeInternalSupport, "contentText", cmpEqual, "Internal Support");
    //Confirm Logout
    LogoutBase();
}
//TC006: Verify closed Ticket
function VerifyClosedTikcet(){
  //Redirect to login window
  LoginBase();  
  let page = browser.pageLogin;
  page.Wait();
  page = browser.pageTickets; 
  let link = page.linkClosed3;
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Closed (3)");
  let caption = page.caption;
  caption.Drag(217, 16, -218, -3);
  link.Click();
  page.Wait();
  caption.Click();
  caption.Click();
  caption.Drag(8, 15, 218, 0);
  aqObject.CheckProperty(caption, "contentText", cmpEqual, "Showing 1 - 3 of 3 Closed Tickets");
  let cell = page.cell4;
  cell.Drag(6, 11, 34, 0);
  cell.DblClick(40, 11);
  aqObject.CheckProperty(cell, "contentText", cmpEqual, "Closed");
  page.cell3.Drag(82, 12, -63, 0);
  page.cell2.Drag(63, 13, -59, 2);
  page.cell.Drag(145, 16, -140, -5);
  cell = page.cell5;
  cell.Drag(119, 12, -114, 1);
  page.panelMsOfficeInstallation.Click();
  page.Wait();
  aqObject.CheckProperty(page.cell6, "contentText", cmpEqual, "Closed");
  aqObject.CheckProperty(page.panelINeedToOffline, "contentText", cmpEqual, "Creating the VPN for VM");
  let cell2 = page.cell11;
  cell2.Drag(2, 11, 112, 1);
  aqObject.CheckProperty(cell2, "contentText", cmpEqual, "Pravinkumar Raut");
  let textNode = page.textnodePravinkumarRaut;
  textNode.Drag(32, 8, 117, 1);
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Pravinkumar Raut");
  page.cell8.Drag(3, 9, 125, -2);
  cell.Drag(4, 13, 109, -2);
  page.cell9.Drag(4, 11, 166, 5);
  page.time1111211326432.Drag(1, 8, 120, -1);
  aqObject.CheckProperty(page.panelCreatingTheVpnForVm, "contentText", cmpEqual, "Creating the VPN for VM\nDone");
  textNode = page.textnodeClosedBy;
  textNode.Drag(322, 15, 44, 4);
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Closed by\nBhushan Adhau\nwith status of Closed\n10/11/21 17:01:21");
  textNode = page.textnodeMsOfficeInstallation;
  textNode.Drag(1, 10, 159, 5);
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Creating the VPN");
  page.textnodeTickets.Drag(264, 14, -67, 1);
  aqObject.CheckProperty(page.textnode578835, "contentText", cmpEqual, "#578835");
  aqObject.CheckProperty(page.linkSignOut, "contentText", cmpEqual, "Sign Out");
  //Confirm Logout
  LogoutBase();
}
//===============================Base Login, Logout, Open and Close browser=======================================================================
  //BasicLoginBase : 
  function BasicLoginBase(){
    OpenBrowser();
    //Waits until the browser loads the page and is ready to accept user input.
    browser.pageDelaplexSupportSystem.Wait()
    //Clicks the 'linkSignIn' link.
    browser.pageDelaplexSupportSystem.linkSignIn.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    browser.pageLogin.Wait();
    //Clicks the 'textboxUsername' control.
    textbox.Click();
    //Sets the text 'pravin.raut@delaplex.com' in the 'textboxUsername' text editor.
    textbox.SetText("pravin.raut@delaplex.com");
  }
  //LoginBase: Open Browser and redirect to main page
  function LoginBase(){
    BasicLoginBase();
    //Double-clicks the 'passwordboxPasswd2' object.
    passwordTextBox.Click(72, 17);
    //Sets the text Project.Variables.PasswordCorrect in the 'passwordboxPasswd2' text editor.
    passwordTextBox.SetText(Project.Variables.PasswordCorrect);
    //Clicks the 'submitbuttonSignIn' button.
    submitLogin.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    dashboard.Wait();
  }
  //Logout Base
  function LogoutBase(){
    //Clicks the 'linkSignOut' link.
    dashboard.linkSignOut.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    browser.pageDelaplexSupportSystem.Wait();
    //Checks whether the 'contentText' property of the browser.pageDelaplexSupportSystem.linkSignIn object equals 'Sign In'.
    aqObject.CheckProperty(browser.pageDelaplexSupportSystem.linkSignIn, "contentText", cmpEqual, "Sign In");
    //Checks whether the 'WndCaption' property of the browser.BrowserWindow object equals 'delaPlex Support System - Google Chrome'.
    aqObject.CheckProperty(browser.BrowserWindow, "WndCaption", cmpEqual, "delaPlex Support System - Google Chrome");
    //To Confirm Login Dashboard
    browser.pageDelaplexSupportSystem.linkSignIn.Click();
    //Drags the 'textnodeSignIn' object.
    browser.pageDelaplexSupportSystem.textnodeSignIn.Drag(349, 20, 50, -3);
    //Drags the 'panelNotYetRegistered' object.
    browser.pageLogin.formClientlogin.panelNotYetRegistered.Drag(2, 5, 116, 4);
    //Clicks the 'formClientlogin' control.
    browser.pageLogin.formClientlogin.Click();
    //Drags the 'textnodeIMAnAgent' object.
    browser.pageLogin.formClientlogin.textnodeIMAnAgent.Drag(0, 7, 86, 5);
    //Clicks the 'formClientlogin' control.
    browser.pageLogin.formClientlogin.Click();
    //Drags the 'panelIMAnAgent' object.
    browser.pageLogin.formClientlogin.panelIMAnAgent.Drag(186, 9, -83, 1);
    //Clicks the 'formClientlogin' control.
    browser.pageLogin.formClientlogin.Click();
    //Checks whether the 'contentText' property of the browser.pageLogin.formClientlogin.linkSignInHere object equals 'sign in here'.
    aqObject.CheckProperty(browser.pageLogin.formClientlogin.linkSignInHere, "contentText", cmpEqual, "sign in here");
    //CloseBrowser
    CloseBrowser();
  }
  //Open Browser
  function OpenBrowser(){
    //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("http://delaplex.cloudapp.net:8086/index.php");
    //Maximizes the specified Window object.
    browser.BrowserWindow.Maximize();
  }
  //Close Browser
  function CloseBrowser(){
    browser.Close();  
  }

//===============================END Base Login, Logout, Open and Close browser=======================================================================