import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient, APIClient2 } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/services';

const useAddMaterial = () => {
  const navigate = useNavigate();
  const { addCourseStd, addSubject, addChapter } = services();
  const { fetcher, getExecutorState } = useFetcher();

  // add course
  const AddCourseStd = useCallback(async course => {
    console.log('🚀 ~ AddCourseStd ~ course:', course);
    try {
      fetcher({
        key: 'add-courseStd',
        executer: () => addCourseStd(course),
        onSuccessRoute: '/material',
        showSuccessToast: false,
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  // add subject
  const AddSubject = useCallback(async subject => {
    try {
      fetcher({
        key: 'add-subject',
        executer: () => addSubject(subject),
        onSuccessRoute: '/material',
        showSuccessToast: false,
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  // add chapter
  const AddChapter = useCallback(async chapter => {
    try {
      fetcher({
        key: 'add-chapter',
        executer: () => addChapter(chapter),
        onSuccessRoute: '/material',
        showSuccessToast: false,
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  return {
    AddCourseStd,
    AddSubject,
    AddChapter,
  };
};

export default useAddMaterial;
