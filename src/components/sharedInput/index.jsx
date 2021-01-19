import React from "react";
// import { TextField } from "@material-ui/core";
import { SharedInputElement } from "./style.js";

function SharedInput({
  width,
  height,
  label,
  name,
  value,
  _inputRef,
  _onChange,
  _error,
  _helperText,
  _type,
  _min,
  _max,
  _minLength,
  _maxLength,
  _defaultValue,
  _id
}) {
  return (
    <>
      <SharedInputElement
        margin="normal"
        variant="outlined"
        width={width}
        height={height}
        label={label}
        name={name}
        value={value}
        inputRef={_inputRef}
        error={_error}
        helperText={_helperText}
        onChange={_onChange}
        id={_id}
        type={_type}
        InputProps={{
          inputProps: {
            min: _min,
            max: _max,
            minLength: _minLength,
            maxLength: _maxLength,
          },
        }}
        defaultValue={_defaultValue}
      />
    </>
  );
}

export default SharedInput;
