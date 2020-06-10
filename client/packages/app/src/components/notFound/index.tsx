import React from 'react';
import { FormattedMessage } from 'react-intl';
import { INotFound } from '../../interfaces/INotFound';

interface IProps {
  notFound: INotFound
}

function NotFoundRender({ notFound }: IProps) {

  return (
    <FormattedMessage id={notFound.message} values={{
      subject: notFound.subject,
    }} />
  )

}

export default NotFoundRender;