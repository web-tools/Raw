/** This file is part of KCFinder project
  *
  *      @desc Upload files using drag and drop
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Forum user (updated by Pavel Tzonkov)
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

_.initDropUpload = () => {
    if ((typeof(XMLHttpRequest) == "undefined") ||
        (typeof(document.addEventListener) == "undefined") ||
        (typeof(File) == "undefined") ||
        (typeof(FileReader) == "undefined")
    )
        return;

    if (!XMLHttpRequest.prototype.sendAsBinary) {
        XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
            var ords = Array.prototype.map.call(datastr, x => x.charCodeAt(0) & 0xff);
            var ui8a = new Uint8Array(ords);
            this.send(ui8a.buffer);
        }
    }

    var uploadQueue = [];
    var uploadInProgress = false;
    var filesCount = 0;
    var errors = [];
    var files = $('#files');
    var folders = $('div.folder > a');
    var boundary = "------multipartdropuploadboundary" + (new Date).getTime();
    var currentFile;

    var filesDragOver = e => {
        if (e.preventDefault) e.preventDefault();
        $('#files').addClass('drag');
        return false;
    };

    var filesDragEnter = e => {
        if (e.preventDefault) e.preventDefault();
        return false;
    };

    var filesDragLeave = e => {
        if (e.preventDefault) e.preventDefault();
        $('#files').removeClass('drag');
        return false;
    };

    var filesDrop = e => {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        $('#files').removeClass('drag');
        if (!$('#folders span.current').first().parent().data('writable')) {
            _.alert("Cannot write to upload folder.");
            return false;
        }
        filesCount += e.dataTransfer.files.length
        for (var i = 0; i < e.dataTransfer.files.length; i++) {
            var file = e.dataTransfer.files[i];
            file.thisTargetDir = _.dir;
            uploadQueue.push(file);
        }
        processUploadQueue();
        return false;
    };

    var folderDrag = e => {
        if (e.preventDefault) e.preventDefault();
        return false;
    };

    var folderDrop = (e, dir) => {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        if (!$(dir).data('writable')) {
            _.alert(_.label("Cannot write to upload folder."));
            return false;
        }
        filesCount += e.dataTransfer.files.length
        for (var i = 0; i < e.dataTransfer.files.length; i++) {
            var file = e.dataTransfer.files[i];
            file.thisTargetDir = $(dir).data('path');
            uploadQueue.push(file);
        }
        processUploadQueue();
        return false;
    };

    files.get(0).removeEventListener('dragover', filesDragOver, false);
    files.get(0).removeEventListener('dragenter', filesDragEnter, false);
    files.get(0).removeEventListener('dragleave', filesDragLeave, false);
    files.get(0).removeEventListener('drop', filesDrop, false);

    files.get(0).addEventListener('dragover', filesDragOver, false);
    files.get(0).addEventListener('dragenter', filesDragEnter, false);
    files.get(0).addEventListener('dragleave', filesDragLeave, false);
    files.get(0).addEventListener('drop', filesDrop, false);

    folders.each(function() {
        var folder = this;

        var dragOver = e => {
            $(folder).children('span.folder').addClass('context');
            return folderDrag(e);
        };

        var dragLeave = e => {
            $(folder).children('span.folder').removeClass('context');
            return folderDrag(e);
        };

        var drop = e => {
            $(folder).children('span.folder').removeClass('context');
            return folderDrop(e, folder);
        };

        this.removeEventListener('dragover', dragOver, false);
        this.removeEventListener('dragenter', folderDrag, false);
        this.removeEventListener('dragleave', dragLeave, false);
        this.removeEventListener('drop', drop, false);

        this.addEventListener('dragover', dragOver, false);
        this.addEventListener('dragenter', folderDrag, false);
        this.addEventListener('dragleave', dragLeave, false);
        this.addEventListener('drop', drop, false);
    });

    function updateProgress(evt) {
        var progress = evt.lengthComputable
            ? Math.round((evt.loaded * 100) / evt.total) + '%'
            : Math.round(evt.loaded / 1024) + " KB";
        $('#loading').html(_.label("Uploading file {number} of {count}... {progress}", {
            number: filesCount - uploadQueue.length,
            count: filesCount,
            progress
        }));
    }

    function processUploadQueue() {
        if (uploadInProgress)
            return false;

        if (uploadQueue && uploadQueue.length) {
            var file = uploadQueue.shift();
            currentFile = file;
            $('#loading').html(_.label("Uploading file {number} of {count}... {progress}", {
                number: filesCount - uploadQueue.length,
                count: filesCount,
                progress: ""
            }));
            $('#loading').css('display', "inline");

            var reader = new FileReader();
            reader.thisFileName = file.name;
            reader.thisFileType = file.type;
            reader.thisFileSize = file.size;
            reader.thisTargetDir = file.thisTargetDir;

            reader.onload = evt => {
                uploadInProgress = true;

                var postbody = '--' + boundary + '\r\nContent-Disposition: form-data; name="upload[]"';
                if (evt.target.thisFileName)
                    postbody += '; filename="' + $.$.utf8encode(evt.target.thisFileName) + '"';
                postbody += '\r\n';
                if (evt.target.thisFileSize)
                    postbody += "Content-Length: " + evt.target.thisFileSize + "\r\n";
                postbody += "Content-Type: " + evt.target.thisFileType + "\r\n\r\n" + evt.target.result + "\r\n--" + boundary + '\r\nContent-Disposition: form-data; name="dir"\r\n\r\n' + $.$.utf8encode(evt.target.thisTargetDir) + "\r\n--" + boundary + "\r\n--" + boundary + "--\r\n";

                var xhr = new XMLHttpRequest();
                xhr.thisFileName = evt.target.thisFileName;

                if (xhr.upload) {
                    xhr.upload.thisFileName = evt.target.thisFileName;
                    xhr.upload.addEventListener("progress", updateProgress, false);
                }
                xhr.open('post', _.baseGetData('upload'), true);
                xhr.setRequestHeader('Content-Type', "multipart/form-data; boundary=" + boundary);
                xhr.setRequestHeader('Content-Length', postbody.length);

                xhr.onload = e => {
                    $('#loading').css('display', "none");
                    if (_.dir == reader.thisTargetDir)
                        _.fadeFiles();
                    uploadInProgress = false;
                    processUploadQueue();
                    if (xhr.responseText.substr(0, 1) != "/")
                        errors[errors.length] = xhr.responseText;
                }

                xhr.sendAsBinary(postbody);
            };

            reader.onerror = evt => {
                $('#loading').css('display', "none");
                uploadInProgress = false;
                processUploadQueue();
                errors[errors.length] = _.label("Failed to upload {filename}!", {
                    filename: evt.target.thisFileName
                });
            };

            reader.readAsBinaryString(file);

        } else {
            filesCount = 0;
            var loop = setInterval(() => {
                if (uploadInProgress) return;
                boundary = "------multipartdropuploadboundary" + (new Date).getTime();
                uploadQueue = [];
                clearInterval(loop);
                if (currentFile.thisTargetDir == _.dir)
                    _.refresh();
                if (errors.length) {
                    _.alert(errors.join("\n"));
                    errors = [];
                }
            }, 333);
        }
    }
};
