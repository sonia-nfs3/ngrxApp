import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/article.actions';
import { JAVA_ARTICLES, ANGULAR_ARTICLES } from '../models/article';
import { ArticleState } from './app.states';

export const initialState: ArticleState = { articles: []};

const _articleReducer = createReducer(
  initialState,
  on(fromActions.JavaArticlesAction, (state) => { return {articles: JAVA_ARTICLES};}),
  on(fromActions.AngularArticlesAction, (state) => { return {articles: ANGULAR_ARTICLES};}),
  on(fromActions.FavoriteArticlesAction, (state, {payload}) => {return {articles: payload};})
);

export function articleReducer(state: any, action: Action) {
  return _articleReducer(state, action);
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState, 
    (state: ArticleState) => state.articles 
);