import React, { useState } from 'react';

 const showInlineErrorMsg = (error) => {
  if (error) {
    return (
      <>
      <p className="text-left text-red-400 text-xs mt-1">
        {error}
      </p>
      </>
    );
  }
  return null;
};
export default showInlineErrorMsg;