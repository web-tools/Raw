﻿/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("checkspell",a => {
 function c(a,c){var d=0;return () => {"function"==typeof window.doSpell?("undefined"!=typeof e&&window.clearInterval(e),j(a)):180==d++&&window._cancelOnError(c)};}function j(c){
  var f=new window._SP_FCK_LangCompare;
  var b=CKEDITOR.getUrl(a.plugins.wsc.path+"dialogs/");
  var e=b+"tmpFrameset.html";
  window.gFCKPluginName="wsc";f.setDefaulLangCode(a.config.defaultLanguage);window.doSpell({ctrl:g,lang:a.config.wsc_lang||f.getSPLangCode(a.langCode),intLang:a.config.wsc_uiLang||
  f.getSPLangCode(a.langCode),winType:d,onCancel() {c.hide()},onFinish(b) {a.focus();c.getParentEditor().setData(b.value);c.hide()},staticFrame:e,framesetPath:e,iframePath:b+"ciframe.html",schemaURI:b+"wsc.css",userDictionaryName:a.config.wsc_userDictionaryName,customDictionaryName:a.config.wsc_customDictionaryIds&&a.config.wsc_customDictionaryIds.split(","),domainName:a.config.wsc_domainName});CKEDITOR.document.getById(h).setStyle("display","none");CKEDITOR.document.getById(d).setStyle("display",
  "block")
 }
 var b=CKEDITOR.tools.getNextNumber();
 var d="cke_frame_"+b;
 var g="cke_data_"+b;
 var h="cke_error_"+b;
 var e;
 var b=document.location.protocol||"http:";
 var i=a.lang.wsc.notAvailable;
 var k='<textarea style="display: none" id="'+g+'" rows="10" cols="40"> </textarea><div id="'+h+'" style="display:none;color:red;font-size:16px;font-weight:bold;padding-top:160px;text-align:center;z-index:11;"></div><iframe src="" style="width:100%;background-color:#f1f1e3;" frameborder="0" name="'+d+'" id="'+d+'" allowtransparency="1"></iframe>';
 var l=a.config.wsc_customLoaderScript||b+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+a.config.wsc_customerId+"&cmd=script&doc=wsc&schema=22";
 a.config.wsc_customLoaderScript&&(i+='<p style="color:#000;font-size:11px;font-weight: normal;text-align:center;padding-top:10px">'+a.lang.wsc.errorLoading.replace(/%s/g,a.config.wsc_customLoaderScript)+"</p>");window._cancelOnError=c => {if("undefined"==typeof window.WSC_Error){CKEDITOR.document.getById(d).setStyle("display",
 "none");var b=CKEDITOR.document.getById(h);b.setStyle("display","block");b.setHtml(c||a.lang.wsc.notAvailable)}};return {title:a.config.wsc_dialogTitle||a.lang.wsc.title,minWidth:485,minHeight:380,buttons:[CKEDITOR.dialog.cancelButton],onShow() {var b=this.getContentElement("general","content").getElement();b.setHtml(k);b.getChild(2).setStyle("height",this._.contentSize.height+"px");"function"!=typeof window.doSpell&&CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",
 {attributes:{type:"text/javascript",src:l}}));b=a.getData();CKEDITOR.document.getById(g).setValue(b);e=window.setInterval(c(this,i),250)},onHide() {window.ooo=void 0;window.int_framsetLoaded=void 0;window.framesetLoaded=void 0;window.is_window_opened=!1},contents:[{id:"general",label:a.config.wsc_dialogTitle||a.lang.wsc.title,padding:0,elements:[{type:"html",id:"content",html:""}]}]};
});
CKEDITOR.dialog.on("resize",a => {
 var a=a.data;
 var c=a.dialog;
 "checkspell"==c._.name&&((c=(c=c.getContentElement("general","content").getElement())&&c.getChild(2))&&c.setSize("height",a.height),c&&c.setSize("width",a.width))
});