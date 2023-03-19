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
    expect(screen.getByText('loading')).toBeInTheDocument();

    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(3);
    expect(btns[0].innerHTML).toEqual('请求');
    expect(btns[1].innerHTML).toEqual('状态-成功');
    expect(btns[2].innerHTML).toEqual('状态-失败');
  });

  it('query data', async () => {
    render(<Sponsors name="Hello Sponsors" />, {});
    const btns = screen.getAllByRole('button');
    fireEvent.click(btns[0]);
    expect(await screen.findAllByText('my18')).toHaveLength(1);
  });

  it('track success status', async () => {
    /* 使用模拟定时器 */
    jest.useFakeTimers();
    /* 监听 setTimeout */
    jest.spyOn(global,'setTimeout');
    /** 渲染 */
    render(<Sponsors name="Hello Sponsors" />, {});
    /** 获取按钮 */
    const btns = screen.getAllByRole('button');
    /** 当前状态 loading */
    expect(screen.getByText('loading')).toBeInTheDocument();
    /** 模拟点击 */
    fireEvent.click(btns[1]);
    /** 调用次数 */
    expect(setTimeout).toBeCalledTimes(1);
    /** 当前状态 true */
    expect(screen.getByText('loading')).toBeInTheDocument();
    /** 运行所有定时器 */
    await act(()=>jest.runAllTimers())
    /** 当前状态 false */
    expect(screen.getByText('success')).toBeInTheDocument();
  });

  it('track fail status', async () => {
    /* 使用模拟定时器 */
    jest.useFakeTimers();
    /* 监听 setTimeout */
    jest.spyOn(global,'setTimeout');
    /** 渲染 */
    render(<Sponsors name="Hello Sponsors" />, {});
    /** 获取按钮 */
    const btns = screen.getAllByRole('button');
    /** 当前状态 loading */
    expect(screen.getByText('loading')).toBeInTheDocument();
    /** 模拟点击 */
    fireEvent.click(btns[2]);
    /** 调用次数 */
    expect(setTimeout).toBeCalledTimes(1);
    /** 当前状态 true */
    expect(screen.getByText('loading')).toBeInTheDocument();
    /** 运行所有定时器 */
    await act(()=>jest.runAllTimers())
    /** 当前状态 false */
    expect(screen.getByText('fail')).toBeInTheDocument();
  });
});