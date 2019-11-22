import allWorks from './all_items.json';

import allWords from './all_words.json';

window.allWorks = allWorks;
window.allWords = allWords;

export default function reducer(state = {
  // this is all the states
  isFrench: true,
  isCreditsOpen: false,
  isWelcomeOpen: true,
  isCopyrightOpen: true,
  selectedWorks: [], //string[],
  selectedKeywords: {}, // { [keyword]: { worksInConstellationWithKeyword: [] } }
  relatedWorks: [], // { similarityScore: number, access_num: string }[]
  activeWorkIndex: 0, // (index in selectedWorks array)
  activeKeywords: [], // TODO: DO WE NEED THIS?
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
    case 'TOGGLE_COPYRIGHT':
      return{
        ...state,
        isCopyrightOpen: !state.isCopyrightOpen,
      }
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
    case 'SELECT_NEW_ARTWORK':

        const newLastIndexInArtworksArr = state.selectedWorks.length;
        const newSelectedKeywords = mergeSelectedKeywords(action.selectedKey, state.selectedKeywords);
        return {
          ...state,
          activeWorkIndex: newLastIndexInArtworksArr,
          selectedKeywords: newSelectedKeywords,
          relatedWorks: action.relatedArtworks,
          selectedWorks: [...state.selectedWorks, action.selectedKey]
        }
    default:
      return state;
  }
}

// below are all the actions

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
export const toggleCopyright = () => {
  return {
    type: 'TOGGLE_COPYRIGHT',
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

export const findRandomArtWork = () => {
  const keys = Object.keys(allWorks);
  const selectedKey = keys[Math.floor(Math.random() * keys.length)];
  const relatedArtworks = findRelatedWork(selectedKey);
  return {
    type: 'SELECT_NEW_ARTWORK',
    selectedKey,
    relatedArtworks,
  };
}

export const removeArtwork = () => {
  // TODO: loop over all keywords to ensure that this is not the last artwork
}

// helper functions

const findRelatedWork = (accessNum) => {
  // TODO: DONT SHOW WORKS THAT ARE ALREADY IN CONSTELLATION
  const keyWordsInSelectedWork = allWorks[accessNum].final_words;

  const allRelatedWorks = keyWordsInSelectedWork.reduce((obj, word) => {
    const worksWithRelatedWord = allWords[word];
    worksWithRelatedWord.forEach((work) => {
      if (obj[work] || work === accessNum) {
        return;
      }
      const keywordsInRelatedWork = allWorks[work].final_words;
      const similarityScore = keywordsInRelatedWork.filter(value => keyWordsInSelectedWork.includes(value)).length;
      obj[work] = {
        access_num: work,
        similarityScore,
      }
    });
    return obj;
  }, {});

  return Object.values(allRelatedWorks);
}

const mergeSelectedKeywords = (accessNum, existingSelectedKeywords) => {
  const keyWordsInSelectedWork = allWorks[accessNum].final_words;
  keyWordsInSelectedWork.forEach((word) => {
    if (!existingSelectedKeywords[word]) {
      existingSelectedKeywords[word] = { worksInConstellationWithKeyword: [] }
    }
    if (!existingSelectedKeywords[word].worksInConstellationWithKeyword.includes(accessNum)) {
      existingSelectedKeywords[word].worksInConstellationWithKeyword.push(accessNum);
    }
  });
  return existingSelectedKeywords;
}