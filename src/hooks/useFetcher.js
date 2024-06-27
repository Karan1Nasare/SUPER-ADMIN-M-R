import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/context-store';

const useFetcher = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const [Store, StoreDispatch] = useStore();

  const fetcher = async ({
    key,
    executer,
    onFailureRoute,
    onSuccessRoute,
    showSuccessToast = true,
    showErrorToast = true,
    navigationFailure = false,
    ErrorIcon,
    SuccessIcon,
    onSuccess,
    onFailure,
    ToastMessage,
  }) => {
    setState(prevState => ({
      ...prevState,
      [key]: { isLoading: true, error: null },
    }));

    try {
      const response = await executer();
      if (response.status === 200) {
        onSuccess?.(response);
        if (showSuccessToast) {
          toast.dismiss();
          toast.success(ToastMessage || response.data?.message, {
            position: 'top-right',
            icon: SuccessIcon,
          });
        }
        if (onSuccessRoute) {
          navigate(onSuccessRoute, { replace: true });
        }

        // Reset the state only if the request succeeds
        setState(prevState => ({
          ...prevState,
          [key]: { isLoading: false, error: null },
        }));
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        StoreDispatch({ type: 'RemoveState' });
        return;
      }
      let errorMessage = 'Something went wrong';
      onFailure?.(error);
      if (error?.response?.status === 429) {
        return;
      }
      if (error?.response?.data?.[0]?.message) {
        errorMessage = error.response.data[0].message;
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      if (showErrorToast) {
        toast.dismiss();
        toast.error(ToastMessage || errorMessage, {
          position: 'top-right',
          icon: ErrorIcon,
        });
      }

      if (onFailureRoute && navigationFailure) {
        navigate(onFailureRoute, { replace: true });
      }

      setState(prevState => ({
        ...prevState,
        [key]: { isLoading: false, error: errorMessage },
      }));
    } finally {
      setState(prevState => ({
        ...prevState,
        [key]: { isLoading: false, error: prevState[key]?.error || null },
      }));
    }
  };

  const getExecutorState = useCallback(
    key => state[key] || { isLoading: false, error: null },
    [state],
  );

  return {
    fetcher,
    getExecutorState,
  };
};

export default useFetcher;
