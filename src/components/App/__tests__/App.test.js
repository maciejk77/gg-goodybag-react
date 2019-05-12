import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../index';


describe('<App />', () => {

  // const mockData = { 
  //   goodybags: [
  //       { sku: "BD01", price: 500 },
  //       { sku: "BD21", price: 750 },
  //       { sku: "BD27", price: 1000 },
  //       { sku: "BD30", price: 1200 },
  //       { sku: "BD33", price: 1500 },
  //       { sku: "BD34", price: 2000 },
  //       { sku: "BD37", price: 2500 },
  //   ],
  //   activeGoodybagIndex: 2
  // };
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders <App />', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
  
});
