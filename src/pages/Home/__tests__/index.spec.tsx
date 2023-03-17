/** React 测试库 */
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
/** redux provider */
import { render } from '../../Test/render';
/** 组件 */
import { Home } from '../';

describe('test Home', () => {

  it('initial render', () => {
    render(<Home name='Hello world' />, {});
    expect(screen.getByText('Hello world')).toBeInTheDocument();
    expect(screen.getByText('姓名: Nancy')).toBeInTheDocument();
    expect(screen.getByText('年龄: 12')).toBeInTheDocument();
    const textboxs = screen.getAllByRole('textbox');
    expect(textboxs).toHaveLength(2);
  });

  it('change name to Jack, change age to 18', () => {
    render(<Home name='Hello world' />, {});
    const textboxs = screen.getAllByRole('textbox');
    const nameInput = textboxs[0];
    const ageInput = textboxs[1];
    fireEvent.change(nameInput, {
      target: {
        value: 'Jack'
      }
    });
    fireEvent.change(ageInput, {
      target: {
        value: '18'
      }
    });
    expect(screen.getByText('姓名: Jack')).toBeInTheDocument();
    expect(screen.getByText('年龄: 18')).toBeInTheDocument();
  });

});