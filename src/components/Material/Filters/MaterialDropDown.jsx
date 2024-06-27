import React, { useCallback, useEffect, useState } from 'react';
import { Autocomplete, CircularProgress, Grid } from '@mui/material';
import {
  getChapterList,
  getCourseList,
  getSubjectList,
} from '../services/services';
import TextField from '../../shared/input/TextField';
import useFetcher from '../../../hooks/useFetcher';

const MaterialDropDown = ({ setApplyFilter, hideInput = false }) => {
  const [courses, setCourses] = useState([]);
  const [subject, setSubject] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [courseSearch, setCourseSearch] = useState('');
  const [subjectSearch, setSubjectSearch] = useState('');
  const [chapterSearch, setChapterSearch] = useState('');
  const { fetcher, getExecutorState } = useFetcher();
  const [open, setOpen] = useState(false);
  const loading = open && courses.length === 0;

  const [filters, setFilters] = useState({
    search: '',
    course: '',
    subject: '',
    chapter: '',
  });

  const fetchCourses = useCallback(() => {
    fetcher({
      key: 'course_list',
      executer: () => getCourseList({ search: courseSearch }),
      onSuccess: response => {
        const fetchedCourses = response?.data?.data?.data || [];
        setCourses(Array.isArray(fetchedCourses) ? fetchedCourses : []);
      },
    });
  }, [courseSearch, fetcher]);

  const fetchSubject = useCallback(() => {
    fetcher({
      key: 'course_list',
      executer: () =>
        getSubjectList({ search: courseSearch, course_id: filters?.course }),
      onSuccess: response => {
        const fetchedCourses = response?.data?.data?.data || [];
        setSubject(Array.isArray(fetchedCourses) ? fetchedCourses : []);
      },
    });
  }, [subjectSearch, fetcher]);

  const fetchChapter = useCallback(() => {
    fetcher({
      key: 'course_list',
      executer: () =>
        getChapterList({ search: courseSearch, subject_id: filters?.subject }),
      onSuccess: response => {
        const fetchedCourses = response?.data?.data?.data || [];
        setChapter(Array.isArray(fetchedCourses) ? fetchedCourses : []);
      },
    });
  }, [subjectSearch, fetcher]);

  useEffect(() => {
    fetchCourses();
  }, [courseSearch]);

  useEffect(() => {
    fetchSubject();
  }, [filters?.course, subjectSearch]);

  useEffect(() => {
    fetchChapter();
  }, [chapterSearch, filters?.subject]);

  useEffect(() => {
    setApplyFilter(filters);
  }, [filters]);

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
        <Autocomplete
          id='asynchronous-demo'
          fullWidth
          sx={{
            '& .MuiInputBase-root': {
              padding: '0px',
            },
            '& .MuiInputBase-input': {
              border: 'none',
              padding: '7.5px 13px !important',
            },
          }}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          isOptionEqualToValue={(option, value) => option?.id === value?.id}
          getOptionLabel={option => option?.name}
          options={courses}
          loading={loading}
          onChange={(event, newValue) => {
            setFilters(prevFilters => ({
              ...prevFilters,
              course: newValue?.id || '',
            }));
          }}
          renderInput={params => (
            <TextField
              onChange={(event, newValue) =>
                setCourseSearch(event.target.value)
              }
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item sm={6} md={3} xs={12}>
        <Autocomplete
          id='asynchronous-demo1'
          fullWidth
          sx={{
            '& .MuiInputBase-root': {
              padding: '0px',
            },
            '& .MuiInputBase-input': {
              border: 'none',
              padding: '7.5px 13px !important',
            },
          }}
          isOptionEqualToValue={(option, value) => option?.id === value?.id}
          getOptionLabel={option => option?.name}
          options={subject}
          onChange={(event, newValue) => {
            setFilters(prevFilters => ({
              ...prevFilters,
              subject: newValue?.id || '',
            }));
          }}
          renderInput={params => (
            <TextField
              onChange={(event, newValue) =>
                setSubjectSearch(event.target.value)
              }
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item sm={6} md={3} xs={12}>
        <Autocomplete
          id='asynchronous-demo2'
          fullWidth
          sx={{
            '& .MuiInputBase-root': {
              padding: '0px',
            },
            '& .MuiInputBase-input': {
              border: 'none',
              padding: '7.5px 13px !important',
            },
          }}
          isOptionEqualToValue={(option, value) => option?.id === value?.id}
          getOptionLabel={option => option?.name}
          options={subject}
          onChange={(event, newValue) => {
            setFilters(prevFilters => ({
              ...prevFilters,
              chapter: newValue?.id || '',
            }));
          }}
          renderInput={params => (
            <TextField
              onChange={(event, newValue) =>
                setChapterSearch(event.target.value)
              }
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default MaterialDropDown;
