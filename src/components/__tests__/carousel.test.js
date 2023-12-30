
// Unit Testing

import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
// import WhatsOnMind from "../carousels/WhatsOnMind";
import Footer from "../Footer";

test("testing the WhatsOnMind component", () => {
    render(<Footer/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
} )