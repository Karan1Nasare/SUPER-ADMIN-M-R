import React, { useCallback, useEffect, useState } from 'react';
import { Autocomplete, CircularProgress, Grid } from '@mui/material';
import {
  getChapterList,
  getCourseList,
  getSubjectList,
} from '../services/services';
import TextField from '../../shared/input/TextField';
import useFetcher from '../../../hooks/useFetcher';
import MenuItem from '../../shared/menuitem/MenuItem';
import useCourseStd from '../hooks/useCourseStd';
import useSubject from '../hooks/useSubject';
import useChapter from '../hooks/useChapter';

const MaterialDropDown2 = ({
  setApplyFilter,
  hideInput = false,
  selectedFilters,
}) => {
  console.log('first', selectedFilters);
  const [courses, setCourses] = useState([]);
  const [subject, setSubject] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [courseSearch, setCourseSearch] = useState('');
  const [subjectSearch, setSubjectSearch] = useState('');
  const [chapterSearch, setChapterSearch] = useState('');
  const { fetcher, getExecutorState } = useFetcher();
  const [open, setOpen] = useState(false);
  const loading = open && courses.length === 0;
  const { courseStdList } = useCourseStd();
  const [filters, setFilters] = useState({
    search: '',
    course: '',
    subject: '',
    chapter: '',
  });
  const { fetchSubjectList, subjectList } = useSubject();

  const { chapterList, fetchChapterList } = useChapter();

  console.log('subjectList', courseStdList, subjectList, chapterList, filters);
  useEffect(() => {
    setApplyFilter(filters);
  }, [filters]);

  useEffect(() => {
    (async () => {
      await fetchSubjectList(filters?.course?.id);
    })();
  }, [filters?.course, selectedFilters?.course]);

  useEffect(() => {
    (async () => {
      await fetchChapterList(filters?.course?.id, filters?.subject?.id);
    })();
  }, [filters?.subject, selectedFilters?.subject]);

  useEffect(() => {
    console.log('in use effect');
    setFilters(prevValue => ({
      ...prevValue,
      course: selectedFilters?.course,
      subject: selectedFilters?.subject,
      chapter: selectedFilters?.chapter,
    }));
  }, [
    selectedFilters?.chapter,
    selectedFilters?.course,
    selectedFilters?.subject,
  ]);
  const filterMap = {
    subject: subjectList,
    course: courseStdList,
    chapter: chapterList,
  };

  const onFilterChanged = ({ name, value }) => {
    setFilters(prevValue => ({
      ...prevValue,
      [name]: filterMap[name].filter(item => item.id === value)[0],
    }));
  };

  return (
    <Grid container spacing={2} sx={{ flex: 1 }}>
      {!hideInput && (
        <Grid item sm={6} md={3} xs={12}>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            value={courseSearch}
            onChange={e => setCourseSearch(e.target.value)}
            className='px-3 py-3 w-full h-full bg-secondary__fill__dark text-white rounded-md'
          />
        </Grid>
      )}
      <Grid item sm={6} md={3} xs={12}>
        {console.log('filterIdTrack', filters?.course?.id)}
        <TextField
          select
          sx={{
            width: '100%',
            textAlign: 'left',
            padding: '1px',
          }}
          name='course'
          onChange={e => onFilterChanged(e.target)}
          value={filters?.course?.id || ''}
          id={filters?.course?.id || ''}
        >
          <MenuItem value='' disabled>
            Select Standard
          </MenuItem>
          {courseStdList?.map((option, i) => (
            <MenuItem key={option.id} value={option.id}>
              {option?.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item sm={6} md={3} xs={12}>
        <TextField
          select
          sx={{
            width: '100%',
            textAlign: 'left',
            padding: '1px',
          }}
          name='subject'
          value={filters?.subject?.id || ''}
          onChange={e => onFilterChanged(e.target)}
        >
          <MenuItem value='' disabled>
            Select Subject
          </MenuItem>
          {subjectList?.map((option, i) => (
            <MenuItem
              key={i}
              value={option.id}
              // selected={option.id === filters?.subject?.id}
              // defaultValue={filters.subject}
            >
              {option?.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item sm={6} md={3} xs={12}>
        <TextField
          select
          sx={{
            width: '100%',
            textAlign: 'left',
            padding: '1px',
          }}
          name='chapter'
          onChange={e => onFilterChanged(e.target)}
          value={filters?.chapter?.id || ''}
        >
          <MenuItem value='' disabled>
            Select Chapter
          </MenuItem>
          {chapterList?.map((option, i) => (
            <MenuItem key={i} value={option.id}>
              {option?.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default MaterialDropDown2;
