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

const ITEMS_PER_PAGE = 6;
const usePlan = () => {
  const { API } = APIClient();
  const { fetcher, getExecutorState } = useFetcher();
  const { editPlanId, getPlan, addPlan, deletePlanById } = services();
  const navigate = useNavigate();

  const [planData, setPlanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = planData?.slice(firstCardIndex, lastCardIndex);

  const fetchData = async (pageSize = '') => {
    try {
      fetcher({
        key: 'getplan',
        showSuccessToast: false,
        executer: () => getPlan(searchTerm, pageSize),
        onSuccess: response => {
          if (Array.isArray(response?.data?.data?.data)) {
            const fetchedPlans = response.data.data.data.map(plan => {
              let badgeImage;
              switch (plan.plan_type) {
                case 'Gold':
                  badgeImage = GoldPlanImage;
                  break;
                case 'Silver':
                  badgeImage = SilverPlanImage;
                  break;
                default:
                  badgeImage = BronzePlanImage;
                  break;
              }

              return {
                data: {
                  plan,
                  badge: badgeImage,
                  features: [
                    '100 Student',
                    '1 Admin',
                    '1 Organization',
                    '10 Staff',
                  ],
                },
              };
            });
            setPlanData(fetchedPlans);
          }
        },
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    setCurrentPage(1); // Reset page number when performing a search
  }, [searchTerm, planData]);

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

  const deletePlan = useCallback(async id => {
    try {
      fetcher({
        key: 'delete-plan',
        executer: () => deletePlanById(id),
        onSuccess: response => {
          fetchData();
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  return {
    planData: currentItems,
    loading,
    error,
    deletePlan,
    onAddPlan,
    totalShowItems: planData?.length,
    ITEMS_PER_PAGE,
    currentPage,
    searchTerm,
    setCurrentPage,
    setSearchTerm,
  };
};

export default usePlan;
