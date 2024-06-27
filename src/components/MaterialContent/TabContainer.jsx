/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BasicDetails from './BasicDetails';
import Videos from './Videos';
import Images from './Images';
import ThreedModel from './ThreedModel';
import Documents from './Documents';
import QuestionBank from './QuestionBank';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import './styles/tabsStyles.css';
import MaxWidthDialog from './Preview';
import MaterialPreview from './MaterialPreview';
import useFetcher from '../../hooks/useFetcher';
import {
  AddMaterialContent,
  AddMaterialContent2,
  fetchMaterialData,
  updateMaterialContent,
} from '../../service/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer() {
  const tabCountIdx = 5;
  const [value, setValue] = useState(0);
  const [files, setFiles] = useState([
    { file: {}, src: '' },
    { file: {}, src: '' },
  ]);
  const [thumbnailImage, setThumbnailImage] = useState({ files: {}, src: '' });
  const [thumbnailVideo, setThumbnailVideo] = useState({ files: {}, src: '' });
  const [description, setDescription] = useState('');
  const [isUpload, setUpload] = useState(false);
  const [isVideoUpload, setVideoUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    course: '',
    subject: '',
    chapter: '',
  });
  const [error, setError] = useState({});
  const [details, setDetails] = useState('');
  const [fistStepFinished, setFistStepFinished] = useState(false);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [isApiSubmitting, setIsApiSubmitting] = useState(false);
  const [topicId, setTopicId] = useState('');
  const [materialId, setMaterialId] = useState();
  const [imagesFile, setImagesFile] = useState([]);
  const [documentFile, setDocumentFile] = useState([]);
  const [questionBankFile, setQuestionBankFile] = useState([]);
  const [threeDModel, setThreeDModel] = useState([]);

  const submitRef = useRef();
  const { state } = useLocation();
  const { fetcher } = useFetcher();
  const [videoFiles, setVideoFiles] = useState([]);

  const handleChange = (event, newValue) => {
    // if (newValue === 1 && !isValidForm) {
    //   return;
    // }
    setValue(newValue);
  };

  useEffect(() => {
    if (
      title &&
      description &&
      Object.entries(filters.course || {}).length > 0 &&
      Object.entries(filters.subject || {}).length > 0 &&
      Object.entries(filters.chapter || {}).length > 0
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [title, description, filters.course, filters.subject, filters.chapter]);

  useEffect(() => {
    // Edit Topic
    if (state?.id) {
      fetcher({
        key: 'basic_details',
        executer: () => fetchMaterialData(state.id),
        showSuccessToast: true,
        onFailure: err => {
          console.log('AddMaterialContent onFailure', err);
        },
        onSuccess: res => {
          console.log('AddMaterialContent onSuccess', res);
          if (res.data.code === 200) {
            setTopicId(res.data.data.course_id);
            const {
              course,
              subject,
              chapter,
              title: fetchTitle,
              thumb_image: fetchThumbnail,
              thumb_video: fetchVideo,
              description: fetchDesc,
            } = res.data.data;
            setFilters({
              course,
              subject,
              chapter,
            });
            setTitle(fetchTitle);
            setDescription(fetchDesc);
            setThumbnailImage({ files: '', src: fetchThumbnail?.url });
            const fileTemp = [...files];
            fileTemp[0] = { file: '', src: fetchThumbnail?.url };
            fileTemp[1] = { file: '', src: fetchVideo?.url };
            setThumbnailVideo({ file: '', src: fetchVideo?.url });
            setVideoUpload(true);
            setFiles(fileTemp);
            // setValue(1);
          }
        },
      });
    }
  }, [state?.id]);

  useEffect(() => {
    // Add SubTopic
    if (state && state?.parent_id) {
      fetcher({
        key: 'subTopic_basic_details',
        executer: () => fetchMaterialData(state?.parent_id),
        showSuccessToast: true,
        onFailure: err => {
          console.log('Subtopic AddMaterialContent onFailure', err);
        },
        onSuccess: res => {
          console.log('Subtopic AddMaterialContent onSuccess', res);
          if (res.data.code === 200) {
            const { course, subject, chapter } = res.data.data;
            setFilters({
              course,
              subject,
              chapter,
            });
          }
        },
      });
    }
  }, [state?.parent_id]);

  console.log('thumbnailImage', thumbnailImage, thumbnailVideo, topicId);
  const onNextButtonHandler = () => {
    if (isApiSubmitting) {
      return;
    }

    setIsApiSubmitting(true);

    const formData = new FormData();
    let data = {};

    switch (value) {
      case 0:
        formData.append('title', title);
        formData.append('description', description);
        formData.append('type', 'basic');
        formData.append('course_id', filters.course.id);
        formData.append('subject_id', filters.subject.id);
        formData.append('chapter_id', filters.chapter.id);
        formData.append('thumb_image', thumbnailImage?.file);
        formData.append('thumb_video', thumbnailVideo?.file);

        if (state?.parent_id) {
          formData.append('parent_id', state?.parent_id);
        }

        if (topicId) {
          formData.append('id', topicId);
          formData.append('_method', 'PUT');
        }

        fetcher({
          key: 'basic_details',
          executer: () =>
            topicId
              ? updateMaterialContent(formData, topicId)
              : AddMaterialContent(formData),
          showSuccessToast: true,
          onFailure: err => {
            console.log('AddMaterialContent onFailure', err);
            setIsApiSubmitting(false);
          },
          onSuccess: res => {
            console.log('AddMaterialContent onSuccess', res);
            if (res.data.code === 200) {
              setTopicId(res.data.data.course_id);
              setValue(1);
              setMaterialId(res.data.data.id);
              setIsApiSubmitting(false);
            } else {
              setIsApiSubmitting(false);
            }
          },
        });
        break;

      case 1:
        data = {
          material_id: materialId,
          content_type: 'video',
          type: 'content',
        };
        videoFiles.forEach((video, index) => {
          formData.append(`materialcontents[${index}]`, video?.file);
        });

        break;

      case 2:
        data = {
          material_id: materialId,
          content_type: 'image',
          type: 'content',
        };
        imagesFile.forEach((image, index) => {
          formData.append(`materialcontents[${index}]`, image?.files);
        });

        break;

      case 3:
        data = {
          material_id: materialId,
          content_type: 'document',
          type: 'content',
        };
        documentFile.forEach((document, index) => {
          formData.append(`materialcontents[${index}]`, document?.files);
        });

        break;

      case 4:
        data = {
          material_id: materialId,
          content_type: '3d_model',
          type: 'content',
        };
        threeDModel.forEach((model, index) => {
          formData.append(`materialcontents[${index}]`, model?.files);
        });

        break;

      default:
        console.error('Invalid value:', value);
        setIsApiSubmitting(false);
        return;
    }

    // Append the remaining form fields to the FormData object
    Object.entries(data).forEach(([key, contentValue]) => {
      formData.append(key, contentValue);
    });

    fetcher({
      key: 'content_creation',
      executer: () => AddMaterialContent2(formData),
      showSuccessToast: true,
      onFailure: err => {
        console.log('AddMaterialContent onFailure', err);
        setIsApiSubmitting(false);
      },
      onSuccess: res => {
        console.log('AddMaterialContent onSuccess', res);
        if (res.data.code === 200) {
          setValue(value + 1);
          if (value === tabCountIdx) {
            setShowPreviewDialog(true);
          }
          setIsApiSubmitting(false);
        } else {
          setIsApiSubmitting(false);
        }
      },
    });
  };

  const onPreviousChangeHandler = () => {
    if (value > 0) setValue(value - 1);
  };

  console.debug('thumbnailImage', thumbnailImage);
  console.debug('thumbnailVideo', thumbnailVideo);
  console.debug('files', files);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <div className='flex justify-start items-center ml-7'>
          <div className='h-1 w-7 bg-primary rotate-90'></div>
          <Typography variant='h5'>Content</Typography>
        </div>
        <div className=' p-8'>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='primary'
              indicatorColor='primary'
              variant='scrollable'
              aria-label='basic tabs example'
            >
              <Tab label='Basic Details' {...a11yProps(0)} />
              <Tab label='Videos' {...a11yProps(1)} />
              <Tab label='Images' {...a11yProps(2)} />
              <Tab label='Documents Content' {...a11yProps(3)} />
              <Tab label='Question Bank Content' {...a11yProps(4)} />
              <Tab label='3D Models' {...a11yProps(5)} />
            </Tabs>
          </Box>
          <div className='border-[0.6px] border-dropdown__border rounded-md'>
            <CustomTabPanel value={value} index={0}>
              <BasicDetails
                submitRef={submitRef}
                files={files}
                setFiles={setFiles}
                isUpload={isUpload}
                setUpload={setUpload}
                title={title}
                setTitle={setTitle}
                setVideoUpload={setVideoUpload}
                isVideoUpload={isVideoUpload}
                setFilters={setFilters}
                filters={filters}
                description={description}
                setDescription={setDescription}
                setThumbnailVideo={setThumbnailVideo}
                thumbnailVideo={thumbnailVideo}
                setThumbnailImage={setThumbnailImage}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Videos setVideoFiles={setVideoFiles} videoFiles={videoFiles} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Images setImagesFile={setImagesFile} imagesFile={imagesFile} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Documents
                setDocumentFile={setDocumentFile}
                documentFile={documentFile}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <QuestionBank
                setQuestionBankFile={setQuestionBankFile}
                questionBankFile={questionBankFile}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <ThreedModel
                setThreeDModel={setThreeDModel}
                threeDModel={threeDModel}
              />
            </CustomTabPanel>
          </div>
        </div>
        <div
          className={
            value > 0 ? 'flex justify-between mt-4' : 'flex justify-end mt-4'
          }
        >
          {value > 0 && (
            <Button
              variant='outline-add-button'
              onClick={onPreviousChangeHandler}
            >
              <img
                src={ArrowRight}
                style={{ marginRight: '1rem', transform: 'rotate(180deg)' }}
              ></img>
              Previous
            </Button>
          )}
          <Button
            variant='outline-add-button'
            onClick={() => onNextButtonHandler()}
            disabled={!isValidForm || isApiSubmitting}
          >
            {value === tabCountIdx ? 'Preview' : 'Next'}
            <img src={ArrowRight} style={{ marginLeft: '1rem' }}></img>
          </Button>
        </div>
      </Box>
      <MaterialPreview
        handleClose={() => setShowPreviewDialog(false)}
        open={showPreviewDialog}
        videoFile={videoFiles}
        imageFile={imagesFile}
        questionBankFile={questionBankFile}
        documentFile={documentFile}
        threeDModel={threeDModel}
        thumbnailImage={thumbnailImage}
        thumbnailVideo={thumbnailVideo}
        title={title}
        description={description}
      />
    </>
  );
}
