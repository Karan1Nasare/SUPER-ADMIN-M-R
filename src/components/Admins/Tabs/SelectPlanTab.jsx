import React from 'react';
import { Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Icon } from '@iconify/react';
import usePlan from '../../Plan/hooks/usePlan';
// import PlanCard from '../../Plan/Card/PlanCard';

import Button from '../../shared/buttons/Button';
import PlanCard from '../../Plan/components/Card/PlanCard';

const SelectPlanTab = ({ values, setValue }) => {
  const { planData } = usePlan();
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: '20px', paddingBottom: '50px' }}
      >
        {planData &&
          planData.map((plan, index) => {
            return (
              <Grid item md={4} lg={3} xs={6} key={index}>
                <PlanCard planData={plan} showAddEditBtn={false}>
                  <Button
                    sx={{
                      background:
                        values?.plan_id &&
                        values?.plan_id === plan?.data?.plan?.id
                          ? theme.color.deep_saffron
                          : theme.color.white,
                      marginTop: '10px',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color:
                        values?.plan_id &&
                        values?.plan_id === plan?.data?.plan?.id
                          ? theme.color.white
                          : theme.color.black,
                    }}
                    onClick={() => {
                      setValue('plan_id', plan?.data?.plan?.id);
                    }}
                  >
                    {/* Select */}
                    {values?.plan_id === plan?.data?.plan?.id ? (
                      <Icon icon={'mdi:tick'} width={25} />
                    ) : (
                      'Select'
                    )}
                  </Button>
                </PlanCard>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default SelectPlanTab;
