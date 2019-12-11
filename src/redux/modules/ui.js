import * as _ from 'lodash';

import allWorks from './all_items.json';

import allWords from './all_words.json';

window.allWorks = allWorks;
window.allWords = allWords;

export default function reducer(state = {
  // this is all the states
  isFrench: true,
  isCreditsOpen: false,
  isWelcomeOpen: true,
  isLandingOpen: true,
  isCopyrightOpen: true,
  openedArtwork: null,
  isConstellationTextOpen: true,
  selectedWorks: [], //{ accessNum, similarityScore }[],
  selectedKeywords: {}, // { [keyword]: { worksInConstellationWithKeyword: [] } }
  relatedWorks: [], // { similarityScore: number, access_num: string }[]
  activeWorkIndex: 0, // (index in selectedWorks array)
  activeKeywords: [], // TODO: DO WE NEED THIS?
  hoveredKeyword: null,
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
      return {
        ...state,
        isCopyrightOpen: !state.isCopyrightOpen,
      }
    case 'TOGGLE_CONSTELLATION_TEXT':
      return {
        ...state,
        isConstellationTextOpen: !state.isConstellationTextOpen,
      }
    case 'TOGGLE_DETAIL_PANEL':
      return {
        ...state,
        isDetailPanelOpen: !state.isDetailPanelOpen,
        openedArtwork: action.access_num,
      };
    case 'CLOSE_COPYRIGHT_WINDOW':
      return {
        ...state,
        haveCopyrightWindowsBeenViewed: true,
      };
    case 'OPEN_MAIN_PAGE':
      return {
        ...state,
        isLandingOpen: false
      };
    case 'REMOVE_INITIAL_ARTWORK':
      return {
        ...state,
        selectedWorks: [],
        selectedKeywords: {},
        activeWorkIndex: 0,
      };
    case 'INCREASE_HIGHEST_Z_INDEX':
      return {
        ...state,
        highestZIndex: state.highestZIndex + 1,
      };
    case 'SELECT_NEW_ARTWORK':

        const newLastIndexInArtworksArr = state.selectedWorks.length;
        const newSelectedKeywords = mergeSelectedKeywords(action.selectedKey, state.selectedKeywords);
        const newSelectedArtworksAfterSelect = [...state.selectedWorks, {
          accessNum: action.selectedKey,
          similarityScore: action.similarityScore || 1,
        }];
        return {
          ...state,
          activeWorkIndex: newLastIndexInArtworksArr,
          selectedKeywords: newSelectedKeywords,
          relatedWorks: filterRelatedWorksToRemoveAlreadyInConstellation(newSelectedArtworksAfterSelect, action.relatedArtworks),
          selectedWorks: newSelectedArtworksAfterSelect
        }
    case 'REMOVE_ARTWORK':
        const { removedAccessNum } = action;
        const indexOfRemovedAccessNum = state.selectedWorks.findIndex((work) => {
          return work.accessNum === removedAccessNum;
        });
        state.selectedWorks[indexOfRemovedAccessNum] = {
          isRemoved: true,
        }

        let newLastIndexInArtworksArrAfterRemove = state.selectedWorks.length - 1;
        let foundLastIndex = false;
        let isLastOneRemoved = false;
        while (foundLastIndex === false) {
          if (state.selectedWorks[newLastIndexInArtworksArrAfterRemove].isRemoved) {
            if (newLastIndexInArtworksArrAfterRemove === 0) {
              foundLastIndex = true;
              isLastOneRemoved = true;
            }
            newLastIndexInArtworksArrAfterRemove -= 1;
          } else {
            foundLastIndex = true;
          }
        }

        if (isLastOneRemoved) {
          const {
            selectedKey,
            relatedArtworks,
          } = findRandomWorkHelper();
          const newSelectedKeywords = mergeSelectedKeywords(selectedKey, {});
          return {
            ...state, 
            activeWorkIndex: 0,
            selectedKeywords: newSelectedKeywords,
            relatedWorks: relatedArtworks,
            selectedWorks: [{
              accessNum: selectedKey,
              similarityScore: 1,
            }],  
            isLandingOpen: true,
          }
        }

        const newSelectedKeywordsAfterRemove = findNewSelectedKeywordsAfterRemove(state.selectedKeywords, removedAccessNum);
        const relatedArtworks = filterRelatedWorksToRemoveAlreadyInConstellation(state.selectedWorks, findRelatedWork(state.selectedWorks[newLastIndexInArtworksArrAfterRemove].accessNum));

        return {
          ...state,
          relatedWorks: relatedArtworks,
          activeWorkIndex: newLastIndexInArtworksArrAfterRemove,
          selectedKeywords: newSelectedKeywordsAfterRemove,
          selectedWorks: state.selectedWorks
        }
    case 'ON_HOVER_KEYWORD':
      const newSelectedWorks = state.selectedWorks.map((work) => {
        const isKeyworded = state.selectedKeywords[action.keyword].worksInConstellationWithKeyword.includes(work.accessNum);
        if (isKeyworded) {
          return {
            ...work,
            isRelatedToHoveredKeyword: true,
          };
        }
        return work;
      });

      return {
        ...state,
        selectedWorks: newSelectedWorks,
        hoveredKeyword: action.keyword,
      }
    case 'OFF_HOVER_KEYWORD':
      const offHoveredSelectedWorks = state.selectedWorks.map((work) => {
        return {
          ...work,
            isRelatedToHoveredKeyword: false, 
        }
      });
      return {
        ...state,
        selectedWorks: offHoveredSelectedWorks,
        hoveredKeyword: null,
      }
    case 'ON_HOVER_ARTWORK':
      const newState = _.cloneDeep(state.selectedKeywords);
      Object.keys(newState).forEach((keyword) => {
        const keywordObj = newState[keyword];
        const isRelated = keywordObj.worksInConstellationWithKeyword.includes(action.artwork);
        if (isRelated) {
          keywordObj.isRelatedToHoveredArtwork = true;
        }
      });
      return {
        ...state,
        selectedKeywords: newState,
      };
    case 'OFF_HOVER_ARTWORK':
      const newOffHoverState = _.cloneDeep(state.selectedKeywords);
      Object.keys(newOffHoverState).forEach((keyword) => {
        const keywordObj = newOffHoverState[keyword];
        keywordObj.isRelatedToHoveredArtwork = false;
      });
      return {
        ...state,
        selectedKeywords: newOffHoverState,
      };
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
export const toggleConstellationText = () => {
  return {
    type: 'TOGGLE_CONSTELLATION_TEXT',
  };
};
export const toggleDetailPanel = (access_num) => {
  return {
    type: 'TOGGLE_DETAIL_PANEL',
    access_num,
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

function findRandomWorkHelper() {
  const keys = Object.keys(allWorks);
  const selectedKey = keys[Math.floor(Math.random() * keys.length)];
  const relatedArtworks = findRelatedWork(selectedKey);
  return {
    selectedKey,
    relatedArtworks,
  }
}

export const findRandomArtWork = () => {
  const {
    selectedKey,
    relatedArtworks,
  } = findRandomWorkHelper();
  return {
    type: 'SELECT_NEW_ARTWORK',
    selectedKey,
    relatedArtworks,
  };
}

export const addWorkToConstellation = (selectedKey, similarityScore) => {
  const relatedArtworks = findRelatedWork(selectedKey);
  return {
    type: 'SELECT_NEW_ARTWORK',
    selectedKey: selectedKey,
    relatedArtworks,
    similarityScore
  }
}

export const removeWorkFromConstellation = (accessNum) => {
  return {
    type: 'REMOVE_ARTWORK',
    removedAccessNum: accessNum,
  }
}

export const openMainPage = () => {
  return {
    type: 'OPEN_MAIN_PAGE',
  }
}

// this is just for moving from landing page to constellation page
export const removeInitialArtwork = () => {
  return {
    type: 'REMOVE_INITIAL_ARTWORK',
  }
}

// helper functions

export const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const findRelatedWork = (accessNum) => {
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

  var arrayOfWorks = Object.values(allRelatedWorks);
  arrayOfWorks = shuffle(arrayOfWorks);
  return arrayOfWorks;
}

const filterRelatedWorksToRemoveAlreadyInConstellation = (selectedWorks, relatedWorks) => {
  return relatedWorks.filter((related) => {
    const isIn = selectedWorks.reduce((selected) => {
      if (selected === related) {
        return true
      }
      return false
    }, false)
    return !isIn;
  });
}

const findNewSelectedKeywordsAfterRemove = (existingSelectedKeywords, removedAccessNum) => {
  const newSelectedKeywords = existingSelectedKeywords;
  const allKeywords = Object.keys(existingSelectedKeywords);
  const allArtworksPerKeyword = Object.values(existingSelectedKeywords);
  allArtworksPerKeyword.forEach((item, i) => {
    const indexOfRemovedAccessNum = item.worksInConstellationWithKeyword.findIndex((accessNum) => {
      return accessNum === removedAccessNum;
    });
    if (indexOfRemovedAccessNum < 0) {
      return;
    }
    const theKeyword = allKeywords[i];
    newSelectedKeywords[theKeyword].worksInConstellationWithKeyword.splice(indexOfRemovedAccessNum, 1);
    if (newSelectedKeywords[theKeyword].worksInConstellationWithKeyword.length === 0) {
      delete newSelectedKeywords[theKeyword];
    }
  });

  return newSelectedKeywords;
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

export const onHoverKeyword = (keyword) => {
  return {
    type: 'ON_HOVER_KEYWORD',
    keyword,
  }
}

export const offHoverKeyword = () => {
  return {
    type: 'OFF_HOVER_KEYWORD',
  }
}

export const onHoverArtwork = (artwork) => {
  return {
    type: 'ON_HOVER_ARTWORK',
    artwork,
  }
}

export const offHoverArtwork = () => {
  return {
    type: 'OFF_HOVER_ARTWORK',
  }
}