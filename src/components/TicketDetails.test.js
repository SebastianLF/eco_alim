import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import TicketDetails from './TicketDetails'

describe('<TicketDetails />', () => {

  it('should not mandatory contain description', () => {
    const wrapper = shallow(
     <TicketDetails description='fake description' />
   );
   expect(wrapper.contains(<p><strong>Description: </strong>fake description</p>)).toEqual(true);
  })

})
