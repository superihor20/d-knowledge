import Head from 'next/head';

import { MainLayoutAdmin } from '../../src/components/layouts/main-layout-admin';
import { QuestionCategoryScreen } from '../../src/components/screens/question-category-screen';

export default function QuestionsCategoriesPage() {
  return (
    <>
      <Head>
        <title>Question category</title>
        <meta name='description' content='Challenges dashboard' />
      </Head>
      <main>
        <MainLayoutAdmin>
          <QuestionCategoryScreen />
        </MainLayoutAdmin>
      </main>
    </>
  );
}
