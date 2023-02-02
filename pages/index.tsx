import MainLayout from '@/Layouts/MainLayout';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

const HomePage = () => {
  return (
    <>
      <Grid item md={12}>
        <h1>hola mundo</h1>
      </Grid>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Home">{page}</MainLayout>;
};

export default HomePage;
