/** This file is part of KCFinder project
  *
  *      @desc User Agent jQuery Plugin
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Pavel Tzonkov <sunhater@sunhater.com>
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

(($ => {
    $.agent = {};

    var agent = " " + navigator.userAgent;

    var patterns = [
        {
            expr: / [a-z]+\/[0-9a-z\.]+/ig,
            delim: "/"
        }, {
            expr: / [a-z]+\s+[0-9a-z\.]+/ig,
            delim: /\s+/,
            keys: ["opera", "msie", "firefox", "android"]
        }, {
            expr: /[ \/\(]([a-z0-9_]+)[ \;\)\/]/ig,
            keys: "i386|i486|i586|i686|x86|x64|x86_64|intel|ppc|powerpc|windows|macintosh|darwin|unix|linux|sunos|android|iphone|ipad|ipod|amiga|amigaos|beos|wii|playstation|gentoo|fedora|slackware|ubuntu|archlinux|debian|mint|mageia|mandriva|freebsd|openbsd|netbsd|solaris|opensolaris|x11|mobile".split('|'),
            sub: "platform"
        }
    ];

    $.each(patterns, (i, pattern) => {
        var elements = agent.match(pattern.expr);
        if (elements === null)
            return;
        $.each(elements, (j, ag) => {
            ag = ag.replace(/^\s+/, "").toLowerCase();
            var key = ag.replace(pattern.expr, "$1");
            var val = true;
            if (typeof pattern.delim != "undefined") {
                ag = ag.split(pattern.delim);
                key = ag[0];
                val =  ag[1];
            }

            if (typeof pattern.keys != "undefined") {
                var exists = false;
                for (k = 0; k < pattern.keys.length; k++)
                    if (pattern.keys[k] == key) {
                        exists = true;
                        break;
                    }
                if (!exists)
                    return;
            }

            if (typeof pattern.sub != "undefined") {
                if (typeof $.agent[pattern.sub] != "object")
                    $.agent[pattern.sub] = {};
                if (typeof $.agent[pattern.sub][key] == "undefined")
                    $.agent[pattern.sub][key] = val;

            } else if (typeof $.agent[key] == "undefined")
                $.agent[key] = val;
        });
    });
}))(jQuery);