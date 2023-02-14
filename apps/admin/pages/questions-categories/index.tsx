import Head from 'next/head';

import { MainLayoutAdmin } from '../../src/components/layouts/main-layout-admin';

export default function QuestionsCategoriesPage() {
  return (
    <>
      <Head>
        <title>Questions categories</title>
        <meta name='description' content='Challenges dashboard' />
      </Head>
      <main>
        <MainLayoutAdmin>
          {/* <QuestionsCategoriesScreens /> */}
        </MainLayoutAdmin>
      </main>
    </>
  );
}
