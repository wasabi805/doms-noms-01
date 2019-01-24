
export const getBrands = ({Logic}) => Logic.getIn(['info' , 'social']).toJS();

export const getStoryTitle    = ({Logic}) => Logic.getIn(['story', 'title']);
export const getStoryTextList = ({Logic}) => Logic.getIn(['story', 'text']).toArray();
// export const getHeroImgs   = ({Logic}) => Logic.getIn(['hero']).toJS();
