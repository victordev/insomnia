import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as misc from '../../../common/misc';

class SizeTag extends PureComponent {
  render () {
    const {bytes, small, className} = this.props;
    const responseSizeString = misc.describeByteSize(bytes);
    return (
      <div className={classnames('tag', {'tag--small': small}, className)}
           title={`${bytes} bytes`}>
        <strong>SIZE</strong>&nbsp;{responseSizeString}
      </div>
    );
  }
}

SizeTag.propTypes = {
  // Required
  bytes: PropTypes.number.isRequired,

  // Optional
  small: PropTypes.bool,
  className: PropTypes.string
};

export default SizeTag;
