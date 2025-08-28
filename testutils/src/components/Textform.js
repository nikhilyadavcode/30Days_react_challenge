import React from 'react';

export default function TextForm() {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" id="myBox" rows="3"></textarea>
      </div>
    </div>
  );
}
