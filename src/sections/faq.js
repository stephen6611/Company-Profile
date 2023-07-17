import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'Berapa lama sebaiknya dilakukan perawatan mesin cetak?',
    contents: (
      <div>
        Perawatan dilakukan ada yg besifat harian mingguan dan bulanan.
        Kalau yg harian di antaranya kalau mesin yg sudah memakai cheeler atau pendingin air. Sebaik nya dilakukan penggantian air tiap hari. Untuk menjaga kualitas cetakan. Paling tidak menambah air karena sudah dipakai seharian untuk produksi. Jadi pasti berkurang.
        Kebersihan mesin menjadi kunci utama kualitas hasil cetakan.
        Maka dengan itu setelah mesin di pakai seharian harus di bersihkan. Di antaranya rol tinta setelah selesai kerja harus di cuci bersih dari tinta yang dipakai produksi. 
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Bagaimana cara mengetahui kerusakan mesin?',
    contents: (
      <div>
        Yaitu berdasar kan keluhan dari oprator di antaranya. Warna tidak stabil Presisi hasil nya berubah atau meleset atau kelistrikan yang tidak berfungsi atau spare part kelistrikan ada yg rusak. Sehingga mempengaruhi kinerja mesin secara keseluruhan.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Berapa perkiraan biaya untuk servis mesin offset?',
    contents: (
      <div>
        Biaya service di hitung berdasarkan jasanya saja. Adapun biaya transport akomodasi termasuk hotel kalau keluar kota sepenuhnya di tanggung perusahaan pemakai jasa.
        <br></br>
        <a></a>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Apakah ada garansi setelah mesin telah diservis?',
    contents: (
      <div>
        Tentu kami memberikan garansi perbaikan setelah servis tergantung dengan kerusakan dan jenis mesinnya, paling lama kami memberikan garansi 1 bulan setelah servis.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Apakah pelayanan servis mesin offset melayani diluar Jabodetabek?',
    contents: (
      <div>
        Pilihan lokasi layanan servis untuk wilayah Jabodetabek, luar jabodetabek. kami sudah berpengalaman puluhan tahun, kami juga bisa datang ke seluruh indonesia. Silahkan menghubungi dengan mengklik kontak, kamu akan di hubungkan langsung ke whatsapp teknisi kami.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ajukan pertanyaan Anda"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
            Ada pertanyaan lain yang belum terjawab? Silahkan tanyakan!
            </Heading>
            <Text as="p">
            Jika pertanyaan Anda tidak tercantum di sini, silahkan kontak kami.
            </Text>
            <Link sx={styles.askButton} path="#">
              Kontak Kami
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
