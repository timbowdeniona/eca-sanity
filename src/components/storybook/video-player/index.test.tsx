/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VideoPlayer, { VideoPlayerProps } from ".";
import { toVideoEmbedUrl } from "@/utils/helpers/toVideoEmbedUrl";
import { OTC_TARGETING } from "@/configs/one-trust";
import Cookies from "js-cookie";

// Mock the `OptanonConsent` cookie.
jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("VideoPlayer", () => {
  beforeEach(() =>
    (Cookies.get as jest.Mock).mockReturnValue(`groups=${OTC_TARGETING}:1`),
  );

  const props: VideoPlayerProps = {
    border: true,
    fullWidth: true,
    src: "https://www.youtube.com/embed/ajIbKu9-utw",
    bgImageUrl:
      "https://cdn.sanity.io/images/p28bar15/production/0ea8d1924b9f63dd27bf89112692c29cb1167699-1576x680.jpg",
  };

  it("renders the component with proper YouTube embed url", () => {
    const src = "https://www.youtube.com/embed/ajIbKu9-utw";
    render(<VideoPlayer {...props} src={src} />);

    const iframeEl = screen.getByTestId("embed-iframe");

    expect(iframeEl).toBeInTheDocument();
    expect(iframeEl).toHaveAttribute("src", toVideoEmbedUrl(src));
  });

  it("renders the component with short YouTube url", () => {
    const src = "https://youtu.be/ajIbKu9-utw";
    render(<VideoPlayer {...props} src={src} />);

    const iframeEl = screen.getByTestId("embed-iframe");

    expect(iframeEl).toBeInTheDocument();
    expect(iframeEl).toHaveAttribute("src", toVideoEmbedUrl(src));
  });

  it("renders the component with long YouTube url", () => {
    const src = "https://www.youtube.com/watch?v=ajIbKu9-utw";
    render(<VideoPlayer {...props} src={src} />);

    const iframeEl = screen.getByTestId("embed-iframe");

    expect(iframeEl).toBeInTheDocument();
    expect(iframeEl).toHaveAttribute("src", toVideoEmbedUrl(src));
  });

  it("renders the component with a vimeo embed url", () => {
    const src = "https://vimeo.com/347119375";
    render(<VideoPlayer {...props} src={src} />);

    const iframeEl = screen.getByTestId("embed-iframe");

    expect(iframeEl).toBeInTheDocument();
    expect(iframeEl).toHaveAttribute("src", toVideoEmbedUrl(src));
  });

  it("renders the component with provided alt", () => {
    const alt = "Youtube Embed";
    render(<VideoPlayer {...props} alt={alt} />);

    const iframeEl = screen.getByTitle(alt);

    expect(iframeEl).toBeInTheDocument();
  });

  it("renders the component with background image", () => {
    render(<VideoPlayer {...props} />);

    const iframeEl = screen.getByTestId("banner-wrapper");

    expect(iframeEl.style.backgroundImage).toBe(`url(${props.bgImageUrl})`);
  });
});
