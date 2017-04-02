import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Button } from 'semantic-ui-react'
import TicketLigneProduitForm from './TicketLigneProduitForm'
import { shallow, render, mount } from 'enzyme';

describe('TicketLigneProduitForm',() => {

  it('Line is deleted when delete button is pressed', () => {

    // given
    const deleteProductLine = jest.fn();
    const products = [{ key: '1', text: 'product1', value: '1' }];
    const units = [{ key: '1', text: 'unit1', value: '1' }];
    const key = '1';
    const wrapper = mount(
      <TicketLigneProduitForm key={key} id={key} products={products} units={units} deleteProductLine={deleteProductLine}/>
    );

    //when
    const button = wrapper.find('button');
    button.simulate('click');

    // then
    expect(deleteProductLine).toHaveBeenCalled();
  });

  it.skip('should contain "Quantity" field', () => {
    // given
    const products = {
      "1": {
        id: "1",
        name: "thon rouge albacore",
      },
      "2": {
        id: "2",
        name: "crousti choc",
      },
      "3": {
        id: "3",
        name: "carotte",
      }
    }
    const units = {
      "1": {
        id: "1",
        name: "PU",
        description: "Prix unitaire"
      },
      "2": {
        id: "2",
        name: "P",
        description: "Poids"
      },
      "3": {
        id: "3",
        name: "L",
        description: "Litre"
      }
    }
    const mock = jest.fn();
    const key = 2;

    const wrapper = shallow(
      <TicketLigneProduitForm key={key} products={products} units={units} deleteProductLine={mock}/>
    );
    const input = <Form.Input label='Qté' name="qty" />

    //then
    expect(wrapper.contains(input)).toEqual(true)
  });

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TicketLigneProduitForm />, div)
  });
})
