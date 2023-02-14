import { AxiosInstance } from 'axios';

import { axios } from '../../instance';
import { questionsCategoriesEnpoint } from '../../utils/constants/endpoints';
import { ApiFactory } from '../factory/factory.api';

import {
  QuestionCategory,
  QuestionCategoryInput,
} from './question-category.schema';

class QuestionCategoryApi extends ApiFactory<
  QuestionCategoryInput,
  QuestionCategoryInput,
  QuestionCategory
> {
  constructor(axiosInstance: AxiosInstance) {
    super(questionsCategoriesEnpoint, axiosInstance);
  }
}

export const questionCategoryApi = new QuestionCategoryApi(axios);
