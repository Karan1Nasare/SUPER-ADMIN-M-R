import { Grid, Stack } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Button from '../../shared/buttons/Button';
import { RHFTextField } from '../../../hooks/hook-form';
import useAdmin from '../../../pages/Admins/hooks/useAdmin';

const UpdateAccountField = ({
  label,
  value,
  handleUpdate,
  isPassword = false,
  formFields,
}) => {
  const [showForm, setShowForm] = useState(false);
  const methods = useForm();
  const { updateUserName, updateEmail, updatePhoneNo, updatePassword } =
    useAdmin();
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (formFields) {
      formFields.forEach(field => setValue(field.name, field.value));
    }
  }, [formFields, setValue]);

  const onSubmit = async data => {
    if (handleUpdate) {
      handleUpdate(data);
    }
    if (data?.username) {
      updateUserName(data?.username);
    }
    if (data?.email) {
      updateEmail(data?.email);
    }
    if (data?.phone_number) {
      updatePhoneNo(data?.phone_number);
    }
    if (data?.current_password && data?.new_confirm_password) {
      updatePassword(data);
    }
    setShowForm(false);
  };

  return (
    <Stack
      sx={{
        background: theme => theme.color.secondary__fill,
        padding: '25px',
        border: theme => `1px solid ${theme.color.border_color}`,
        borderRadius: '8px',
        marginTop: '10px',
        width: '100%',
      }}
    >
      {!showForm && (
        <Stack
          sx={{ width: '100%' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}
        >
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              {label}
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {!isPassword ? value : `******${value?.slice(-2)}`}
            </p>
          </Stack>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
            onClick={() => setShowForm(!showForm)}
          >
            Change {label}
          </Button>
        </Stack>
      )}
      {showForm && (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {formFields &&
                formFields.map((field, index) => (
                  <Grid item xs={12} key={`${label}${index}`}>
                    <p className='text-[rgba(255,255,255,0.5)] text-left'>
                      {field?.label}
                    </p>
                    <RHFTextField
                      name={field.name}
                      size={'small'}
                      defaultValue={field.value}
                      type={field.type || 'text'}
                      placeholder={field?.placeholder || ''}
                      required
                    />
                  </Grid>
                ))}
              <Grid item xs={12} sx={{ textAlign: 'left' }}>
                <Button
                  sx={{
                    background: theme => theme.color.white,
                    padding: '8px 16px',
                  }}
                  type='submit'
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      )}
    </Stack>
  );
};

export default UpdateAccountField;
