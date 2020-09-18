import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import DropdownMenu from ".";
import { OnClick } from "../types";
import { useThemeSelector } from "../themes/useThemeSelector";
import { dark, light } from "../themes/default/colors";
import { Theme } from "../colors";

export default {
  title: "DropdownMenu",
};

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: absolute;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.color.background};
  min-width: 50px;
`;

export const RowButton = styled.button<{ selected: boolean }>`
  border: none;
  outline: none;
  min-height: 20px;
  min-width: 50px;
  color: ${(props: { theme: Theme }) => props.theme.color.foreground};
  padding: 10px 20px;
  background-color: ${(props: { selected: boolean; theme: Theme }) =>
    props.selected
      ? props.theme.color.highlight
      : props.theme.color.background};
  white-space: nowrap;

  &:hover {
    background-color: ${(props: { theme: Theme }) =>
      props.theme.color.highlight};
  }
`;

export const ToggleButton = styled.button`
  color: ${(props: { theme: Theme }) => props.theme.color.foreground};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.color.background};
  padding: 10px 20px;
  border: none;
  outline: none;

  &:hover {
    color: yellow;
    background-color: ${(props: { theme: Theme }) =>
      props.theme.color.highlight};
  }
`;



export const withText: FC = () => {
  const [ThemeSelector, theme] = useThemeSelector(dark, { dark, light });

  return (
    <>
      <ThemeSelector />
      <ThemeProvider theme={theme}>
        <DropdownMenu
          Button={({ onClick }: { onClick: OnClick }) => (
            <ToggleButton onClick={onClick}>{category}</ToggleButton>
          )}
          List={Menu}
          options={items.map(({ label, onClick }) => () => (
            <RowButton selected={false} onClick={onClick}>
              {label}
            </RowButton>
          ))}
        />
      </ThemeProvider>
    </>
  );
};

const category = "File";
const items = [
  {
    label: "New",
    onClick: () => {
      alert("New");
    },
  },
  {
    label: "Open",
    onClick: () => {
      alert("Open");
    },
  },
  {
    label: "Save",
    onClick: () => {
      alert("Save");
    },
  },
  {
    label: "Close",
    onClick: () => {
      alert("Close");
    },
  },
];
