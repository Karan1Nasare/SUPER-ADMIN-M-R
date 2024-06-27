import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BronzePlanImage from '../../../assets/images/bronze-plan.png'; // Ensure this path is correct
import GoldPlanImage from '../../../assets/images/gold-plan.png';
import SilverPlanImage from '../../../assets/images/silver-plan.png';
import URLS from '../../../constants/api'; // Ensure this path and content are correct
import { APIClient } from '../../../utilities/axios-client';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/service';

const useAddPlan = () => {
  const { fetcher, getExecutorState } = useFetcher();
  const { addPlan } = services();
  const navigate = useNavigate();

  // add plan
  const onAddPlan = useCallback(async plan => {
    console.log('🚀 ~ onAddPlan ~ plan:', plan);
    try {
      fetcher({
        key: 'add-plan',
        executer: () => addPlan(plan),
        onSuccess: response => {
          console.log('rresponse: ', response);
          navigate('/plan');
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  return { onAddPlan };
};

export default useAddPlan;
