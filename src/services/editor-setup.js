import { download } from './download';

/**
 * Setup configuration for editor
 * @param {*} editor Editor instance
 */
export const editorSetup = (editor) => {
  editor.ui.registry.addIcon(
    'dark-light',
    '<svg width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>'
  );

  editor.ui.registry.addToggleButton('toggleContent', {
    icon: 'dark-light',
    tooltip: 'Toggle dark mode on off',
    onAction: () => {
      let doc = editor.editorManager.editors[0].contentWindow.document;
      let isDark = doc.body.classList.contains('dark-theme');
      if (isDark) {
        doc.body.classList.remove('dark-theme');
      } else {
        doc.body.classList.add('dark-theme');
      }
    }
  });
  editor.ui.registry.addButton('downloadContent', {
    icon: 'chevron-down',
    tooltip: 'Download content',
    onAction: () => {
      const contents = editor.getContent();
      download('content.html', contents);
    }
  });
};
