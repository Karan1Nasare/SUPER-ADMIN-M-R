import React, { useEffect, useState } from 'react';

const useLanguage = () => {
  const [languageData, setLanguageData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const record = Array.from({ length: 6 }, (_, index) => ({
          title: 'Hindi',
          id: index,
        }));
        setLanguageData(record);
      };
      fetchData();
    } catch (error) {
      console.log('error while fetching notifications', error);
    }
  }, []);
  return { languageData };
};

export default useLanguage;
