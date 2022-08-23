import {request} from '../utils';

export const getStory = async (id: string) => {
  return request.get(`/item/${id}.json`);
};

//top, new, best
export const getStories = async (type: 'top' | 'new' | 'best') => {
  return request.get(`/${type}stories.json`);
};


