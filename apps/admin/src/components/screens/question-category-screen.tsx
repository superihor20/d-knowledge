import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { QueryKeys, questionCategoryApi, QuestionCategoryInput } from 'api';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { adminPages } from '../../utils/contants/links';
import { isItIdFromUrl } from '../../utils/helpers/is-it-id-from-url';
import { questionCategorySchema } from '../../utils/zod-schemas/question-category.schema';

export const QuestionCategoryScreen = () => {
  const router = useRouter();
  const questionCategoryId = router.asPath.split('/').pop() || '';
  const {
    control,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setValue,
  } = useForm<QuestionCategoryInput>({
    resolver: zodResolver(questionCategorySchema),
  });

  useQuery(
    [QueryKeys.QUESTION_CATEGORY, questionCategoryId],
    () => questionCategoryApi.getById(+questionCategoryId),
    {
      enabled: isItIdFromUrl(questionCategoryId),
      onSuccess: (data) => {
        setValue('name', data.name);
      },
    }
  );

  const createNewQuestionCategory = async (data: QuestionCategoryInput) => {
    const questionCategory = await questionCategoryApi.create(data);

    router.push(`${adminPages.questionsCategories}/${questionCategory.id}`);
  };

  const updateQuestionCategory = async (
    id: number,
    data: QuestionCategoryInput
  ) => {
    questionCategoryApi.update(id, data);
  };

  const handleSubmit = async (data: QuestionCategoryInput) => {
    try {
      if (!isItIdFromUrl(questionCategoryId)) {
        createNewQuestionCategory(data);

        return;
      }

      updateQuestionCategory(+questionCategoryId, data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmitHook((data) => handleSubmit(data))}
      style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <>
            <Input status={errors.name ? 'error' : ''} {...field} />
            {errors.name?.message ? (
              <p style={{ color: 'red' }}>{errors.name.message}</p>
            ) : null}
          </>
        )}
      />
      <Button type='primary' htmlType='submit'>
        Create
      </Button>
    </form>
  );
};
