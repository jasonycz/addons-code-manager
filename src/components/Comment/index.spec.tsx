import * as React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

import Comment, { PublicProps } from '.';

describe(__filename, () => {
  const fakeComment = {
    content: 'This is a review comment',
  };

  type RenderParams = {
    comment?: PublicProps['comment'];
  };

  const render = ({ comment = null }: RenderParams = {}) => {
    return shallow(<Comment comment={comment} />);
  };

  it('renders a form when there is no comment', () => {
    const root = render({ comment: null });

    expect(root.find(`.${styles.form}`)).toHaveLength(1);
    expect(root.find(`.${styles.textarea}`)).toHaveLength(1);
  });

  it('renders a comment when provided', () => {
    const comment = fakeComment;

    const root = render({ comment });

    expect(root.find(`.${styles.form}`)).toHaveLength(0);
    expect(root.find(`.${styles.comment}`)).toHaveLength(1);
    expect(root.find(`.${styles.comment}`).html()).toContain(comment.content);
    expect(root.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('sanitizes the content of a comment', () => {
    const comment = { ...fakeComment, content: '<span>foo</span>' };

    const root = render({ comment });

    expect(root.find(`.${styles.comment}`).html()).not.toContain(
      comment.content,
    );
    // HTML `span` are removed.
    expect(root.find(`.${styles.comment}`).html()).toContain('foo');
  });
});
