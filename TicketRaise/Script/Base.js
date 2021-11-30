//class Base{
//===============================Base Login, Logout, Open and Close browser=======================================================================
  //BasicLoginBase : 
  function BasicLoginBase(){
    OpenBrowser();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageDelaplexSupportSystem.Wait()
    //Clicks the 'linkSignIn' link.
    Aliases.browser.pageDelaplexSupportSystem.linkSignIn.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageLogin.Wait();
    //Clicks the 'textboxUsername' control.
    Aliases.browser.pageLogin.formClientlogin.textboxUsername.Click();
    //Sets the text 'pravin.raut@delaplex.com' in the 'textboxUsername' text editor.
    Aliases.browser.pageLogin.formClientlogin.textboxUsername.SetText("pravin.raut@delaplex.com");
    //Double-clicks the 'passwordboxPasswd2' object.
    Aliases.browser.pageLogin.formClientlogin2.passwordboxPasswd2.Click(72, 17);
  }
  //LoginBase: Open Browser and redirect to main page
  function LoginBase(){
    BasicLoginBase();
    //Sets the text Project.Variables.PasswordCorrect in the 'passwordboxPasswd2' text editor.
    Aliases.browser.pageLogin.formClientlogin2.passwordboxPasswd2.SetText(Project.Variables.PasswordCorrect);
    //Clicks the 'submitbuttonSignIn' button.
    Aliases.browser.pageLogin.formClientlogin.submitbuttonSignIn.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageTickets.Wait();
  }
  //Logout Base
  function LogoutBase(){
    //Clicks the 'linkSignOut' link.
    Aliases.browser.pageTickets.linkSignOut.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageDelaplexSupportSystem.Wait();
    //Checks whether the 'contentText' property of the Aliases.browser.pageDelaplexSupportSystem.linkSignIn object equals 'Sign In'.
    aqObject.CheckProperty(Aliases.browser.pageDelaplexSupportSystem.linkSignIn, "contentText", cmpEqual, "Sign In");
    //Checks whether the 'WndCaption' property of the Aliases.browser.BrowserWindow object equals 'delaPlex Support System - Google Chrome'.
    aqObject.CheckProperty(Aliases.browser.BrowserWindow, "WndCaption", cmpEqual, "delaPlex Support System - Google Chrome");
    //To Confirm Login Dashboard
    Aliases.browser.pageDelaplexSupportSystem.linkSignIn.Click();
    //Drags the 'textnodeSignIn' object.
    Aliases.browser.pageDelaplexSupportSystem.textnodeSignIn.Drag(349, 20, 50, -3);
    //Drags the 'panelNotYetRegistered' object.
    Aliases.browser.pageLogin.formClientlogin.panelNotYetRegistered.Drag(2, 5, 116, 4);
    //Clicks the 'formClientlogin' control.
    Aliases.browser.pageLogin.formClientlogin.Click();
    //Drags the 'textnodeIMAnAgent' object.
    Aliases.browser.pageLogin.formClientlogin.textnodeIMAnAgent.Drag(0, 7, 86, 5);
    //Clicks the 'formClientlogin' control.
    Aliases.browser.pageLogin.formClientlogin.Click();
    //Drags the 'panelIMAnAgent' object.
    Aliases.browser.pageLogin.formClientlogin.panelIMAnAgent.Drag(186, 9, -83, 1);
    //Clicks the 'formClientlogin' control.
    Aliases.browser.pageLogin.formClientlogin.Click();
    //Checks whether the 'contentText' property of the Aliases.browser.pageLogin.formClientlogin.linkSignInHere object equals 'sign in here'.
    aqObject.CheckProperty(Aliases.browser.pageLogin.formClientlogin.linkSignInHere, "contentText", cmpEqual, "sign in here");
    //CloseBrowser
    CloseBrowser();
  }
  //Open Browser
  function OpenBrowser(){
    //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("http://delaplex.cloudapp.net:8086/index.php");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
  }
  //Close Browser
  function CloseBrowser(){
    Aliases.browser.Close();  
  }

//===============================END Base Login, Logout, Open and Close browser=======================================================================
//}