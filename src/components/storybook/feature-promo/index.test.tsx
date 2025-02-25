/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FeaturePromo, Props as FeaturePromoProps } from ".";

describe("Storybook: FeaturePromo", () => {
  const mockProps: FeaturePromoProps = {
    mediaType: "none",
    heading: "Test FeaturePromo",
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
    render(<FeaturePromo {...mockProps} />);

    const promoMedia = screen.queryByTestId("feat-promo-media");

    expect(promoMedia).not.toBeInTheDocument();
  });

  it("renders promo with image", () => {
    render(<FeaturePromo {...mockProps} image={mockImage} mediaType="image" />);

    const promoImage: HTMLImageElement = screen.getByTestId("feat-promo-image");

    expect(promoImage).toBeInTheDocument();
    expect(promoImage.src).toContain(
      `_next/image?url=${encodeURIComponent(mockImage)}`,
    );
  });

  it("renders promo with youtube embed", () => {
    render(
      <FeaturePromo
        {...mockProps}
        mediaType="youtube-embed"
        youtubeEmbedUrl={mockYoutubeEmbedUrl}
      />,
    );

    const promoEmbed = screen.getByTestId("feat-promo-embed");

    expect(promoEmbed).toBeInTheDocument();
  });

  it("renders promo with media on the right", () => {
    render(<FeaturePromo {...mockProps} image={mockImage} mediaType="image" />);

    const promoMedia = screen.getByTestId("feat-promo-container");

    expect(promoMedia).toBeInTheDocument();
    expect(promoMedia).toHaveClass("@cmd:flex-row-reverse");
  });

  it("renders promo with media on the left", () => {
    render(
      <FeaturePromo
        {...mockProps}
        image={mockImage}
        mediaPosition="left"
        mediaType="image"
      />,
    );

    const promoMedia = screen.getByTestId("feat-promo-container");

    expect(promoMedia).toBeInTheDocument();
    expect(promoMedia).toHaveClass("@cmd:flex-row");
  });

  it("renders promo with purple theme", () => {
    render(<FeaturePromo {...mockProps} />);

    const promoContainer = screen.getByTestId("feat-promo-container");

    expect(promoContainer).toHaveClass("bg-purple");
    expect(promoContainer).toHaveClass("text-white");
  });

  it("renders promo with light theme", () => {
    render(<FeaturePromo {...mockProps} variant="secondary" />);

    const promoContainer = screen.getByTestId("feat-promo-container");
    const headingEl = screen.getByTestId("feat-promo-heading");

    expect(headingEl).toHaveClass("text-purple");
    expect(promoContainer).not.toHaveClass("bg-purple");
    expect(promoContainer).not.toHaveClass("text-white");
  });

  it("renders promo with link", () => {
    render(<FeaturePromo {...mockProps} />);

    const promoLink = screen.getByTestId("feat-promo-link");

    expect(promoLink).toBeInTheDocument();
    expect(promoLink).toHaveAttribute("href", mockProps.link);
  });

  it("renders promo heading", () => {
    render(<FeaturePromo {...mockProps} />);

    const promoHeading = screen.getByTestId("feat-promo-heading");

    expect(promoHeading).toBeInTheDocument();
    expect(promoHeading).toHaveTextContent(mockProps.heading);
  });

  it("renders promo description", () => {
    render(<FeaturePromo {...mockProps} />);

    const promoDesc = screen.getByTestId("feat-promo-description");

    expect(promoDesc).toBeInTheDocument();
    expect(promoDesc).toHaveTextContent(mockProps.description as string);
  });
});
