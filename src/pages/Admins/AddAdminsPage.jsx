/* eslint-disable no-nested-ternary */
import { CircularProgress, Tab, Tabs } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm, FormProvider } from 'react-hook-form';
import AdminDetailsTab from '../../components/Admins/Tabs/AdminDetailsTab';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import InvoiceTab from '../../components/Admins/Tabs/InvoiceTab';
import BillingTab from '../../components/Admins/Tabs/BillingTab';
import SelectPlanTab from '../../components/Admins/Tabs/SelectPlanTab';
import SelectFeatureTab from '../../components/Admins/Tabs/SelectFeatureTab';
import AddStudentTab from '../../components/Admins/Tabs/AddStudentTab';
import Button from '../../components/shared/buttons/Button';
import useAdmin from './hooks/useAdmin';
import useFetcher from '../../hooks/useFetcher';
import PATH_DASHBOARD from '../../routes/path';
import {
  addAdminFeature,
  addAdminPlan,
  addNewAdmin,
  makePayments,
  updateAdminStudentCount,
} from '../../service/admins';

const AddAdminsPage = () => {
  // const { addNewAdmin } = useAdmin();
  const { fetcher, getExecutorState } = useFetcher();
  const [tabValue, setTabValue] = useState('1');
  const [formComplete, setFormComplete] = useState({});
  const [selectedCard, setSelectedCard] = useState([]);
  const [admin, setAdminData] = useState();
  const [image, setImage] = useState();

  const loading =
    getExecutorState('add_admin').isLoading ||
    getExecutorState('update_student_count').isLoading ||
    getExecutorState('add_admin_feature').isLoading ||
    getExecutorState('add_admin_plan').isLoading ||
    getExecutorState('make_payment').isLoading;
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const adminSchema = z
    .object({
      name: z.string().min(1, 'Admin Name is required'),
      email: z
        .string()
        .email('Invalid email address')
        .min(1, 'Admin Email is required'),
      phone_number: z.string().min(1, 'Admin Phone Number is required'),
      website: z.string().min(1, 'Admin Website is required'),
      gst_number: z.string().min(1, 'GST Number is required'),
      state: z.string().min(1, 'State is required'),
      city: z.string(),
      pincode: z.string().min(1, 'Pincode is required'),
      address: z.string().min(1, 'Address is required'),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long'),
      confirmPassword: z.string().min(1, 'Confirm Password is required'),
      image: z.any(),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: "Confirm Passwords don't match",
      path: ['confirmPassword'],
    });
  const studentCountSchema = z.object({
    student_count: z.string().min(1, 'Student Count is required'),
  });

  const methods = useForm({
    resolver: zodResolver(tabValue === '2' ? studentCountSchema : adminSchema),
  });

  const {
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const handleBackBtn = () => {
    setTabValue(prev => `${parseInt(prev, 10) - 1}`);
  };

  const onSubmit = async data => {
    setFormComplete({ ...formComplete, [tabValue]: true });

    switch (tabValue) {
      case '1':
        if (!admin) {
          fetcher({
            key: 'add_admin',
            executer: () => addNewAdmin(data, image),
            onSuccess: res => {
              console.log('Response:', res);
              setAdminData(res?.data?.data);
              setTabValue('2');
            },
          });
        } else {
          setTabValue('2');
        }
        break;
      case '2':
        fetcher({
          key: 'update_student_count',
          executer: () =>
            updateAdminStudentCount({
              id: admin?.id,
              _method: 'PUT',
              student_count: data.student_count,
            }),
          onSuccess: res => {
            console.log('Response:', res);
            setTabValue('3');
          },
          onFailure: err => {
            console.log('Error:', err);
          },
        });
        break;
      case '3':
        fetcher({
          key: 'add_admin_plan',
          executer: () =>
            addAdminPlan({
              id: admin?.id,
              _method: 'PUT',
              plan_id: values.plan_id,
            }),
          onSuccess: res => {
            console.log('Response:', res);
            setTabValue('4');
          },
          onFailure: err => {
            console.log('Error:', err);
          },
        });
        break;
      case '4':
        console.debug('Adding admin plan', selectedCard);
        fetcher({
          key: 'add_admin_features',
          executer: () =>
            addAdminFeature({
              id: admin?.id,
              _method: 'PUT',
              features: selectedCard,
            }),
          onSuccess: res => {
            console.log('Response:', res);
            setTabValue('5');
          },
          onFailure: err => {
            console.log('Error:', err);
          },
        });
        break;
      case '5':
        setTabValue('6');
        break;
      case '6':
        fetcher({
          key: 'make_payment',
          executer: () =>
            makePayments({
              user_id: admin?.id,
              plan_id: values?.plan_id,
              payment_type: values?.payment_type,
              transaction_type: values?.payment_type,
              transaction_id: values?.transaction_id,
            }),
          onSuccessRoute: PATH_DASHBOARD.Admins.adminList,
          onFailure: err => {
            console.log('make_payment Error:', err);
          },
        });
        break;
      default:
        console.log('onSubmit', data);
        break;
    }
  };

  const AdminTabs = activeTab => {
    const TabsList = {
      1: (
        <AdminDetailsTab
          setValue={setValue}
          setImageFile={setImage}
          values={values}
        />
      ),
      2: <AddStudentTab />,
      3: <SelectPlanTab setValue={setValue} values={values} />,
      4: (
        <SelectFeatureTab
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ),
      5: <InvoiceTab />,
      6: <BillingTab />,
    };

    return TabsList[activeTab];
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label='icon position tabs example'
        variant='scrollable'
        scrollButtons
      >
        <Tab
          icon={<Icon icon='gg:profile' width={25} />}
          iconPosition='start'
          label='Admin Details'
          sx={{ gap: '15px' }}
          value={'1'}
        />
        <Tab
          icon={<Icon icon={'flowbite:user-add-solid'} width={25} />}
          iconPosition='start'
          label='Add Student'
          sx={{ gap: '15px' }}
          value={'2'}
        />
        <Tab
          icon={<Icon icon={'oui:page-select'} width={25} />}
          iconPosition='start'
          label='Select Plan'
          sx={{ gap: '15px' }}
          value={'3'}
        />
        <Tab
          icon={<Icon icon={'pajamas:issue-type-feature'} width={25} />}
          iconPosition='start'
          label='Select Features'
          sx={{ gap: '15px' }}
          value={'4'}
        />
        <Tab
          icon={<Icon icon={'hugeicons:invoice-02'} width={25} />}
          iconPosition='start'
          label='Invoice'
          sx={{ gap: '15px' }}
          value={'5'}
        />
        <Tab
          icon={<Icon icon={'material-symbols:payments-sharp'} width={25} />}
          iconPosition='start'
          label='Billing'
          sx={{ gap: '15px' }}
          value={'6'}
        />
      </Tabs>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {AdminTabs(tabValue)}
            <div
              className={`flex ${tabValue === '1' ? 'justify-end' : 'justify-between'}`}
            >
              {tabValue !== '1' && (
                <Button
                  type='button'
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  onClick={handleBackBtn}
                  sx={{ mt: 3, background: 'white', color: '#000' }}
                  startIcon={
                    <img
                      src={ArrowRight}
                      alt='previous'
                      className='rotate-180'
                    />
                  }
                >
                  Previous
                </Button>
              )}
              <Button
                loading={isSubmitting}
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                sx={{ mt: 3, background: 'white', color: '#000' }}
                endIcon={
                  tabValue !== '6' ? <img src={ArrowRight} alt='next' /> : null
                }
              >
                {loading ? (
                  <CircularProgress
                    sx={{ maxHeight: '20px', maxWidth: '20px' }}
                  />
                ) : tabValue === '6' ? (
                  'Save'
                ) : (
                  'Next'
                )}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddAdminsPage;
