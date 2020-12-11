import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import imageUploadHandler from '../services/uploadImage';
import { FONT_FORMATS, PLUGINS, TOOLBAR } from './editor-configs';
import { editorSetup } from '../services/editor-setup';

const HTMLEditor = () => {
  const isDark = false;

  return (
    <Editor
      initialValue='Start typing here'
      init={{
        height: '100vh',
        menubar: true,
        browser_spellcheck: false,
        plugins: PLUGINS,
        external_plugins: {
          tiny_mce_wiris:
            'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js'
        },
        font_formats: FONT_FORMATS,
        toolbar: TOOLBAR,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        toolbar_sticky: true,
        toolbar_mode: 'sliding',
        quickbars_selection_toolbar:
          'bold italic | quicklink quickimage quicktable',
        skin: isDark ? 'oxide-dark' : 'oxide',
        images_upload_handler: imageUploadHandler,
        codesample_content_css:
          'http://ourcodeworld.com/material/css/prism.css',
        setup: editorSetup,
        content_css: '/blog-editor/tinymce/css/content.css',
        templates: [
          {
            title: 'Table',
            description: 'Fixed header table',
            url: '/blog-editor/tinymce/templates/table.html'
          }
        ]
      }}
    />
  );
};

export default HTMLEditor;
