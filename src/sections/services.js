import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  // {
  //   image: serviceImage1,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Dukungan Online',
  //   path: '#',
  // },
  {
    image: serviceImage2,
    text:
      'Tenaga ahli yang berpengalaman, pengerjaan baik pemasangan baru & service sudah dipercaya.',
    heading: 'Profesional',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Kecepatan & Ketepatan ketika memperbaiki mesin offset, Kami sangat mengerti apa yang Anda Inginkan.',
    heading: 'Pelayanan Terbaik',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Kepastian Garansi Jelas & sesuai jenis service.',
    heading: 'Bergaransi',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Hasil perbaikan mesin offset dispastikan optimal dengan langsung mengecek hasil cetak oleh mesin yang diservis',
    heading: 'Hasil Memuaskan',
    path: '#',
  },
  // {
  //   image: serviceImage6,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Dukungan Online',
  //   path: '#',
  // },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Mengapa Harus Kami?"
          text="Keunggulan Layanan CV Grafika Teknik Mandiri"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    mt: '-70px',
    mb: '30px'
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
