import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const fetchGoalsRequest = () => {
  return ({
    type: FETCH_GOALS_REQUEST
  });
};

export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const fetchGoalsSuccess = (goals) => {
  return ({
    type: FETCH_GOALS_SUCCESS,
    goals
  });
};

export const FETCH_GOALS_ERROR = 'FETCH_GOALS_ERROR';
export const fetchGoalsError = (error) => {
  return ({
    type: FETCH_GOALS_ERROR,
    error
  });
};

export const ADD_GOAL_REQUEST = 'ADD_GOAL_REQUEST';
export const addGoalRequest = () => {
  return ({
    type: ADD_GOAL_REQUEST
  });
};

export const ADD_GOAL_SUCCESS = 'ADD_GOAL_SUCCESS';
export const addGoalSuccess = (goals) => {
  return ({
    type: ADD_GOAL_SUCCESS,
    goals
  });
};

export const ADD_GOAL_ERROR = 'ADD_GOAL_ERROR';
export const addGoalError = (error) => {
  return ({
    type: ADD_GOAL_ERROR,
    error
  });
};

export const UPDATE_GOAL_REQUEST = 'UPDATE_GOAL_REQUEST';
export const updateGoalRequest = () => {
  return ({
    type: UPDATE_GOAL_REQUEST
  });
};

export const UPDATE_GOAL_SUCCESS = 'UPDATE_GOAL_SUCCESS';
export const updateGoalSuccess = (goals) => {
  return ({
    type: UPDATE_GOAL_SUCCESS,
    goals
  });
};

export const UPDATE_GOAL_ERROR = 'UPDATE_GOAL_ERROR';
export const updateGoalError = (error) => {
  return ({
    type: UPDATE_GOAL_ERROR,
    error
  });
};