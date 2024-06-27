import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './ckeditor-styles.css';

const MrCKEditor = () => {
  const [editorData, setEditorData] = useState('');

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleChange}
        config={{
          toolbar: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'uploadImage',
            'undo',
            'redo',
            'fontColor',
            'fontBackgroundColor',
          ],
          toolbarLocation: 'bottom',
          // You might need to extend or build a custom build to add more plugins if required
        }}
        style={{ minHeight: '90px' }}
      />
      <div style={{ marginTop: '20px' }}>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div>
    </div>
  );
};

export default MrCKEditor;
