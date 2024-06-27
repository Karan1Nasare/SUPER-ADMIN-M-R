/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Stack } from '@mui/system';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import RichTextEditor from '../../shared/RichTextEditor';

const TextEditor = ({ value }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Function to get the content from the editor state
  const getContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return JSON.stringify(rawContentState);
  };
  // Function to handle editor state change
  const handleChange = newEditorState => {
    setEditorState(newEditorState);
    getContent();
  };

  return (
    <RichTextEditor />
    // <Stack
    //   sx={{
    //     '& .demo-wrapper': {
    //       display: 'flex',
    //       flexDirection: 'column-reverse',
    //       padding: '0px',
    //       border: '1px solid #343B4F',
    //       borderRadius: '5px',
    //       minHeight: '150px',
    //     },
    //     '& .Text-Editor-wrapper': {
    //       color: 'white',
    //       padding: '10px',
    //       minHeight: 'calc(200px - 83px)',
    //       width: '100%',
    //     },
    //     '& .text-editor-toolbar': {
    //       background: 'transparent',
    //       border: 'none',
    //     },
    //   }}
    // >
    //   <Editor
    //     wrapperClassName='demo-wrapper'
    //     editorClassName='Text-Editor-wrapper'
    //     toolbarClassName='text-editor-toolbar'
    //     toolbar={{
    //       options: ['inline', 'list', 'textAlign'],
    //       textAlign: {
    //         options: ['left'],
    //       },
    //     }}
    //     editorState={editorState}
    //     onEditorStateChange={handleChange} //
    //   />
    // </Stack>
  );

  // return (
  //   <Stack
  //     sx={{
  //       '& .demo-wrapper': {
  //         display: 'flex',
  //         flexDirection: 'column-reverse',
  //         padding: '0px',
  //         border: '1px solid #343B4F',
  //         borderRadius: '5px',
  //         minHeight: '150px',
  //       },
  //       '& .Text-Editor-wrapper': {
  //         color: 'white',
  //         padding: '10px',
  //         minHeight: 'calc(200px - 83px)',
  //         width: '100%',
  //       },
  //       '& .text-editor-toolbar': {
  //         background: 'transparent',
  //         border: 'none',
  //       },
  //     }}
  //   >
  //     <Editor
  //       wrapperClassName='demo-wrapper'
  //       editorClassName='Text-Editor-wrapper'
  //       toolbarClassName='text-editor-toolbar'
  //       toolbar={{
  //         options: ['inline', 'list', 'textAlign'],
  //         textAlign: {
  //           options: ['left'],
  //         },
  //       }}
  //       editorState={editorState}
  //       onEditorStateChange={handleChange} //
  //     />
  //   </Stack>
};
export default TextEditor;
