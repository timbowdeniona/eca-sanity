/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Promo, Props as PromoProps } from ".";

describe("Storybook: Promo", () => {
  const mockProps: PromoProps = {
    mediaType: "none",
    heading: "Test Promo",
    description: "This is a test promo",
    link: "https://example.com",
    linkText: "Learn More",
    alt: "Test Image",
    variant: "primary",
    mediaPosition: "right",
  };

  const mockImage = "https://example.com/image.jpg";
  const mockYoutubeEmbedUrl = "https://example.com/embed";

  it("renders promo without media", () => {
    render(<Promo {...mockProps} />);

    const promoMedia = screen.queryByTestId("promo-media");

    expect(promoMedia).not.toBeInTheDocument();
  });

  it("renders promo with image", () => {
    render(<Promo {...mockProps} image={mockImage} mediaType="image" />);

    const promoImage: HTMLImageElement = screen.getByTestId("promo-image");

    expect(promoImage).toBeInTheDocument();
    expect(promoImage.src).toContain(
      `_next/image?url=${encodeURIComponent(mockImage)}`,
    );
  });

  it("renders promo with youtube embed", () => {
    render(
      <Promo
        {...mockProps}
        mediaType="youtube-embed"
        youtubeEmbedUrl={mockYoutubeEmbedUrl}
      />,
    );

    const promoEmbed = screen.getByTestId("promo-embed");

    expect(promoEmbed).toBeInTheDocument();
  });

  it("renders promo with media on the right", () => {
    render(<Promo {...mockProps} image={mockImage} mediaType="image" />);

    const promoMedia = screen.getByTestId("promo-container");

    expect(promoMedia).toBeInTheDocument();
    expect(promoMedia).toHaveClass("md:flex-row-reverse");
  });

  it("renders promo with media on the left", () => {
    render(
      <Promo
        {...mockProps}
        image={mockImage}
        mediaPosition="left"
        mediaType="image"
      />,
    );

    const promoMedia = screen.getByTestId("promo-container");

    expect(promoMedia).toBeInTheDocument();
    expect(promoMedia).toHaveClass("md:flex-row");
  });

  it("renders promo with purple theme", () => {
    render(<Promo {...mockProps} />);

    const promoContainer = screen.getByTestId("promo-container");

    expect(promoContainer).toHaveClass("bg-purple");
    expect(promoContainer).toHaveClass("text-white");
  });

  it("renders promo with light theme", () => {
    render(<Promo {...mockProps} variant="secondary" />);

    const promoContainer = screen.getByTestId("promo-container");
    const headingEl = screen.getByTestId("promo-heading");

    expect(headingEl).toHaveClass("text-purple");
    expect(promoContainer).not.toHaveClass("bg-purple");
    expect(promoContainer).not.toHaveClass("text-white");
  });

  it("renders promo with link", () => {
    render(<Promo {...mockProps} />);

    const promoLink = screen.getByTestId("promo-link");

    expect(promoLink).toBeInTheDocument();
    expect(promoLink).toHaveAttribute("href", mockProps.link);
  });

  it("renders promo heading", () => {
    render(<Promo {...mockProps} />);

    const promoHeading = screen.getByTestId("promo-heading");

    expect(promoHeading).toBeInTheDocument();
    expect(promoHeading).toHaveTextContent(mockProps.heading);
  });

  it("renders promo description", () => {
    render(<Promo {...mockProps} />);

    const promoDesc = screen.getByTestId("promo-description");

    expect(promoDesc).toBeInTheDocument();
    expect(promoDesc).toHaveTextContent(mockProps.description as string);
  });
});
