export default function reducer(state = {
  isFrench: false,
  isCreditsOpen: false,
  isWelcomeOpen: false,
  isLandingPage: true,
  selectedWorks: [], //string[],
  selectedKeywords: [], //string[]
  relatedWorks: [], // string[]
  activeWork: 0, // (index in selectedWorks array)
  isDetailPanelOpen: false,
  essayWindows: [], //string[]
  haveCopyrightWindowsBeenViewed: false,
  highestZIndex: 1,
}, action = {}) {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return {
        ...state,
        isFrench: !state.isFrench,
      };
    case 'TOGGLE_CREDITS':
      return {
        ...state,
        isCreditsOpen: !state.isCreditsOpen,
      };
    case 'TOGGLE_WELCOME':
      return {
        ...state,
        isWelcomeOpen: !state.isWelcomeOpen,
      };
    case 'CLOSE_LANDING_PAGE':
      return {
        ...state,
        isLandingPage: false,
      };
    case 'TOGGLE_DETAIL_PANEL':
      return {
        ...state,
        isDetailPanelOpen: !state.isDetailPanelOpen,
      };
    case 'CLOSE_COPYRIGHT_WINDOW':
      return {
        ...state,
        haveCopyrightWindowsBeenViewed: true,
      };
    case 'INCREASE_HIGHEST_Z_INDEX':
      return {
        ...state,
        highestZIndex: state.highestZIndex + 1,
      };
    default:
      return state;
  }
}

export const toggleLanguage = () => {
  return {
    type: 'TOGGLE_LANGUAGE',
  };
};

export const toggleCredits = () => {
  return {
    type: 'TOGGLE_CREDITS',
  };
};

export const toggleWelcome = () => {
  return {
    type: 'TOGGLE_WELCOME',
  };
};

export const closeLandingPage = () => {
  return {
    type: 'CLOSE_LANDING_PAGE',
  };
};

export const toggleDetailPanel = () => {
  return {
    type: 'TOGGLE_DETAIL_PANEL',
  };
};

export const closeCopyrightWindow = () => {
  return {
    type: 'CLOSE_COPYRIGHT_WINDOW',
  };
};

export const increaseHighestZIndex = () => {
  return {
    type: 'INCREASE_HIGHEST_Z_INDEX',
  };
};
