import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Step from "./Step";

describe("Step Component", () => {
  const mockOnSelect = jest.fn();
  const mockOptions = [
    { label: "Option 1", icon: "🔧" },
    { label: "Option 2", icon: "⚙️" },
    { label: "Option 3", icon: "🛠️" },
  ];

  test("renders the title and options correctly", () => {
    render(<Step title="Test Step" options={mockOptions} onSelect={mockOnSelect} />);

  
    expect(screen.getByText("Test Step")).toBeInTheDocument();

    
    mockOptions.forEach((option) => {
      expect(screen.getByText(option.icon)).toBeInTheDocument();
    });
  });

  test("calls onSelect with the correct label when an option is clicked", () => {
    render(<Step title="Test Step" options={mockOptions} onSelect={mockOnSelect} />);

    const option1 = screen.getByText("🔧");
    const option2 = screen.getByText("⚙️");

   
    fireEvent.click(option1);
    expect(mockOnSelect).toHaveBeenCalledWith("Option 1");

    fireEvent.click(option2);
    expect(mockOnSelect).toHaveBeenCalledWith("Option 2");

    
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
  });

  test("logs the option label on mouse enter", () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    render(<Step title="Test Step" options={mockOptions} onSelect={mockOnSelect} />);

    const option1 = screen.getByText("🔧");

    
    fireEvent.mouseEnter(option1);

    expect(consoleLogSpy).toHaveBeenCalledWith("Option 1");
    consoleLogSpy.mockRestore(); 
  });

  test("renders correctly with no options", () => {
    render(<Step title="Empty Step" options={[]} onSelect={mockOnSelect} />);

   
    expect(screen.getByText("Empty Step")).toBeInTheDocument();

    
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
