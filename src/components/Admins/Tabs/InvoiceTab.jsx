import { Card, Stack } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../../shared/buttons/Button';
import Invoice from '../Form/Invoice';

const InvoiceTab = () => {
  return (
    <>
      <Stack
        justifyContent={'flex-end'}
        sx={{ width: '100%', marginTop: '20px' }}
      >
        <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>
          <Button
            endIcon={<Icon icon='octicon:download-16' width={25} />}
            sx={{ background: 'white' }}
          >
            Download
          </Button>
          <Button
            endIcon={<Icon icon='ic:round-print' width={25} />}
            sx={{ background: 'white' }}
          >
            Print
          </Button>
        </Stack>
      </Stack>
      <Stack justifyContent={'center'} alignItems={'center'} width={'100%'}>
        <Card
          sx={{
            maxWidth: '550px',
          }}
        >
          <Invoice />
        </Card>
      </Stack>
    </>
  );
};

export default InvoiceTab;
