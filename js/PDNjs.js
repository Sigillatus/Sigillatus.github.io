// JavaScript Document
function load_js() {
    fillNavBar();
    stickyNavBar();
    addImgTitle();
    copyAds();
}

function stickyNavBar() {
    //< !--toggle stick navbar class on scroll-- >

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { navStickOrUnstick(); };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navStickOrUnstick() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("fixed-header");
        } else {
            navbar.classList.remove("fixed-header");
        }
    }
}

//< !-- if img.title is missing, use Alt attriibute. -- >
function addImgTitle() {
    var x = document.images;
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].title === '') {
            x[i].title = x[i].alt;
        }
    }
}

function fillNavBar() {
    // This string is stored in /js/masterNavFile.js
    // The string is the entire menu in compressed HTML with all linefeeds and whitespace removed.
    // cut & paste it here to update the navigation menus across the entire Docs website
    navString = "<ul><li><span class=Main_pdnMenuItem title='installation, system requirements, FAQ and other first principles'>Getting Started</span><ul><li id=open><a href='index.html'>Overview &amp; Features</a></li><li><a href='SystemRequirements.html'>System Requirements</a></li><li><a href='InstallPDN.html' class=NavRight1>Installation&nbsp;&raquo;</a><ul><li><a href='InstallPDN.html'>Installing paint.net</a></li><li><a href='InstallPlugins.html'>Installing Plugins</a></li><li><a href='UnattendedInstallation.html'>Unattended Installation</a></li></ul></li><li><a href='FAQ.html' title='frequently asked questions'>FAQ</a></li><li><a href='KeyboardMouseCommands.html'>Keyboard &amp; Mouse Input</a></li><li><a href='paintdotnetProtocol.html'>paintdotnet: protocol</a></li><li><a href='Glossary.html'>Glossary</a></li><li><a href='Tutorials.html'>Tutorials</a></li><li><a href='Translations.html'>Translating paint.net</a></li><li><a href='WebLinks.html'>Links</a></li><li><a href='License.html'>License</a></li></ul></li><li><span class=Main_pdnMenuItem title='parts of the main window'>User Interface</span><ul><li><a href='MainWindow.html'>Main Window</a><li><a href='ImageList.html'>Image List</a></li><li><a href='MenuBar.html'>Menu Bar</a></li><li><a href='Toolbar.html'>Tool Bar</a></li><li><a href='SettingsDialog.html'>Settings</a></li><li><a href='HelpMenu.html'>Help</a></li><li><a href='StatusBar.html'>Status Bar</a></li></ul></li><li><span class=Main_pdnMenuItem title='paint.net menu system'>Menus</span><ul style='min-width: 8em;'><li><a href='FileMenu.html'>File Menu</a></li><li><a href='EditMenu.html'>Edit Menu</a></li><li><a href='ViewMenu.html'>View Menu</a></li><li><a href='ImageMenu.html'>Image Menu</a></li><li><a href='LayersMenu.html' class=NavRight2>Layers&nbsp;&raquo;</a><ul><li><a href='LayersMenu.html'>Layers Menu</a></li><li><a href='RotateZoom.html'>Rotate/Zoom</a></li></ul></li><li><a href='AdjustmentsMenu.html' class=NavRight3>Adjustments&nbsp;&raquo;</a><ul><li><a href='AdjustmentsMenu.html'>Adjustments Menu</a></li><li><a href='Curves.html'>Curves</a></li><li><a href='Levels.html'>Levels</a></li></ul></li><li><a href='EffectsMenu.html' class=NavRight4>Effects&nbsp;&raquo;</a><ul><li><a href='EffectsMenu.html'>Effects Menu</a></li><li><a href='EffectsArtisticMenu.html'>Artistic</a></li><li><a href='EffectsBlursMenu.html'>Blurs</a></li><li><a href='EffectsColorMenu.html'>Color</a></li><li><a href='EffectsDistortMenu.html'>Distort</a></li><li><a href='EffectsNoiseMenu.html'>Noise</a></li><li><a href='EffectsObjectMenu.html'>Object</a></li><li><a href='EffectsPhotoMenu.html'>Photo</a></li><li><a href='EffectsRenderMenu.html'>Render</a></li><li><a href='EffectsStylizeMenu.html'>Stylize</a></li></ul></li></ul></li><li><span class=Main_pdnMenuItem title='paint.net's built in tools'>Tools</span><ul style='min-width: 11em;'><li><a href='ToolsWindow.html'>Tools Window</a></li><li><a href='SelectionTools.html' class=NavRight5>Selection Tools&nbsp;&raquo;</a><ul><li><a href='SelectionTools.html'>Selection Tools</a></li><li><a href='RectangleSelectionTool.html'>Rectangle Select Tool</a></li><li><a href='EllipseSelectionTool.html'>Ellipse Select Tool</a></li><li><a href='LassoSelectionTool.html'>Lasso Select Tool</a></li><li><a href='MagicWand.html'>Magic Wand Tool</a></li></ul></li><li><a href='MoveTools.html'>Move Tools</a></li><li><a href='ViewTools.html'>View Tools</a></li><li><a href='FillTools.html' class=NavRight1>Fill Tools&nbsp;&raquo;</a><ul><li><a href='FillTools.html'>Fill Tools</a></li><li><a href='PaintBucket.html'>Paint Bucket Tool</a></li><li><a href='GradientTool.html'>Gradient Tool</a></li></ul></li><li><a href='DrawingTools.html' class=NavRight2>Drawing Tools&nbsp;&raquo;</a><ul><li><a href='DrawingTools.html'>Drawing Tools</a></li><li><a href='Paintbrush.html'>Paintbrush Tool</a></li><li><a href='EraserTool.html'>Eraser Tool</a></li><li><a href='Pencil.html'>Pencil Tool</a></li></ul></li><li><a href='PhotoTools.html' class=NavRight3>Photo Tools&nbsp;&raquo;</a><ul><li><a href='PhotoTools.html'>Photo Tools</a></li><li><a href='ColorPicker.html'>Color Picker Tool</a></li><li><a href='CloneStamp.html'>Clone Stamp Tool</a></li><li><a href='RecolorTool.html'>Recolor Tool</a></li></ul></li><li><a href='TextShapeTools.html' class=NavRight4>Text &amp; Shape Tools&nbsp;&raquo;</a><ul><li><a href='TextShapeTools.html'>Text &amp; Shape Tools</a></li><li><a href='TextTool.html'>Text Tool</a></li><li><a href='LineCurveTool.html'>Line/Curve Tool</a></li><li><a href='ShapeTools.html'>Shapes Tool</a></li></ul></li></ul></li><li><span class=Main_pdnMenuItem title='layers, layering and blend modes'>Layers</span><ul><li><a href='LayersWindow.html'>Layers Window</a></li><li><a href='WorkingWithLayers.html'>Working with Layers</a></li><li><a href='BlendModes.html'>Blend Modes</a></li></ul></li><li><span class=Main_pdnMenuItem title='change and use color'>Color</span><ul><li><a href='ColorsWindow.html'>Colors Window</a></li><li><a href='WorkingWithPalettes.html'>Working with Palettes</a></li></ul></li><li><span class=Main_pdnMenuItem title='session history'>History</span><ul><li><a href='HistoryWindow.html'>History Window</a></li></ul></ul>'"
    document.getElementById("navbar").innerHTML = navString;
}

function copyAds() {
    //
    //
    //adString = "<script type='text/javascript'><!--google_ad_client = 'pub-4343851330510276';google_ad_width = 728;google_ad_height = 90;google_ad_format = '728x90_as';google_ad_type = 'text_image';google_ad_channel = '9289433033';google_color_border = 'FFFFFF';google_color_bg = 'FFFFFF';google_color_link = '0000FF';google_color_text = '000000';google_color_url = '008000';</script><script type='text/javascript' src='https://pagead2.googlesyndication.com/pagead/show_ads.js'></script>"
    //document.getElementById("adcontainer").innerHTML = adString;
}