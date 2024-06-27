import React, { useState } from 'react';
import { Grid } from '@mui/material';

import PlanCard from './PlanCard';

function PlanList({ planData, onDelete }) {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: '20px', paddingBottom: '50px' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {planData &&
          planData?.map((plan, index) => {
            return (
              <Grid item md={4} sm={6} key={index}>
                <PlanCard planData={plan} onDelete={onDelete} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default PlanList;
