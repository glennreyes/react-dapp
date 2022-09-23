import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type ArticleProps = ComponentProps<'article'>;

export function Article({ className, ...props }: ArticleProps) {
  const classes = classNames('mx-auto prose lg:prose-xl', className);

  return <article className={classes} {...props} />;
}
