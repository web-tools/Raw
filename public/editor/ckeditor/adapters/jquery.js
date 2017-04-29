/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
((a => {CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.config.jqueryOverrideVal;"undefined"!=typeof a&&(a.extend(a.fn,{ckeditorGet() {var a=this.eq(0).data("ckeditorInstance");if(!a)throw"CKEditor is not initialized yet, use ckeditor() with a callback.";return a},ckeditor(g, d) {
 if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");if(!a.isFunction(g))var k=d,d=g,g=k;
 var i=[];
 var d=d||{};
 this.each(function(){
  var b=
  a(this);

  var c=b.data("ckeditorInstance");
  var f=b.data("_ckeditorInstanceLock");
  var h=this;
  var j=new a.Deferred;
  i.push(j.promise());if(c&&!f)g&&g.apply(c,[this]),j.resolve();else if(f)c.once("instanceReady",() => {setTimeout(function(...args) {c.element?(c.element.$==h&&g&&g.apply(c,[h]),j.resolve()):setTimeout(args.callee,100)},0)},null,null,9999);else{if(d.autoUpdateElement||"undefined"==typeof d.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)d.autoUpdateElementJquery=!0;d.autoUpdateElement=!1;b.data("_ckeditorInstanceLock",
  !0);c=a(this).is("textarea")?CKEDITOR.replace(h,d):CKEDITOR.inline(h,d);b.data("ckeditorInstance",c);c.on("instanceReady",d => {var e=d.editor;setTimeout(function(...args) {if(e.element){d.removeListener();e.on("dataReady",() => {b.trigger("dataReady.ckeditor",[e])});e.on("setData",a => {b.trigger("setData.ckeditor",[e,a.data])});e.on("getData",a => {b.trigger("getData.ckeditor",[e,a.data])},999);e.on("destroy",() => {b.trigger("destroy.ckeditor",[e])});e.on("save",() => {a(h.form).submit();
  return!1},null,null,20);if(e.config.autoUpdateElementJquery&&b.is("textarea")&&a(h.form).length){var c=() => {b.ckeditor(() => {e.updateElement()})};a(h.form).submit(c);a(h.form).bind("form-pre-serialize",c);b.bind("destroy.ckeditor",() => {a(h.form).unbind("submit",c);a(h.form).unbind("form-pre-serialize",c)})}e.on("destroy",() => {b.removeData("ckeditorInstance")});b.removeData("_ckeditorInstanceLock");b.trigger("instanceReady.ckeditor",[e]);g&&g.apply(e,[h]);j.resolve()}else setTimeout(args.callee,
  100)},0)},null,null,9999)}
 });var f=new a.Deferred;this.promise=f.promise();a.when.apply(this,i).then(() => {f.resolve()});this.editor=this.eq(0).data("ckeditorInstance");return this
}}),CKEDITOR.config.jqueryOverrideVal&&(a.fn.val=CKEDITOR.tools.override(a.fn.val,g => function(d){
 if(arguments.length){
  var k=this;
  var i=[];

  var f=this.each(function(){var b=a(this),c=b.data("ckeditorInstance");if(b.is("textarea")&&c){var f=new a.Deferred;c.setData(d,() => {f.resolve()});i.push(f.promise());
  return!0}return g.call(b,d)});

  if(i.length){var b=new a.Deferred;a.when.apply(this,i).done(() => {b.resolveWith(k)});return b.promise()}return f
 }
 var f=a(this).eq(0);
 var c=f.data("ckeditorInstance");
 return f.is("textarea")&&c?c.getData():g.call(f)
})))}))(window.jQuery);