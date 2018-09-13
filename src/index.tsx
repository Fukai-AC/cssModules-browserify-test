import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Test } from './components/test';

const dom = document.createElement('div');
dom.id = 'react-container';
document.body.appendChild(dom);
ReactDOM.render(<Test />, dom);