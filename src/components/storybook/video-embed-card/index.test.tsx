/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { VideoEmbedCard } from ".";

describe("Storybook: VideoEmbedCard", () => {
  const defaultProps = {
    youtubeEmbedUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?si=G08yKDX5AyBSN1dO",
    title: "Video Title",
    summary: "Video summary",
    owner: {
      name: "John Doe",
      description: "CEO",
      imageUrl: "https://path/to/image.jpg",
    },
  };

  it("renders embedded video", () => {
    const { container } = render(<VideoEmbedCard {...defaultProps} />);

    const iframeEl = container.querySelector("iframe");

    expect(iframeEl).not.toBe(null);
    expect(iframeEl).toBeInTheDocument();
  });

  it("starts playing video when button is clicked", () => {
    const { container } = render(<VideoEmbedCard {...defaultProps} />);

    const buttonEl = screen.getByTestId("play-button");
    fireEvent.click(buttonEl);

    const iframeEl: HTMLIFrameElement | null =
      container.querySelector("iframe");
    if (!iframeEl) {
      throw new Error("iframe element not found");
    }

    expect(iframeEl.src).toContain("autoplay=1");
  });

  it("displays video title", () => {
    render(<VideoEmbedCard {...defaultProps} />);
    const titleEl = screen.getByText("Video Title");
    expect(titleEl).toBeInTheDocument();
  });

  it("displays video owner name and description", () => {
    render(<VideoEmbedCard {...defaultProps} />);
    const nameEl = screen.getByText(defaultProps.owner.name);
    const descriptionEl = screen.getByText(defaultProps.owner.description);
    expect(nameEl).toBeInTheDocument();
    expect(descriptionEl).toBeInTheDocument();
  });

  it("renders owner image when owner.imageUrl is provided", () => {
    render(<VideoEmbedCard {...defaultProps} />);
    const imgEl = screen.getByTestId("avatar-image");
    expect(imgEl).toBeInTheDocument();
  });

  it("renders user icon when owner.imageUrl is not provided", () => {
    const props = {
      ...defaultProps,
      owner: { name: "John Doe", description: "CEO" },
    };
    render(<VideoEmbedCard {...props} />);

    const iconEl = screen.getByTestId("avatar-icon");
    expect(iconEl).toBeInTheDocument();
  });

  it("displays video summary", () => {
    render(<VideoEmbedCard {...defaultProps} />);
    const summaryEl = screen.getByText(defaultProps.summary);
    expect(summaryEl).toBeInTheDocument();
  });
});
