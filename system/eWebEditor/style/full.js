config.ButtonDir = "blue";
config.StyleUploadDir = "uploadfile/";
config.InitMode = "EDIT";
config.AutoDetectPasteFromWord = "1";
config.BaseUrl = "1";
config.BaseHref = "";
config.AutoRemote = "1";
config.ShowBorder = "0";
config.StateFlag = "1";
config.CssDir = "coolblue";
config.AutoDetectLanguage = "1";
config.DefaultLanguage = "zh-cn";
config.AllowBrowse = "0";
config.AllowImageSize = "100";
config.AllowFlashSize = "100";
config.AllowMediaSize = "100";
config.AllowFileSize = "500";
config.AllowRemoteSize = "100";
config.AllowLocalSize = "100";

function showToolbar(){

	document.write ("<table border=0 cellpadding=0 cellspacing=0 width='100%' class='Toolbar' id='eWebEditor_Toolbar'><tr><td><div class=yToolbar><DIV CLASS=TBHandle></DIV><SELECT style='width:90px' CLASS=TBGen onchange=\"format('FormatBlock',this[this.selectedIndex].value);this.selectedIndex=0\">"+lang["FormatBlock"]+"</SELECT><SELECT style='width:115px' CLASS=TBGen onchange=\"formatFont('face',this[this.selectedIndex].value);this.selectedIndex=0\">"+lang["FontName"]+"</SELECT><SELECT style='width:55px' CLASS=TBGen onchange=\"formatFont('size',this[this.selectedIndex].value);this.selectedIndex=0\">"+lang["FontSize"]+"</SELECT><DIV CLASS=Btn TITLE='"+lang["Bold"]+"' onclick=\"format('bold')\"><IMG CLASS=Ico SRC='buttonimage/blue/bold.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Italic"]+"' onclick=\"format('italic')\"><IMG CLASS=Ico SRC='buttonimage/blue/italic.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["UnderLine"]+"' onclick=\"format('underline')\"><IMG CLASS=Ico SRC='buttonimage/blue/underline.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["StrikeThrough"]+"' onclick=\"format('StrikeThrough')\"><IMG CLASS=Ico SRC='buttonimage/blue/strikethrough.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["SuperScript"]+"' onclick=\"format('superscript')\"><IMG CLASS=Ico SRC='buttonimage/blue/superscript.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["SubScript"]+"' onclick=\"format('subscript')\"><IMG CLASS=Ico SRC='buttonimage/blue/subscript.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["UpperCase"]+"' onclick=\"formatText('uppercase')\"><IMG CLASS=Ico SRC='buttonimage/blue/ucase.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["LowerCase"]+"' onclick=\"formatText('lowercase')\"><IMG CLASS=Ico SRC='buttonimage/blue/lcase.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["JustifyLeft"]+"' onclick=\"format('justifyleft')\"><IMG CLASS=Ico SRC='buttonimage/blue/justifyleft.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["JustifyCenter"]+"' onclick=\"format('justifycenter')\"><IMG CLASS=Ico SRC='buttonimage/blue/justifycenter.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["JustifyRight"]+"' onclick=\"format('justifyright')\"><IMG CLASS=Ico SRC='buttonimage/blue/justifyright.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["JustifyFull"]+"' onclick=\"format('JustifyFull')\"><IMG CLASS=Ico SRC='buttonimage/blue/justifyfull.gif'></DIV></div></td></tr><tr><td><div class=yToolbar><DIV CLASS=TBHandle></DIV><DIV CLASS=Btn TITLE='"+lang["Cut"]+"' onclick=\"format('cut')\"><IMG CLASS=Ico SRC='buttonimage/blue/cut.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Copy"]+"' onclick=\"format('copy')\"><IMG CLASS=Ico SRC='buttonimage/blue/copy.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Paste"]+"' onclick=\"format('paste')\"><IMG CLASS=Ico SRC='buttonimage/blue/paste.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["PasteText"]+"' onclick=\"PasteText()\"><IMG CLASS=Ico SRC='buttonimage/blue/pastetext.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["PasteWord"]+"' onclick=\"PasteWord()\"><IMG CLASS=Ico SRC='buttonimage/blue/pasteword.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FindReplace"]+"' onclick=\"findReplace()\"><IMG CLASS=Ico SRC='buttonimage/blue/findreplace.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Delete"]+"' onclick=\"format('delete')\"><IMG CLASS=Ico SRC='buttonimage/blue/delete.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["RemoveFormat"]+"' onclick=\"format('RemoveFormat')\"><IMG CLASS=Ico SRC='buttonimage/blue/removeformat.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["UnDo"]+"' onclick=\"goHistory(-1)\"><IMG CLASS=Ico SRC='buttonimage/blue/undo.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ReDo"]+"' onclick=\"goHistory(1)\"><IMG CLASS=Ico SRC='buttonimage/blue/redo.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["SelectAll"]+"' onclick=\"format('SelectAll')\"><IMG CLASS=Ico SRC='buttonimage/blue/selectall.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["UnSelect"]+"' onclick=\"format('Unselect')\"><IMG CLASS=Ico SRC='buttonimage/blue/unselect.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["OrderedList"]+"' onclick=\"format('insertorderedlist')\"><IMG CLASS=Ico SRC='buttonimage/blue/insertorderedlist.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["UnOrderedList"]+"' onclick=\"format('insertunorderedlist')\"><IMG CLASS=Ico SRC='buttonimage/blue/insertunorderedlist.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Indent"]+"' onclick=\"format('indent')\"><IMG CLASS=Ico SRC='buttonimage/blue/indent.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Outdent"]+"' onclick=\"format('outdent')\"><IMG CLASS=Ico SRC='buttonimage/blue/outdent.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ParagraphAttr"]+"' onclick=\"paragraphAttr()\"><IMG CLASS=Ico SRC='buttonimage/blue/paragraph.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["ForeColor"]+"' onclick=\"showDialog('selcolor.htm?action=forecolor', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/forecolor.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["BgColor"]+"' onclick=\"showDialog('selcolor.htm?action=bgcolor', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/bgcolor.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["BackColor"]+"' onclick=\"showDialog('selcolor.htm?action=backcolor', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/backcolor.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["BackImage"]+"' onclick=\"showDialog('backimage.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/bgpic.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["absolutePosition"]+"' onclick=\"absolutePosition()\"><IMG CLASS=Ico SRC='buttonimage/blue/abspos.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["zIndexForward"]+"' onclick=\"zIndex('forward')\"><IMG CLASS=Ico SRC='buttonimage/blue/forward.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["zIndexBackward"]+"' onclick=\"zIndex('backward')\"><IMG CLASS=Ico SRC='buttonimage/blue/backward.gif'></DIV></div></td></tr><tr><td><div class=yToolbar><DIV CLASS=TBHandle></DIV><DIV CLASS=Btn TITLE='"+lang["Image"]+"' onclick=\"showDialog('img.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/img.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Flash"]+"' onclick=\"showDialog('flash.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/flash.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Media"]+"' onclick=\"showDialog('media.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/media.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["File"]+"' onclick=\"showDialog('file.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/file.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["GalleryMenu"]+"' onclick=\"showToolMenu('gallery')\"><IMG CLASS=Ico SRC='buttonimage/blue/gallerymenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["RemoteUpload"]+"' onclick=\"remoteUpload()\"><IMG CLASS=Ico SRC='buttonimage/blue/remoteupload.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["LocalUpload"]+"' onclick=\"showDialog('localupload.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/localupload.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ImportWord"]+"' onclick=\"showDialog('importword.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/importword.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ImportExcel"]+"' onclick=\"showDialog('importexcel.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/importexcel.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Fieldset"]+"' onclick=\"showDialog('fieldset.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/fieldset.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Iframe"]+"' onclick=\"showDialog('iframe.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/iframe.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["HorizontalRule"]+"' onclick=\"format('InsertHorizontalRule')\"><IMG CLASS=Ico SRC='buttonimage/blue/inserthorizontalrule.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Marquee"]+"' onclick=\"showDialog('marquee.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/marquee.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["CreateLink"]+"' onclick=\"createLink()\"><IMG CLASS=Ico SRC='buttonimage/blue/createlink.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Anchor"]+"' onclick=\"showDialog('anchor.htm', true);\"><IMG CLASS=Ico SRC='buttonimage/blue/anchor.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Map"]+"' onclick=\"mapEdit()\"><IMG CLASS=Ico SRC='buttonimage/blue/map.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Unlink"]+"' onclick=\"format('UnLink')\"><IMG CLASS=Ico SRC='buttonimage/blue/unlink.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Symbol"]+"' onclick=\"showDialog('symbol.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/symbol.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Emot"]+"' onclick=\"showDialog('emot.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/emot.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Art"]+"' onclick=\"showDialog('art.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/art.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["NowDate"]+"' onclick=\"insert('nowdate')\"><IMG CLASS=Ico SRC='buttonimage/blue/date.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["NowTime"]+"' onclick=\"insert('nowtime')\"><IMG CLASS=Ico SRC='buttonimage/blue/time.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Quote"]+"' onclick=\"insert('quote')\"><IMG CLASS=Ico SRC='buttonimage/blue/quote.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Code"]+"' onclick=\"insert('code')\"><IMG CLASS=Ico SRC='buttonimage/blue/code.gif'></DIV></div></td></tr><tr><td><div class=yToolbar><DIV CLASS=TBHandle></DIV><DIV CLASS=Btn TITLE='"+lang["ShowBorders"]+"' onclick=\"showBorders()\"><IMG CLASS=Ico SRC='buttonimage/blue/showborders.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Paragraph"]+"' onclick=\"format('InsertParagraph')\"><IMG CLASS=Ico SRC='buttonimage/blue/insertparagraph.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["BR"]+"' onclick=\"insert('br')\"><IMG CLASS=Ico SRC='buttonimage/blue/br.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["TableInsert"]+"' onclick=\"TableInsert()\"><IMG CLASS=Ico SRC='buttonimage/blue/tableinsert.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableProp"]+"' onclick=\"TableProp()\"><IMG CLASS=Ico SRC='buttonimage/blue/tableprop.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["TableCellProp"]+"' onclick=\"TableCellProp()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecellprop.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableCellSplit"]+"' onclick=\"TableCellSplit()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecellsplit.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["TableRowProp"]+"' onclick=\"TableRowProp()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablerowprop.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableRowInsertAbove"]+"' onclick=\"TableRowInsertAbove()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablerowinsertabove.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableRowInsertBelow"]+"' onclick=\"TableRowInsertBelow()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablerowinsertbelow.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableRowMerge"]+"' onclick=\"TableRowMerge()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablerowmerge.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableRowSplit"]+"' onclick=\"TableRowSplit(2)\"><IMG CLASS=Ico SRC='buttonimage/blue/tablerowsplit.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableRowDelete"]+"' onclick=\"TableRowDelete()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablerowdelete.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableColInsertLeft"]+"' onclick=\"TableColInsertLeft()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecolinsertleft.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableColInsertRight"]+"' onclick=\"TableColInsertRight()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecolinsertright.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableColMerge"]+"' onclick=\"TableColMerge()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecolmerge.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableColSplit"]+"' onclick=\"TableColSplit(2)\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecolsplit.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableColDelete"]+"' onclick=\"TableColDelete()\"><IMG CLASS=Ico SRC='buttonimage/blue/tablecoldelete.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["FormText"]+"' onclick=\"format('InsertInputText')\"><IMG CLASS=Ico SRC='buttonimage/blue/formtext.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FormTextArea"]+"' onclick=\"format('InsertTextArea')\"><IMG CLASS=Ico SRC='buttonimage/blue/formtextarea.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FormRadio"]+"' onclick=\"format('InsertInputRadio')\"><IMG CLASS=Ico SRC='buttonimage/blue/formradio.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FormCheckbox"]+"' onclick=\"format('InsertInputCheckbox')\"><IMG CLASS=Ico SRC='buttonimage/blue/formcheckbox.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FormDropdown"]+"' onclick=\"format('InsertSelectDropdown')\"><IMG CLASS=Ico SRC='buttonimage/blue/formdropdown.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FormButton"]+"' onclick=\"format('InsertButton')\"><IMG CLASS=Ico SRC='buttonimage/blue/formbutton.gif'></DIV></div></td></tr><tr><td><div class=yToolbar><DIV CLASS=TBHandle></DIV><DIV CLASS=Btn TITLE='"+lang["EditMenu"]+"' onclick=\"showToolMenu('edit')\"><IMG CLASS=Ico SRC='buttonimage/blue/editmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FontMenu"]+"' onclick=\"showToolMenu('font')\"><IMG CLASS=Ico SRC='buttonimage/blue/fontmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ParagraphMenu"]+"' onclick=\"showToolMenu('paragraph')\"><IMG CLASS=Ico SRC='buttonimage/blue/paragraphmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ComponentMenu"]+"' onclick=\"showToolMenu('component')\"><IMG CLASS=Ico SRC='buttonimage/blue/componentmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ObjectMenu"]+"' onclick=\"showToolMenu('object')\"><IMG CLASS=Ico SRC='buttonimage/blue/objectmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ToolMenu"]+"' onclick=\"showToolMenu('tool')\"><IMG CLASS=Ico SRC='buttonimage/blue/toolmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["TableMenu"]+"' onclick=\"showToolMenu('table')\"><IMG CLASS=Ico SRC='buttonimage/blue/tablemenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FormMenu"]+"' onclick=\"showToolMenu('form')\"><IMG CLASS=Ico SRC='buttonimage/blue/formmenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["FileMenu"]+"' onclick=\"showToolMenu('file')\"><IMG CLASS=Ico SRC='buttonimage/blue/filemenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ZoomMenu"]+"' onclick=\"showToolMenu('zoom')\"><IMG CLASS=Ico SRC='buttonimage/blue/zoommenu.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Refresh"]+"' onclick=\"format('refresh')\"><IMG CLASS=Ico SRC='buttonimage/blue/refresh.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["Save"]+"' onclick=\"parent.doSave()\"><IMG CLASS=Ico SRC='buttonimage/blue/save.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Print"]+"' onclick=\"format('Print')\"><IMG CLASS=Ico SRC='buttonimage/blue/print.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["ModeCode"]+"' onclick=\"setMode('CODE')\"><IMG CLASS=Ico SRC='buttonimage/blue/modecodebtn.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ModeEdit"]+"' onclick=\"setMode('EDIT')\"><IMG CLASS=Ico SRC='buttonimage/blue/modeeditbtn.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ModeText"]+"' onclick=\"setMode('TEXT')\"><IMG CLASS=Ico SRC='buttonimage/blue/modetextbtn.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["ModeView"]+"' onclick=\"setMode('VIEW')\"><IMG CLASS=Ico SRC='buttonimage/blue/modeviewbtn.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["SizePlus"]+"' onclick=\"sizeChange(300)\"><IMG CLASS=Ico SRC='buttonimage/blue/sizeplus.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["SizeMinus"]+"' onclick=\"sizeChange(-300)\"><IMG CLASS=Ico SRC='buttonimage/blue/sizeminus.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Excel"]+"' onclick=\"showDialog('owcexcel.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/excel.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["EQ"]+"' onclick=\"showDialog('eq.htm', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/eq.gif'></DIV><DIV CLASS=TBSep></DIV>");

	if (sFullScreen=="1"){
		document.write ("<DIV CLASS=Btn TITLE='"+lang["Minimize"]+"' onclick=\"parent.Minimize()\"><IMG CLASS=Ico SRC='buttonimage/blue/minimize.gif'></DIV>");
	}else{
		document.write ("<DIV CLASS=Btn TITLE='"+lang["Maximize"]+"' onclick=\"Maximize()\"><IMG CLASS=Ico SRC='buttonimage/blue/maximize.gif'></DIV>");
	}

	document.write ("<DIV CLASS=Btn TITLE='"+lang["About"]+"' onclick=\"showDialog('about.htm')\"><IMG CLASS=Ico SRC='buttonimage/blue/about.gif'></DIV></div></td></tr><tr><td><div class=yToolbar><DIV CLASS=TBHandle></DIV><DIV CLASS=Btn TITLE='"+lang["SpellCheck"]+"' onclick=\"spellCheck()\"><IMG CLASS=Ico SRC='buttonimage/blue/spellcheck.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["UpperCase"]+"' onclick=\"formatText('uppercase')\"><IMG CLASS=Ico SRC='buttonimage/blue/ucase.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["LowerCase"]+"' onclick=\"formatText('lowercase')\"><IMG CLASS=Ico SRC='buttonimage/blue/lcase.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["GalleryMenu"]+"' onclick=\"showToolMenu('gallery')\"><IMG CLASS=Ico SRC='buttonimage/blue/gallerymenu.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["GalleryImage"]+"' onclick=\"showDialog('browse.htm?type=image', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/galleryimage.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["GalleryFlash"]+"' onclick=\"showDialog('browse.htm?type=flash', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/galleryflash.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["GalleryMedia"]+"' onclick=\"showDialog('browse.htm?type=media', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/galleryimage.gif'></DIV><DIV CLASS=Btn TITLE='"+lang["GalleryFile"]+"' onclick=\"showDialog('browse.htm?type=file', true)\"><IMG CLASS=Ico SRC='buttonimage/blue/galleryfile.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["PrintBreak"]+"' onclick=\"insert('printbreak')\"><IMG CLASS=Ico SRC='buttonimage/blue/printbreak.gif'></DIV><DIV CLASS=TBSep></DIV><DIV CLASS=Btn TITLE='"+lang["Site"]+"' onclick=\"window.open('http://www.ewebeditor.net')\"><IMG CLASS=Ico SRC='buttonimage/blue/site.gif'></DIV><DIV CLASS=TBSep></DIV><SELECT style='width:55px' CLASS=TBGen onchange=\"doZoom(this[this.selectedIndex].value)\"><option value='10'>10%</option><option value='25'>25%</option><option value='50'>50%</option><option value='75'>75%</option><option value='100' selected>100%</option><option value='150'>150%</option><option value='200'>200%</option><option value='500'>500%</option></SELECT></div></td></tr></table>");

}
