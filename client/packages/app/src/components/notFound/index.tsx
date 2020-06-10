import React from 'react';
import { FormattedMessage } from 'react-intl';
import { INotFound } from '../../interfaces/INotFound';

interface IProps {
  notFound: INotFound
}

function NotFoundRender({ notFound }: IProps) {

  return (
    <div data-test-id="not-found-wrapper">
      <FormattedMessage id={notFound.message} values={{
        subject: notFound.subject,
      }} />
    </div>
  )

}

export default NotFoundRender;