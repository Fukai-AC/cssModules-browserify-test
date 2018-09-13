import * as React from 'react';
import './test.less';
import { Index } from './index';

export class Test extends React.Component<{}, {}> {
  render() {
    return (
      <div styleName="test">
        你好
        <Index />
      </div>
    );
  }
}