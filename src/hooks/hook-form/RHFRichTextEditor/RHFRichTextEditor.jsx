import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles/styles.css';
import { Controller, useFormContext } from 'react-hook-form';

const RHFRichTextEditor = ({
  name,
  helperText,
  placeholder,
  sx,
  required = false,
  defaultValue,
  ...other
}) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  console.log('name', name);
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: required, message: `This field is required` },
      }}
      render={({ props, fieldState: { error } }) => (
        <CKEditor
          {...props}
          editor={ClassicEditor}
          //   data={editorData}
          //   onChange={handleChange}
          {...register(name || 'description')}
          placeholder={placeholder}
          config={{
            // plugins: [Underline, ...ClassicEditor.defaultConfig.plugins],
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
            // You might need to extend or build a custom build to add more plugins if required
          }}
          style={{ minHeight: '90px' }}
          {...other}
        />
      )}
    />
  );
};

export default RHFRichTextEditor;
