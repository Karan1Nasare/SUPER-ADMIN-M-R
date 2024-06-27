import React, { useCallback, useEffect, useState } from 'react';
import services from './serviceFunctions/services';
import useFetcher from '../../../hooks/useFetcher';

const ITEMS_PER_PAGE = 6;

const useFeatures = () => {
  const { getFeatures, editfeatureDataById, deleteFeatureById } = services();
  const { fetcher } = useFetcher();

  const [featureList, setFeatureList] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openEditDialog = () => {
    setIsEditOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const openPreviewDialog = () => {
    setIsPreviewOpen(true);
  };

  const closePreviewDialog = () => {
    setIsPreviewOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };

  const fetchFeatureList = async (pageSize = '') => {
    setLoading(true);
    try {
      fetcher({
        key: 'features',
        executer: () => getFeatures(searchTerm, pageSize),
        onSuccess: response => {
          setFeatureList(response?.data?.data?.data || []);
        },
        showSuccessToast: false,
      });
      setLoading(false);
    } catch (err) {
      setError('Error while fetching features');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatureList();
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setCurrentPage(1); // Reset page number when clearing search
    } else {
      setCurrentPage(1); // Reset page number when performing a search
    }
  }, [searchTerm]);

  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = featureList.slice(firstCardIndex, lastCardIndex);

  const totalPages = Math.ceil(featureList.length / ITEMS_PER_PAGE);

  const handleSearchChange = value => {
    setSearchTerm(value);
  };

  const EditFeature = useCallback(async (id, feature) => {
    try {
      fetcher({
        key: 'features',
        executer: () => editfeatureDataById(id, feature),
        onSuccess: response => {
          fetchFeatureList(); // Fetch updated features after edit
        },
      });
    } catch (err) {
      setError('Error while editing feature');
    }
  }, []);

  const DeleteFeatureById = useCallback(async id => {
    try {
      fetcher({
        key: 'delete-feature',
        executer: () => deleteFeatureById(id),
        onSuccess: response => {
          fetchFeatureList(); // Fetch updated features after delete
        },
      });
    } catch (err) {
      setError('Error while deleting feature');
    }
  }, []);

  const confirmDeleteHandler = id => {
    if (id) {
      DeleteFeatureById(id);
    }
    setOpenDelete(false);
  };

  return {
    data: currentItems,
    isPreviewOpen,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems: featureList.length,
    currentPage,
    totalPages,
    ITEMS_PER_PAGE,
    loading,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    openPreviewDialog,
    closePreviewDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    error,
    EditFeature,
  };
};

export default useFeatures;
