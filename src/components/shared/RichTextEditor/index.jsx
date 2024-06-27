import React, { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles/styles.css';

const stripHtmlTags = html => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const RichTextEditor = ({ value, onChange, ...styles }) => {
  const editorRef = useRef(); // Adding a ref to store the editor instance

  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onReady={editor => {
        // Setting the ref when the editor is ready
        editorRef.current = editor;
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        const plainText = stripHtmlTags(data);
        onChange(data);
      }}
      config={{
        toolbar: [
          'bold',
          'italic',
          'underline',
          'numberedList',
          'link',
          'uploadImage',
          'emoji',
        ],
        toolbarLocation: 'bottom',
      }}
      style={{ ...styles, minHeight: '90px' }}
    />
  );
};

export default RichTextEditor;
