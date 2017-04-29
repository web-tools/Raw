/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("link",m => {
 var o;
 var p;
 function q(a){return a.replace(/'/g,"\\$&")}function s(a){
  var g;
  var c=o;
  var d;
  var e;
  g=[p,"("];for(var b=0;b<c.length;b++)d=c[b].toLowerCase(),e=a[d],0<b&&g.push(","),g.push("'",e?q(encodeURIComponent(a[d])):"","'");g.push(")");return g.join("")
 }function t(a){for(var g,c=a.length,d=[],e=0;e<c;e++)g=a.charCodeAt(e),d.push(g);return"String.fromCharCode("+d.join(",")+")"}function u(a){return(a=a.getAttribute("class"))?a.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,
 ""):""}
 var v=CKEDITOR.plugins.link;
 var r=function(){var a=this.getDialog(),g=a.getContentElement("target","popupFeatures"),a=a.getContentElement("target","linkTargetName"),c=this.getValue();if(g&&a)switch(g=g.getElement(),g.hide(),a.setValue(""),c){case "frame":a.setLabel(m.lang.link.targetFrameName);a.getElement().show();break;case "popup":g.show();a.setLabel(m.lang.link.targetPopupName);a.getElement().show();break;default:a.setValue(c),a.getElement().hide()}};
 var w=/^javascript:/;
 var x=/^mailto:([^?]+)(?:\?(.+))?$/;
 var y=/subject=([^;?:@&=$,\/]*)/;
 var z=/body=([^;?:@&=$,\/]*)/;
 var A=/^#(.*)$/;
 var B=/^((?:http|https|ftp|news):\/\/)?(.*)$/;
 var C=/^(_(?:self|top|parent|blank))$/;
 var D=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/;
 var E=/^javascript:([^(]+)\(([^)]+)\)$/;
 var F=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/;
 var G=/(?:^|,)([^=]+)=(\d+|yes|no)/gi;

 var H=function(a,g){var c=g&&(g.data("cke-saved-href")||g.getAttribute("href"))||"",d,e,b=
 {};c.match(w)&&("encode"==n?c=c.replace(D,(a, b, c) => "mailto:"+String.fromCharCode(...b.split(","))+(c&&c.replace(/\\'/g,"'"))):n&&c.replace(E,(a, c, d) => {if(c==p){b.type="email";for(var a=b.email={},c=/(^')|('$)/g,d=d.match(/[^,\s]+/g),e=d.length,g,f,h=0;h<e;h++)g=decodeURIComponent,f=d[h].replace(c,"").replace(/\\'/g,"'"),f=g(f),g=o[h].toLowerCase(),a[g]=f;a.address=[a.name,a.domain].join("@")}}));if(!b.type)if(d=c.match(A))b.type="anchor",b.anchor={},b.anchor.name=b.anchor.id=
 d[1];else if(d=c.match(x)){e=c.match(y);c=c.match(z);b.type="email";var f=b.email={};f.address=d[1];e&&(f.subject=decodeURIComponent(e[1]));c&&(f.body=decodeURIComponent(c[1]))}else c&&(e=c.match(B))?(b.type="url",b.url={},b.url.protocol=e[1],b.url.url=e[2]):b.type="url";if(g){d=g.getAttribute("target");b.target={};b.adv={};if(d)d.match(C)?b.target.type=b.target.name=d:(b.target.type="frame",b.target.name=d);else if(d=(d=g.data("cke-pa-onclick")||g.getAttribute("onclick"))&&d.match(F)){b.target.type=
 "popup";for(b.target.name=d[1];c=G.exec(d[2]);)("yes"==c[2]||"1"==c[2])&&!(c[1]in{height:1,width:1,top:1,left:1})?b.target[c[1]]=!0:isFinite(c[2])&&(b.target[c[1]]=c[2])}d=(a, c) => {var d=g.getAttribute(c);null!==d&&(b.adv[a]=d||"")};d("advId","id");d("advLangDir","dir");d("advAccessKey","accessKey");b.adv.advName=g.data("cke-saved-name")||g.getAttribute("name")||"";d("advLangCode","lang");d("advTabIndex","tabindex");d("advTitle","title");d("advContentType","type");CKEDITOR.plugins.link.synAnchorSelector?
 b.adv.advCSSClasses=u(g):d("advCSSClasses","class");d("advCharset","charset");d("advStyles","style");d("advRel","rel")}b.anchors=CKEDITOR.plugins.link.getEditorAnchors(a);this._.selectedElement=g;return b};

 var i=function(a){a.target&&this.setValue(a.target[this.id]||"")};
 var j=function(a){a.adv&&this.setValue(a.adv[this.id]||"")};
 var k=function(a){a.target||(a.target={});a.target[this.id]=this.getValue()||""};
 var l=function(a){a.adv||(a.adv={});a.adv[this.id]=this.getValue()||""};
 var n=m.config.emailProtection||"";
 n&&
 "encode"!=n&&(p=o=void 0,n.replace(/^([^(]+)\(([^)]+)\)$/,(a, b, c) => {p=b;o=[];c.replace(/[^,\s]+/g,a => {o.push(a)})}));
 var h=m.lang.common;
 var b=m.lang.link;
 return {title:b.title,minWidth:350,minHeight:230,contents:[{id:"info",label:b.info,title:b.info,elements:[{id:"linkType",type:"select",label:b.type,"default":"url",items:[[b.toUrl,"url"],[b.toAnchor,"anchor"],[b.toEmail,"email"]],onChange() {
  var a=this.getDialog();
  var b=["urlOptions","anchorOptions","emailOptions"];
  var c=this.getValue();
  var d=a.definition.getContents("upload");
  var d=d&&d.hidden;
  if(c=="url"){m.config.linkShowTargetTab&&a.showPage("target");d||a.showPage("upload")}else{a.hidePage("target");d||a.hidePage("upload")}for(d=0;d<b.length;d++){var e=a.getContentElement("info",b[d]);if(e){e=e.getElement().getParent().getParent();b[d]==c+"Options"?e.show():e.hide()}}a.layout()
 },setup(a) {a.type&&this.setValue(a.type)},commit(a) {a.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%",
 "75%"],children:[{id:"protocol",type:"select",label:h.protocol,"default":"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[b.other,""]],setup(a) {a.url&&this.setValue(a.url.protocol||"")},commit(a) {if(!a.url)a.url={};a.url.protocol=this.getValue()}},{type:"text",id:"url",label:h.url,required:!0,onLoad() {this.allowOnChange=true},onKeyUp() {
  this.allowOnChange=false;

  var a=this.getDialog().getContentElement("info",
  "protocol");

  var b=this.getValue();
  var c=/^((javascript:)|[#\/\.\?])/i;
  var d=/^(http|https|ftp|news):\/\/(?=.)/i.exec(b);
  if(d){this.setValue(b.substr(d[0].length));a.setValue(d[0].toLowerCase())}else c.test(b)&&a.setValue("");this.allowOnChange=true
 },onChange() {if(this.allowOnChange)this.onKeyUp()},validate() {var a=this.getDialog();if(a.getContentElement("info","linkType")&&a.getValueOf("info","linkType")!="url")return true;if(/javascript\:/.test(this.getValue())){alert(h.invalidValue);return false}return this.getDialog().fakeObj?
 true:CKEDITOR.dialog.validate.notEmpty(b.noUrl).apply(this)},setup(a) {this.allowOnChange=false;a.url&&this.setValue(a.url.url);this.allowOnChange=true},commit(a) {this.onChange();if(!a.url)a.url={};a.url.url=this.getValue();this.allowOnChange=false}}],setup() {this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:h.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",
 padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:b.selectAnchor,setup(a) {a.anchors.length>0?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:b.anchorName,style:"width: 100%;",items:[[""]],setup(a) {this.clear();this.add("");for(var b=0;b<a.anchors.length;b++)a.anchors[b].name&&this.add(a.anchors[b].name);a.anchor&&this.setValue(a.anchor.name);(a=this.getDialog().getContentElement("info",
 "linkType"))&&a.getValue()=="email"&&this.focus()},commit(a) {if(!a.anchor)a.anchor={};a.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:b.anchorId,style:"width: 100%;",items:[[""]],setup(a) {this.clear();this.add("");for(var b=0;b<a.anchors.length;b++)a.anchors[b].id&&this.add(a.anchors[b].id);a.anchor&&this.setValue(a.anchor.id)},commit(a) {if(!a.anchor)a.anchor={};a.anchor.id=this.getValue()}}],setup(a) {a.anchors.length>0?this.getElement().show():
 this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(b.noAnchors)+"</div>",focus:!0,setup(a) {a.anchors.length<1?this.getElement().show():this.getElement().hide()}}],setup() {this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:b.emailAddress,required:!0,validate() {var a=
 this.getDialog();return!a.getContentElement("info","linkType")||a.getValueOf("info","linkType")!="email"?true:CKEDITOR.dialog.validate.notEmpty(b.noEmail).apply(this)},setup(a) {a.email&&this.setValue(a.email.address);(a=this.getDialog().getContentElement("info","linkType"))&&a.getValue()=="email"&&this.select()},commit(a) {if(!a.email)a.email={};a.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:b.emailSubject,setup(a) {a.email&&this.setValue(a.email.subject)},
 commit(a) {if(!a.email)a.email={};a.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:b.emailBody,rows:3,"default":"",setup(a) {a.email&&this.setValue(a.email.body)},commit(a) {if(!a.email)a.email={};a.email.body=this.getValue()}}],setup() {this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:b.target,title:b.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",
 id:"linkTargetType",label:h.target,"default":"notSet",style:"width : 100%;",items:[[h.notSet,"notSet"],[b.targetFrame,"frame"],[b.targetPopup,"popup"],[h.targetNew,"_blank"],[h.targetTop,"_top"],[h.targetSelf,"_self"],[h.targetParent,"_parent"]],onChange:r,setup(a) {a.target&&this.setValue(a.target.type||"notSet");r.call(this)},commit(a) {if(!a.target)a.target={};a.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:b.targetFrameName,"default":"",setup(a) {a.target&&
 this.setValue(a.target.name)},commit(a) {if(!a.target)a.target={};a.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:b.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:b.popupResizable,setup:i,commit:k},{type:"checkbox",id:"status",label:b.popupStatusBar,setup:i,commit:k}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:b.popupLocationBar,
 setup:i,commit:k},{type:"checkbox",id:"toolbar",label:b.popupToolbar,setup:i,commit:k}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:b.popupMenuBar,setup:i,commit:k},{type:"checkbox",id:"fullscreen",label:b.popupFullScreen,setup:i,commit:k}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:b.popupScrollBars,setup:i,commit:k},{type:"checkbox",id:"dependent",label:b.popupDependent,setup:i,commit:k}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",
 label:h.width,id:"width",setup:i,commit:k},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:b.popupLeft,id:"left",setup:i,commit:k}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:h.height,id:"height",setup:i,commit:k},{type:"text",labelLayout:"horizontal",label:b.popupTop,widths:["50%","50%"],id:"top",setup:i,commit:k}]}]}]}]},{id:"upload",label:b.upload,title:b.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",
 label:h.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:h.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:b.advanced,title:b.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:b.id,setup:j,commit:l},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:b.langDir,"default":"",style:"width:110px",items:[[h.notSet,""],[b.langDirLTR,
 "ltr"],[b.langDirRTL,"rtl"]],setup:j,commit:l},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:b.acccessKey,maxLength:1,setup:j,commit:l}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:b.name,id:"advName",requiredContent:"a[name]",setup:j,commit:l},{type:"text",label:b.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:j,commit:l},{type:"text",label:b.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",
 width:"80px",maxLength:5,setup:j,commit:l}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:j,commit:l},{type:"text",label:b.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:j,commit:l}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:j,commit:l},
 {type:"text",label:b.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:j,commit:l}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:j,commit:l},{type:"text",label:b.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(m.lang.common.invalidInlineStyle),setup:j,commit:l}]}]}]}],onShow() {
  var a=this.getParentEditor();
  var b=a.getSelection();

  var c=
  null;

  (c=v.getSelectedLink(a))&&c.hasAttribute("href")?b.getSelectedElement()||b.selectElement(c):c=null;this.setupContent(H.apply(this,[a,c]))
 },onOk() {
  var a={};
  var b=[];
  var c={};
  var d=this.getParentEditor();
  this.commitContent(c);switch(c.type||"url"){case "url":
   var e=c.url&&c.url.protocol!=void 0?c.url.protocol:"http://";
   var h=c.url&&CKEDITOR.tools.trim(c.url.url)||"";
   a["data-cke-saved-href"]=h.indexOf("/")===0?h:e+h;break;case "anchor":e=c.anchor&&c.anchor.id;a["data-cke-saved-href"]="#"+(c.anchor&&c.anchor.name||
  e||"");break;case "email":
   var f=c.email;
   var e=f.address;
   switch(n){case "":case "encode":
    var h=encodeURIComponent(f.subject||"");
    var i=encodeURIComponent(f.body||"");
    var f=[];
    h&&f.push("subject="+h);i&&f.push("body="+i);f=f.length?"?"+f.join("&"):"";if(n=="encode"){e=["javascript:void(location.href='mailto:'+",t(e)];f&&e.push("+'",q(f),"'");e.push(")")}else e=["mailto:",e,f];break;default:e=e.split("@",2);f.name=e[0];f.domain=e[1];e=["javascript:",s(f)]}a["data-cke-saved-href"]=e.join("")}if(c.target)if(c.target.type==
  "popup"){for(var e=["window.open(this.href, '",c.target.name||"","', '"],j=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"],h=j.length,f=a => {c.target[a]&&j.push(a+"="+c.target[a])},i=0;i<h;i++)j[i]=j[i]+(c.target[j[i]]?"=yes":"=no");f("width");f("left");f("height");f("top");e.push(j.join(","),"'); return false;");a["data-cke-pa-onclick"]=e.join("");b.push("target")}else{c.target.type!="notSet"&&c.target.name?a.target=c.target.name:b.push("target");
  b.push("data-cke-pa-onclick","onclick")}if(c.adv){e=(d, e) => {var f=c.adv[d];f?a[e]=f:b.push(e)};e("advId","id");e("advLangDir","dir");e("advAccessKey","accessKey");c.adv.advName?a.name=a["data-cke-saved-name"]=c.adv.advName:b=b.concat(["data-cke-saved-name","name"]);e("advLangCode","lang");e("advTabIndex","tabindex");e("advTitle","title");e("advContentType","type");e("advCSSClasses","class");e("advCharset","charset");e("advStyles","style");e("advRel","rel")}e=d.getSelection();a.href=a["data-cke-saved-href"];
  if(this._.selectedElement){d=this._.selectedElement;h=d.data("cke-saved-href");f=d.getHtml();d.setAttributes(a);d.removeAttributes(b);c.adv&&(c.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector)&&d.addClass(d.getChildCount()?"cke_anchor":"cke_anchor_empty");if(h==f||c.type=="email"&&f.indexOf("@")!=-1){d.setHtml(c.type=="email"?c.email.address:a["data-cke-saved-href"]);e.selectElement(d)}delete this._.selectedElement}else{e=e.getRanges()[0];if(e.collapsed){d=new CKEDITOR.dom.text(c.type=="email"?
  c.email.address:a["data-cke-saved-href"],d.document);e.insertNode(d);e.selectNodeContents(d)}d=new CKEDITOR.style({element:"a",attributes:a});d.type=CKEDITOR.STYLE_INLINE;d.applyToRange(e);e.select()}
 },onLoad() {m.config.linkShowAdvancedTab||this.hidePage("advanced");m.config.linkShowTargetTab||this.hidePage("target")},onFocus() {var a=this.getContentElement("info","linkType");if(a&&a.getValue()=="url"){a=this.getContentElement("info","url");a.select()}}};
});