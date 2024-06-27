import * as yup from 'yup';

const combinedSchema = yup.object().shape({
  examTitle: yup.string().required('Exam title is required'),
  description: yup.string(),
  standard: yup.string().required('Standard is required'),
  subject: yup.string().required('Subject is required'),
  chapter: yup.string().required('Chapter is required'),
  topic: yup.string().required('Topic is required'),
  questions: yup.array().of(
    yup.object().shape({
      type: yup
        .string()
        .oneOf(['MCQ', 'T/F', 'Summary'])
        .required('Please select any question type'),
      marks: yup.number().min(1).required('Please Add Marks to Question'),
      details: yup.object().shape({
        question: yup.string().required('Field is required'),
        answer: yup.lazy(value => {
          if (['MCQ', 'T/F'].includes(value.type)) {
            return yup.string().required('Field is required');
          }
          return yup.string();
        }),
        options: yup.lazy(value => {
          if (value.type === 'MCQ') {
            return yup.object().shape({
              options1: yup.string().required('Field is required'),
              options2: yup.string().required('Field is required'),
              options3: yup.string().required('Field is required'),
              options4: yup.string().required('Field is required'),
            });
          }
          if (value.type === 'T/F') {
            return yup.object().shape({
              options1: yup.string().required('Field is required'),
              options2: yup.string().required('Field is required'),
            });
          }
          return yup.object().shape({});
        }),
      }),
    }),
  ),
});

export default combinedSchema;
