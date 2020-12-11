export const PLUGINS = [
  'print preview paste importcss searchreplace',
  'autolink autosave save directionality code',
  'visualblocks visualchars fullscreen image link',
  'media template codesample table charmap hr blockquote',
  'pagebreak nonbreaking anchor toc insertdatetime',
  'advlist lists wordcount imagetools textpattern',
  'noneditable help charmap quickbars emoticons'
];

export const TOOLBAR = [
  {
    name: 'history',
    items: ['undo', 'redo']
  },
  {
    name: 'font',
    items: ['fontselect', 'fontsizeselect', 'formatselect']
  },
  {
    name: 'formatting',
    items: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'forecolor',
      'backcolor',
      'removeformat',
      'superscript',
      'subscript'
    ]
  },
  {
    name: 'alignment',
    items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify']
  },
  {
    name: 'indentation',
    items: ['outdent', 'indent']
  },
  { name: 'lists', items: ['numlist', 'bullist'] },
  {
    name: 'elements',
    items: ['image', 'link', 'anchor', 'codesample', 'blockquote']
  },
  {
    name: 'misc',
    items: [
      'emoticons',
      'code',
      'fullscreen',
      'template',
      'toggleContent',
      'tiny_mce_wiris_formulaEditor',
      'downloadContent'
    ]
  }
];
