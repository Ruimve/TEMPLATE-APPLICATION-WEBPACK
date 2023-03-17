/** React 测试库 */
import '@testing-library/jest-dom';
import { screen, fireEvent, waitFor,act } from '@testing-library/react';
/** redux provider */
import { render } from '../../Test/render';
/** 组件 */
import { Sponsors } from '../';

describe('test Sponsors', () => {
  it('initial render', () => {
    render(<Sponsors name="Hello Sponsors" />, {});
    expect(screen.getByText('Hello Sponsors')).toBeInTheDocument();
    expect(screen.getByText('观众小明18')).toBeInTheDocument();
    expect(screen.getByText('false')).toBeInTheDocument();

    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(2);
    expect(btns[0].innerHTML).toEqual('请求');
    expect(btns[1].innerHTML).toEqual('状态');
  });

  it('query data', async () => {
    render(<Sponsors name="Hello Sponsors" />, {});
    const btns = screen.getAllByRole('button');
    fireEvent.click(btns[0]);
    expect(await screen.findAllByText('my18')).toHaveLength(1);
  });

  it('track status', async () => {
    /* 使用模拟定时器 */
    jest.useFakeTimers();
    /* 监听 setTimeout */
    jest.spyOn(global,'setTimeout');
    /** 渲染 */
    render(<Sponsors name="Hello Sponsors" />, {});
    /** 获取按钮 */
    const btns = screen.getAllByRole('button');
    /** 当前状态 false */
    expect(screen.getByText('false')).toBeInTheDocument();
    /** 模拟点击 */
    fireEvent.click(btns[1]);
    /** 调用次数 */
    expect(setTimeout).toBeCalledTimes(1);
    /** 当前状态 true */
    expect(screen.getByText('true')).toBeInTheDocument();
    /** 运行所有定时器 */
    await act(()=>jest.runAllTimers())
    /** 当前状态 false */
    expect(screen.getByText('false')).toBeInTheDocument();
  });
});