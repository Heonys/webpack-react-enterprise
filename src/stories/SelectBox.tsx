import styled from "@emotion/styled";
import React, { ComponentPropsWithoutRef } from "react";

export type SelectBoxProps = {
  options: { value: string; label: string }[];
  value: string;
  borderColor?: string;
  fontColor?: string;
} & ComponentPropsWithoutRef<"select">;

export const SelectBox = ({
  options,
  borderColor = "#ccc",
  fontColor = "black",
  ...props
}: SelectBoxProps) => {
  return (
    <StyledSelect {...props} borderColor={borderColor} fontColor={fontColor}>
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </StyledSelect>
  );
};

type SelectProps = {
  borderColor: string;
  fontColor: string;
};

const StyledSelect = styled.select<SelectProps>`
  padding: 8px;
  font-size: 16px;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  color: ${({ fontColor }) => fontColor};
  border-radius: 4px;
  cursor: pointer;
`;

const Option = styled.option`
  background-color: white;
  color: black;
`;
