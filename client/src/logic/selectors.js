export const getLogo        = ({Logic}) => Logic.getIn(['info', 'logo']);
export const getBrands = ({Logic}) => Logic.getIn(['info' , 'social']).toJS();

export const getStoryTitle    = ({Logic}) => Logic.getIn(['story', 'title']);
export const getStoryTextList = ({Logic}) => Logic.getIn(['story', 'text']).toArray();

export const getService     = ({Logic}) => Logic.getIn(['services']).toJS();

export const getFoodMenuTitle    = ({Logic}) => Logic.getIn(['food_menu', 'title']);
export const getFoodMenuContent    = ({Logic}) => Logic.getIn(['food_menu_content']).toArray();
export const getFoodMenuFooter    = ({Logic}) => Logic.getIn(['food_menu_footer']);

export const getGalleryTitle    = ({Logic}) => Logic.getIn(['gallery', 'title']);
export const getGallerySettings = ({Logic}) => Logic.getIn(['gallery', 'settings']);
export const getGalleryImgPaths = ({Logic}) => Logic.getIn(['gallery', 'images']);


// export const getHeroImgs   = ({Logic}) => Logic.getIn(['hero']).toJS();
