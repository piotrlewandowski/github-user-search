// @flow

import React from 'react';
import curry from 'lodash/fp/curry';
import map from 'lodash/fp/map';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import Result from 'components/Result';
import {viewport} from 'theme';
import 'suitcss-utils-flex/lib/flex.css';

type Props = {
  entities: Object,
  ids: Array<number>,
};

const renderSearchResult = curry((entities, item) => {
  const {
    id,
    avatar_url: avatarUrl,
    login,
  } = entities[item];
  return (
    <li key={id} className={`${css(styles.SearchResults_item)} u-flexGrow1 u-flexBasisAuto`}>
      <Result
        username={login}
        avatarUrl={avatarUrl}
      />
    </li>
  );
});

function SearchResults({entities, ids}: Props) {
  return (
    <ul className={`${css(styles.SearchResults)} u-flex u-flexWrap`}>
      {map(renderSearchResult(entities), ids)}
    </ul>
  );
}

const styles = StyleSheet.create({
  SearchResults: {
    paddingLeft: 3,
  },

  SearchResults_item: {
    marginRight: 3,
    marginBottom: 3,

    [viewport.SM]: {
      ':only-child': {
        flex: 0,
      },
    },
  },
});

export default SearchResults;