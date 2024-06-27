// /* eslint-disable import/no-named-as-default */
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../constants/api'; // Ensure this path and content are correct
import { APIClient } from '../../../utilities/axios-client';

const useAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { API } = APIClient();
  const navigate = useNavigate();

  const deleteAdmin = useCallback(async id => {
    try {
      const response = await API('DELETE', URLS.DELETE_ADMIN(id), true);
      navigate('/admins');
    } catch (err) {
      console.error('Error while deleting admin', err);
    }
  }, []);

  const updateUserName = useCallback(async postData => {
    try {
      const formData = new FormData();
      formData.append('username', postData);
      const response = await API(
        'POST',
        URLS.UPDATE_USERNAME(),
        formData,
        true,
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updatePhoneNo = useCallback(async postData => {
    try {
      const formData = new FormData();
      formData.append('phone_number', postData);
      const response = await API('POST', URLS.UPDATE_PHONE(), formData, true);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const updateEmail = useCallback(async postData => {
    try {
      const formData = new FormData();
      formData.append('email', postData);
      const response = await API('POST', URLS.UPDATE_EMAIL(), formData, true);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const updateStudentCount = useCallback(async (id, studentCount) => {
    try {
      const formData = new FormData();
      formData.append('_method', 'POST');
      formData.append('student_count', studentCount);
      const response = await API(
        'POST',
        URLS.UPDATE_STUDENT_COUNT(id),
        formData,
        true,
      );
      if (response.status !== 200) {
        throw new Error('Failed to update student count');
      }
      // Handle successful response if needed
    } catch (err) {
      console.error('Error updating student count:', err);
      // Optionally handle error (e.g., set an error state or show a message)
    }
  }, []);

  const makePayment = useCallback(
    async paymentData => {
      setLoading(true);
      try {
        const response = await API('POST', URLS.MAKE_PAYMENT(), paymentData);
        if (response.data && response.data.data) {
          alert('Payment processed successfully');
          // Optionally, update state or handle the successful payment
        } else {
          throw new Error('Failed to process payment');
        }
      } catch (err) {
        console.error('Error processing payment:', err);
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [API],
  );

  const addNewAdmin = useCallback(async PostData => {
    setLoading(true);
    try {
      // Create a new FormData object
      const formData = new FormData();

      // Append each field to the FormData object
      Object.keys(PostData).forEach(key => {
        formData.append(key, PostData[key]);
      });

      // Use FormData with your API call
      const response = await API('POST', URLS.ADD_ADMIN(), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.success) {
        alert('Admin added successfully');
        // Optionally update the state with the new admin
      } else {
        throw new Error('Failed to add the admin');
      }
    } catch (err) {
      console.error('Error adding Admin:', err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePassword = useCallback(async postData => {
    try {
      const formData = new FormData();
      formData.append('current_password', postData.current_password);
      formData.append('new_password', postData.new_password);
      formData.append(
        'new_password_confirmation',
        postData.new_confirm_password,
      );
      const response = await API(
        'POST',
        URLS.UPDATE_PASSWORD(),
        formData,
        true,
      );
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    loading,
    error,
    addNewAdmin,
    deleteAdmin,
    updateUserName,
    updateEmail,
    updatePhoneNo,
    updatePassword,
    updateStudentCount,
    makePayment,
  };
};

export default useAdmin;
