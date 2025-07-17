"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookComponent: React.FC = () => {
  const pdfUrl = "/pdf/book.pdf";
  const bookCoverUrl = "/img/book-cover.jpeg"; // Left side (book cover with spine)
  const rightImageUrl = "/img/cover.jpg";       // Right side (open book with spices)

  const handleReadBook = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="container my-5  border rounded-4 shadow">
      <h3 className="mb-5 text-center fw-bold">
        Know More About Mr. V.K. Bansal: The Icon of Excellence in Education
      </h3>
      <div className="row g-4  mb-3  align-items-stretch">
        {/* Left: Book Cover */}
        <div className="col-12 col-md-6">
          <div className="h-100 border rounded shadow-sm overflow-hidden">
            <img
              src={bookCoverUrl}
              alt="From Lantern to Lighthouse"
              className="img-fluid h-100 w-100"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Right: Decorative Book Image with Button */}
        <div className="col-12 col-md-6">
          <div className="position-relative h-100 border rounded shadow-sm overflow-hidden">
            <img
              src={rightImageUrl}
              alt="Open book background"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <button
              className="btn btn-primary position-absolute"
              style={{
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 24px",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
              onClick={handleReadBook}
            >
              Read Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
