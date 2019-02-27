import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Comment from '../src/components/Comment';

const fakeComment = {
  content: [
    'The use of `eval()` is dangerous. ',
    "It looks like you don't even need it here.",
    '\n',
    'Maybe you could remove it?',
  ].join(''),
};

storiesOf('Comment', module).addWithChapters('all variants', {
  chapters: [
    {
      sections: [
        {
          title: 'add a new comment',
          sectionFn: () => <Comment comment={null} />,
        },
        {
          title: 'display an existing comment',
          sectionFn: () => (
            <Comment
              comment={{
                ...fakeComment,
                content: 'This is not allowed.',
              }}
            />
          ),
        },
        {
          title: 'display an existing multi-line comment',
          sectionFn: () => <Comment comment={fakeComment} />,
        },
      ],
    },
  ],
});
