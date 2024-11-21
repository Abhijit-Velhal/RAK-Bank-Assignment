import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  
  test("renders the first step initially", () => {
    render(<Carousel steps={steps} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.queryByText("Step 2")).not.toBeVisible();
    expect(screen.queryByText("Step 3")).not.toBeVisible();
  });

  test("moves to the next step when 'Next' is clicked", () => {
    render(<Carousel steps={steps} />);
    const nextButton = screen.getByText("Next");

    
    fireEvent.click(nextButton);
    expect(screen.getByText("Step 2")).toBeInTheDocument();

   
    fireEvent.click(nextButton);
    expect(screen.getByText("Step 3")).toBeInTheDocument();

   
    fireEvent.click(nextButton);
    expect(screen.getByText("Step 3")).toBeInTheDocument(); 
  });

  test("onComplete is not triggered until all steps are completed", () => {
    const onCompleteMock = jest.fn();
    render(<Carousel steps={steps} onComplete={onCompleteMock} />);
    const nextButton = screen.getByText("Next");

    
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    
    expect(onCompleteMock).not.toHaveBeenCalled();

    
  });
});
