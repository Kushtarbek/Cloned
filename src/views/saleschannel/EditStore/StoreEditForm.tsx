import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  FormHelperText,
  TextField,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import firebase from 'firebase';
import useAuth from 'src/hooks/useAuth';
import { useHistory, useParams } from 'react-router-dom';

interface ChannelName {
  channelName: string;
  accountName: string;
}

// interface Channels {
//   poshmark: {
//     accounts: [
//       {
//         username: string;
//         password: string;
//       }
//     ];
//   };
//   mercari: {
//     accounts: [
//       {
//         username: string;
//         password: string;
//       }
//     ];
//   };
//   vestiaire: {
//     accounts: [
//       {
//         username: string;
//         password: string;
//       }
//     ];
//   };
//   shopify: {
//     accounts: [
//       {
//         username: string;
//         password: string;
//       }
//     ];
//   };
//   tradesy: {
//     accounts: [
//       {
//         username: string;
//         password: string;
//       }
//     ];
//   };
//   ebay: {
//     accounts: [
//       {
//         username: string;
//         password: string;
//       }
//     ];
//   };
// }

interface StoreEditFormProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},

    margin: {
      margin: theme.spacing(1),
    },
  })
);

const StoreEditForm: FC<StoreEditFormProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const history = useHistory();
  let channel = useParams();
  const seller_id = user.seller;
  const channelData = channel as ChannelName;
  const field = channelData.channelName + '.accounts'.toString();
  let Channelpassword: string;
  const docRef = firebase.firestore().collection('sellers').doc(seller_id).collection('settings').doc('channels');
  docRef.get().then((doc) => {
    doc.get(field).map((data) => {
      if (data.username === channelData.accountName) {
        Channelpassword = data.password;
      }
      return data;
    });
  });

  return (
    <Formik
      initialValues={{
        username: '' || channelData.accountName,
        password: '',
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().max(255).required('Username is required'),
        password: Yup.string().max(255).required('Password is required'),
      })}
      onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
        try {
          // let data = [{ username: values.username, password: values.password }];
          firebase
            .firestore()
            .collection('sellers')
            .doc(seller_id)
            .collection('settings')
            .doc('channels')
            .update({
              [field]: firebase.firestore.FieldValue.arrayRemove({
                username: channelData.accountName,
                password: Channelpassword,
              }),
            })
            .then(() => {
              firebase
                .firestore()
                .collection('sellers')
                .doc(seller_id)
                .collection('settings')
                .doc('channels')
                .update({
                  [field]: firebase.firestore.FieldValue.arrayUnion({
                    username: values.username,
                    password: values.password,
                  }),
                });
            })
            .catch(() => {});

          history.push('/app/account#salesChannels');
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Store created', {
            variant: 'success',
            action: <Button>See all</Button>,
          });
        } catch (err) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form className={clsx(classes.root, className)} onSubmit={handleSubmit} {...rest}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.username && errors.username)}
                    fullWidth
                    helperText={touched.username && errors.username}
                    label="Username"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.username}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.password}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}

              <Box p={2} display="flex" justifyContent="flex-end">
                <Button
                  className={classes.margin}
                  variant="contained"
                  color="secondary"
                  type="button"
                  component={RouterLink}
                  to={'/app/account/#salesChannels'}
                >
                  Cancel
                </Button>

                <Button
                  className={classes.margin}
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Link Account
                </Button>
              </Box>
            </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};

StoreEditForm.propTypes = {
  className: PropTypes.string,
};

export default StoreEditForm;
