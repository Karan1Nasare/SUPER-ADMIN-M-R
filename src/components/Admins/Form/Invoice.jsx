import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import HomeLogo from '../../../assets/homeLogo.png';

const Invoice = () => {
  return (
    <Card>
      <CardContent sx={{ padding: '5px' }}>
        <Stack
          direction={'row'}
          sx={{
            width: '100%',
            background: 'rgba(242, 245, 249, 1)',
            padding: '15px',
            borderRadius: '10px',
          }}
          justifyContent={'space-between'}
        >
          <Stack
            direction={'column'}
            justifyContent={'space-between'}
            spacing={6}
            sx={{ padding: '5px' }}
          >
            <p className='font-extrabold text-[25px] text-left'>Invoice</p>
            <Stack direction={'column'} spacing={1}>
              <p className='text-sm text-left text-[12px] text-[rgba(96,115,125,1)]'>
                Billed To:
              </p>
              <p className='text-left font-bold  text-[14px]'>Client Name</p>
              <p className='text-left text-[14px]'>Address / Contact Info</p>
            </Stack>
          </Stack>

          <Stack
            direction={'column'}
            justifyContent={'space-between'}
            spacing={6}
            sx={{ padding: '5px' }}
          >
            <Stack>
              <p className='text-sm text-right text-[12px]  text-[rgba(96,115,125,1)]'>
                Invoice No.
              </p>
              <p className='font-bold text-right text-[14px]'>#000123</p>
              <Stack sx={{ marginTop: '15px' }}>
                <p className='text-sm text-right  text-[rgba(96,115,125,1)]'>
                  Issued on
                </p>
                <p className='text-sm text-right mb-2'>December 7, 2022.3</p>
                <p className='text-sm text-right  text-[rgba(96,115,125,1)]'>
                  Payment Due{' '}
                </p>
                <p className='text-sm text-right'>December 22, 2022.</p>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ width: '100%', marginTop: '20px' }}>
          <table className='table w-full'>
            <tr>
              <th className='text-sm '>Services</th>
              <th className='text-sm '>Qty</th>
              <th className='text-sm '>Price</th>
              <th className='text-sm '>Total</th>
            </tr>
            <tbody>
              <tr>
                <td className='text-sm '>Invoice Item1</td>
                <td className='text-sm '>1</td>
                <td className='text-sm '>200</td>
                <td className='text-sm font-semibold'>200.00</td>
              </tr>
            </tbody>
          </table>
          <Stack
            direction={'row'}
            sx={{ width: '100%', marginTop: '100px' }}
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <Divider sx={{ width: '100%' }} />
            <Stack
              direction={'row'}
              alignItems={'center'}
              sx={{
                background: 'rgba(242, 245, 249, 1)',
                padding: '15px',
                borderRadius: '10px',
                minWidth: '200px',
              }}
              justifyContent={'space-between'}
            >
              <p className='text-[14px]'>Total(USD)</p>
              <p className='font-bold text-[14px]'>200</p>
            </Stack>
          </Stack>

          <Stack
            sx={{
              paddingLeft: '50px',
              marginTop: '70px',
              marginBottom: '20px',
            }}
          >
            <img src={HomeLogo} width={'50px'} height={'50px'} />
          </Stack>
          <Stack direction={'row'} justifyContent={'space-around'} spacing={4}>
            <Stack sx={{ flex: 1, paddingLeft: '50px' }}>
              <h5 className='font-extrabold text-left text-[14px]'>
                M&R Education
              </h5>
              <p className='text-left text-[12px]'>Address / Contact Info</p>
              <p className='text-[rgba(51,75,200,1)] text-left text-[12px]'>
                email@company.com
              </p>
              <p className='text-sm text-left  text-[rgba(96,115,125,1)] text-[12px]'>
                ID#1 Label
              </p>
              <p className='text-md text-left mb-2 text-[12px]'>
                1234567890-123
              </p>
              <p className='text-sm text-left  text-[rgba(96,115,125,1)] text-[12px]'>
                ID#2 Label
              </p>
              <p className='text-md text-left mb-2 text-[12px]'>
                ABC-0987654321
              </p>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <h5 className='font-bold text-left text-[14px]'>
                Payment Instructions
              </h5>
              <p className='text-left text-[12px]'>
                Voluptas nisi aut. Est vitae dolore molestias porro praesentium.
                Tempore recusandae voluptatem necessitatibus corporis inventore
                neque magnam ut.
              </p>
              <p className='text-sm text-left text-[12px]  text-[rgba(96,115,125,1)]'>
                ID#1 Label
              </p>
              <p className='text-md text-left text-[12px] mb-2'>
                1234567890-123
              </p>
              <p className='text-sm text-left text-[12px] text-[rgba(96,115,125,1)]'>
                ID#2 Label
              </p>
              <p className='text-md text-left text-[12px] mb-2'>
                ABC-0987654321
              </p>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <h5 className='font-bold text-left text-[14px]'>
                Additional Notes
              </h5>

              <p className='text-sm text-left text-[12px] text-[rgba(96,115,125,1)]'>
                Have a great day{' '}
              </p>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Invoice;
