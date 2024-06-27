import React, { useEffect } from 'react';
import {
  Card,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Pagination,
  PaginationItem,
} from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify';
import { RHFTextField } from '../../../hooks/hook-form';
import colors from '../../../theme/colors';
import FeatureCard from '../../shared/FeatureCard';
import AnouncementImage from '../../../assets/announcement_card.png';
import useFetcher from '../../../hooks/useFetcher';
import { getfeatures } from '../../../service/features';

const data = Array.from({ length: 6 }, (_, index) => ({
  title: `Feature ${index}`,
  descriptionTitle: 'Total Amount:',
  descriptionMetaData: '600',
  image: AnouncementImage,
  id: index + 1,
}));
function SelectFeatureTab({ selectedCard, setSelectedCard }) {
  const { fetcher } = useFetcher();
  const [Featurelist, setFeaturelist] = React.useState([]);
  const [totalpage, settotalpage] = React.useState(0);
  const [checkedAll, setCheckedAll] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [DeSelectAll, setDeSelectAll] = React.useState(false);
  const handleSelectAll = (_, checked) => {
    setCheckedAll(checked);
    setDeSelectAll(false);
    if (checked) {
      setSelectedCard(Featurelist.map(item => item.id));
    }
  };
  const onChangeCardCheckbox = id => {
    setDeSelectAll(false);
    setCheckedAll(false);
    if (selectedCard.includes(id)) {
      setSelectedCard(selectedCard.filter(item => item !== id));
    } else {
      setSelectedCard([...selectedCard, id]);
    }
  };
  const handleDeselectAll = (_, checked) => {
    setDeSelectAll(checked);
    if (checked) {
      setCheckedAll(false);
      setSelectedCard([]);
    }
  };
  useEffect(() => {
    fetcher({
      key: 'getfeatures',
      executer: () => getfeatures({ page: 1, page_size: 10 }),
      onSuccess: res => {
        setFeaturelist(res.data?.data?.data);
        settotalpage(res.data?.data?.total);
      },
      showSuccessToast: false,
    });
  }, []);

  const handlePageChange = (event, value) => {
    fetcher({
      key: 'getfeatures',
      executer: () => getfeatures({ page: value }),
      onSuccess: res => {
        setFeaturelist(res.data?.data?.data);
        settotalpage(res.data?.data?.total);
      },
      showSuccessToast: false,
    });
  };
  return (
    <>
      <Card
        sx={{
          borderRadius: '12px',
          width: '100%',
          color: 'black',
          backgroundColor: colors.secondary__fill,
          padding: '30px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Box
            sx={{
              px: '10px',
              py: '3px',
              bgcolor: colors.secondary__fill__dark,
              border: `1px solid ${colors.blue__gray}`,
              borderRadius: '6px',
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedAll}
                    onChange={handleSelectAll}
                    icon={
                      <Icon
                        icon='ic:round-check-box-outline-blank'
                        color='white'
                        fontSize={20}
                      />
                    }
                    checkedIcon={
                      <Icon icon='ic:round-check-box' fontSize={20} />
                    }
                  />
                }
                label='Select All'
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              px: '10px',
              py: '3px',
              bgcolor: colors.secondary__fill__dark,
              border: `1px solid ${colors.blue__gray}`,
              borderRadius: '6px',
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleDeselectAll}
                    checked={DeSelectAll}
                    icon={
                      <Icon
                        icon='ic:round-check-box-outline-blank'
                        color='white'
                        fontSize={20}
                      />
                    }
                    checkedIcon={
                      <Icon icon='ic:round-check-box' fontSize={20} />
                    }
                  />
                }
                label='Deselect All'
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                p: '10px',
                pr: '5px',
                color: 'white',
              }}
            >
              {selectedCard.length} Selected
            </Box>
          </Box>
        </Box>
      </Card>
      <Grid container spacing={2}>
        {Featurelist.map(item => {
          return (
            <Grid item xs={12} md={6} lg={4} key={item?.id}>
              <FeatureCard
                data={item}
                name={item?.name}
                image={AnouncementImage}
                descriptionMetaData={item?.description}
                descriptionTitle={item?.descriptionTitle}
                id={item?.id}
                adminPage={{
                  show: true,
                  Ischecked: selectedCard.includes(item?.id),
                  onChnageCardChekbox: onChangeCardCheckbox,
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(totalpage / 10)}
          page={page}
          onChange={handlePageChange}
          renderItem={item => <PaginationItem {...item} />}
          sx={{
            mt: '25px',
            '& .MuiPaginationItem-root': {
              color: 'rgba(125, 143, 179, 1)',
              '&.Mui-selected': {
                color: colors.white,
              },
              '&:hover': {
                backgroundColor: colors.secondary__fill__dark,
                color: colors.white,
              },
            },
            '& .MuiPaginationItem-previousNext': {
              backgroundColor: colors.white,
              color: colors.black,
            },
          }}
        />
      </Box>
    </>
  );
}

export default SelectFeatureTab;
