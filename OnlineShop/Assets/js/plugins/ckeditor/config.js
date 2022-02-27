/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';

    //config.extraPlugins = 'syntaxhighlight';
    config.syntaxhighlight_lang = 'csharp';
    config.syntaxhighlight_hideControls = true;
    config.language = 'vi';

    config.filebrowserBrowseUrl = "/Assets/js/plugins/ckfinder/ckfinder.html";
    config.filebrowserBrowseUrl = "/Assets/js/plugins/ckfinder/ckfinder.html";
    config.filebrowserImageUrl = "/Assets/js/plugins/ckfinder/ckfinder.html?type=Images";
    config.filebrowserFlashUrl = "/Assets/js/plugins/ckfinder/ckfinder.html?type=Flash";
    config.filebrowserUploadUrl = "/Assets/js/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files";
    config.filebrowserImageUploadUrl = "/Assets/js/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images";
    config.filebrowserFlashUploadUrl = "/Assets/js/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash";

    //config.extraPlugins = 'youtube';
    //config.youtube_responsive = true;
    CKFinder.setupCKEditor(null, '/Assets/js/plugins/ckfinder/');

};
