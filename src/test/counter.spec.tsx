import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "@/components/Counter";

describe("Counter Test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("input 박스를 클릭하면 console.log가 출력된다", async () => {
    render(<Counter />);
    const consleSpy = jest.spyOn(console, "log");
    await userEvent.click(await screen.findByLabelText("인풋"));
    expect(consleSpy).toHaveBeenCalled();
  });

  it("count의 초기값은 0이며 카운트 증가 버튼을 클릭하면 count가 1증가한다", async () => {
    render(<Counter />);

    expect(await screen.findByTestId("count")).toHaveTextContent("0");
    await userEvent.click(screen.getByText(/카운트 증가/));
    expect(await screen.findByTestId("count")).toHaveTextContent("1");
  });

  it("카운트 증가 버튼이 존재한다", async () => {
    const { findByText } = render(<Counter />);
    expect(await findByText(/카운트 증가/)).toBeInTheDocument();
  });

  it("querySelector를 사용하여 수동으로 요소찾기", async () => {
    const { container } = render(<Counter />);
    expect(container.querySelector(".container")).toBeInTheDocument();
  });

  it("input 박스에 입력하면 div태그에 렌더링된다", async () => {
    render(<Counter />);

    await userEvent.click(await screen.findByLabelText(/키다운/));
    await userEvent.keyboard("hello");

    expect(await screen.findByTestId("text")).toHaveTextContent("hello");
  });
});
